<template>
  <div>
    <div id="comment-area" class="comment-area">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Comment from '../components/Comment.vue';

import io from 'socket.io-client';

export default Vue.extend({
  components: { Comment },
  data () {
    return {
      index: 0,
      socket: io('https://ec5e-133-51-231-64.jp.ngrok.io'),
    }
  },
  mounted () {
    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });
    this.socket.on('message', msg => {
      this.createComment(msg);
    });

    const contents = ['なるほど', 'お〜', 'どゆこと？'];
    setInterval(() => {
//       this.createComment(contents[this.index]);
      this.index = (this.index + 1) % contents.length;
//       this.socket.send(contents[this.index]);
    }, 1000)
  },
  methods: {
    createComment (content: string) {
      const CommentClass = Vue.extend(Comment);
      const instance = (new CommentClass({ propsData: { content } })).$mount();
      document.getElementById('comment-area')?.appendChild(instance.$el);
    },
  }
})
</script>

<style>
.comment-area {
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
}
</style>
