<!-- Please remove this file from your project -->
<template>
  <transition>
    <div v-show="isShown" class="reaction" :style="{ left: `${posX}vw` }">
      {{ gestures[content] }}
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
      gestures: {
        'thumbs_up': '👍',
        'victory': '✌🏻',
        'ok': '👌',
        'gun': '🔫',
        'heart': '😍',
        'killyou': '🥳'
      },
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
.reaction {
    position: absolute;
    padding:4px;
    text-align:center;
    font-size: 3em;
    font-weight:bold;
    margin-right: 4px;
    bottom: 1em;
}

.v-enter-active, .v-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.v-enter, .v-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>
