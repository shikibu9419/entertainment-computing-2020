<!-- Please remove this file from your project -->
<template>
  <transition>
    <div v-show="isShown" class='arrow-box' :style="{ left: `${posX}vw` }">
      {{ content }}
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    content: String
  },
  data () {
    return {
      isShown: false,
      posX: 0,
    }
  },
  mounted () {
    this.isShown = true;
    this.posX = Math.random() * 100;

    setTimeout(() => {
      this.isShown = false;
      this.$destroy();
      this.$el?.parentNode?.removeChild(this.$el);
    }, 5000);
  },
})
</script>

<style>
.arrow-box{
    position:absolute;
    width:300px;
    height:70px;
    background:#FFFFFF;
    padding:4px;
    text-align:center;
    border:2px solid #000000;
    color:#000000;
    font-size:20px;
    font-weight:bold;
    border-radius:50px;
    -webkit-border-radius:50px;
    -moz-border-radius:50px;
    margin-right: 4px;
}
.arrow-box:after,.arrow-box:before{
    border: solid transparent;
    content:'';
    height:0;
    width:0;
    pointer-events:none;
    position:absolute;
    top:100%;
    left:24%;
}
.arrow-box:after{
    border-color: rgba(255, 255, 255, 0);
    border-top-width:20px;
    border-bottom-width:20px;
    border-left-width:15px;
    border-right-width:15px;
    margin-left: -15px;
    border-top-color:#FFFFFF;
}
.arrow-box:before{
    border-color: rgba(0, 0, 0, 0);
    border-top-width:22px;
    border-bottom-width:22px;
    border-left-width:17px;
    border-right-width:17px;
    margin-left: -17px;
    margin-top: 2px;
    border-top-color:#000000;
}

.v-enter-active, .v-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.v-enter, .v-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>
