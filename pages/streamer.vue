<template>
  <div>
    <div id="comment-area" class="comment-area">
      <comment content="あ," />
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
      index: 0
    }
  },
  mounted () {
    const socket = io('http://localhost:8000')
    socket.on('new-msg', msg => {
      this.createComment(msg);
    })

    const contents = ['なるほど', 'お〜', 'どゆこと？'];
    setInterval(() => {
      this.createComment(contents[this.index]);
      this.index = (this.index + 1) % contents.length;
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
