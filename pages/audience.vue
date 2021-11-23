<template>
  <div class="container">

    <div class="video">
      <div id="video-container">
        <video id="pose-video" class="layer" playsinline></video>
        <canvas id="pose-canvas" class="layer"></canvas>
        <div id="pose-result" class="layer"></div>
      </div>
    </div>

    <div class="debug">
      <table class="summary">
        <thead>
          <tr>
            <th>Idx</th>
            <th>Finger</th>
            <th style="width: 110px">Curl</th>
            <th style="width: 170px">Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Thumb</td>
            <td><span id="curl-0">-</span></td>
            <td><span id="dir-0">-</span></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Index</td>
            <td><span id="curl-1">-</span></td>
            <td><span id="dir-1">-</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Middle</td>
            <td><span id="curl-2">-</span></td>
            <td><span id="dir-2">-</span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ring</td>
            <td><span id="curl-3">-</span></td>
            <td><span id="dir-3">-</span></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Pinky</td>
            <td><span id="curl-4">-</span></td>
            <td><span id="dir-4">-</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

import fingerpose from 'fingerpose'
import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';

import io from 'socket.io-client';
import gestures from '../lib/gestures'

const config = {
  video: { width: 640, height: 480, fps: 30 }
};

const landmarkColors = {
  thumb: 'red',
  indexFinger: 'blue',
  middleFinger: 'yellow',
  ringFinger: 'green',
  pinky: 'pink',
  palmBase: 'white'
};

const gestureStrings = {
  'thumbs_up': '👍',
  'victory': '✌🏻',
  'ok': '👌',
};

async function initCamera(width, height, fps) {
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width,
      height,
      frameRate: { max: fps }
    }
  };

  const video = document.querySelector("#pose-video");
  video.width = width;
  video.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise(resolve => {
    video.onloadedmetadata = () => { resolve(video) };
  });
}

function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function updateDebugInfo(data) {
  for(const fingerIdx in data) {
    document.getElementById("curl-" + fingerIdx).innerText = data[fingerIdx][1];
    document.getElementById("dir-" + fingerIdx).innerText = data[fingerIdx][2];
  }
}

export default Vue.extend({
  data() {
    return {
      video: null,
      ctx: null,
      resultLayer: null,
      estimator: null,
      model: null
    }
  },
  mounted() {
    // TODO: Change host
    // this.socket = io('http://localhost:8000');
    // this.socket.on('new-msg', msg => {
    //   console.log(msg);
    // });

    const canvas = document.querySelector("#pose-canvas");
    canvas.width = config.video.width;
    canvas.height = config.video.height;

    initCamera(
      config.video.width, config.video.height, config.video.fps
    ).then(video => {
      video.play();
      video.addEventListener("loadeddata", _ => {
        this.setupEstimation();
      });
    });
  },
  methods: {
    async setupEstimation() {
      this.video = document.querySelector("#pose-video");
      const canvas = document.querySelector("#pose-canvas");
      this.ctx = canvas.getContext("2d");
      this.resultLayer = document.querySelector("#pose-result");

      // configure gesture estimator
      // add "✌🏻" and "👍" as sample gestures
      const knownGestures = [
        fingerpose.Gestures.VictoryGesture,
        fingerpose.Gestures.ThumbsUpGesture,
        gestures.OkGesture,
      ];
      this.estimator = new fingerpose.GestureEstimator(knownGestures);
      this.model = await handpose.load();

      setInterval(this.estimateHands, 1000 / config.video.fps)
    },
    async estimateHands() {
      // clear canvas overlay
      this.ctx.clearRect(0, 0, config.video.width, config.video.height);
      this.resultLayer.innerText = '';

      // get hand landmarks from video
      // Note: Handpose currently only detects one hand at a time
      // Therefore the maximum number of predictions is 1
      const predictions = await this.model.estimateHands(this.video, true);

      for(let i = 0; i < predictions.length; i++) {
        // draw colored dots at each predicted joint position
        for(const part in predictions[i].annotations) {
          for(const point of predictions[i].annotations[part]) {
            drawPoint(this.ctx, point[0], point[1], 3, landmarkColors[part]);
          }
        }

        // estimate gestures based on landmarks
        // using a minimum score of 9 (out of 10)
        // gesture candidates with lower score will not be returned
        const est = this.estimator.estimate(predictions[i].landmarks, 9);
        if (est.gestures.length > 0) {
          // find gesture with highest match score
          const result = est.gestures.reduce((p, c) => {
            return (p.score > c.score) ? p : c;
          });

          this.resultLayer.innerText = gestureStrings[result.name];

          // send to server
          this.socket.emit('send-msg', result.name);
        }

        // update debug info
        updateDebugInfo(est.poseData);
      }
    },
  }
})
</script>

<style>
  * {
    box-sizing: border-box;
    user-select: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333333;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 20px auto;
    display: flex;
  }

  .video,
  .debug {
    padding: 0 20px;
  }

  table.summary {
    border: 1px solid #333;
    border-collapse: collapse;
  }

  table.summary td,
  table.summary th {
    border: 1px solid #333;
    padding: 5px 8px;
  }

  #video-container {
    width: 640px;
    height: 480px;
    position: relative;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #pose-video {
    transform: scaleX(-1);
  }

  #pose-result {
    font-size: 100px;
    text-align: right;
    padding: 20px 30px 0 0;
  }
</style>
