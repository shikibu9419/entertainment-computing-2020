<template>
  <div>
    <transition-group name="list" class="comment-area">
      <span v-for="(comment, index) in comments" v-bind:key="index">
        <comment :content="comment" />
      </span>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Comment from '../components/Comment.vue';

export default Vue.extend({
  components: {
    Comment
  },
  data () {
    return {
      comments: ['コメント例'],
      index: 0
    }
  },
  mounted () {
    const contents = ['なるほど', 'お〜', 'どゆこと？'];
    setInterval(() => {
      this.createComment(contents[this.index]);
      this.index = (this.index + 1) % contents.length;
    }, 1000)
    setInterval(() => {
      if (this.comments.length > 2)
        this.removeComment();
    }, 1500)
  },
  methods: {
    createComment (content: string) {
      // const CommentClass = Vue.extend(Comment);
      // const instance = (new CommentClass({ propsData: { content } })).$mount();
      // document.getElementById('comment-area')?.appendChild(instance.$el);
      this.comments.push(content);
    },
    removeComment () {
      this.comments.splice(0, 1);
    }
  }
})
</script>

<style>
.comment-area {
  position: absolute;
  bottom: 0;
  display: flex;
  padding-bottom: 20px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>
