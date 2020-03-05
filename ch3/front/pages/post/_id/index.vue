<template>
  <!-- 이 페이지는 주소/post/id값 이라고 주소창에 썻을 때만 접근이 가능함 -->
  <v-container v-if="post">
    <post-card :post="post" />
  </v-container>
  <div v-else>
    <h5>해당 아이디의 게시글이 존재하지 않습니다.</h5>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";

export default {
  components: {
    PostCard
  },
  computed: {
    post() {
      return this.$store.state.posts.mainPosts.find(
        v => v.id === parseInt(this.$route.params.id, 10)
      ); // _가 params를 의미하고 id는 _ 뒤에 있는 거 나타내는 거임, 그리고 params는 문자열이기 때문에 int로 바꾸어 주는 거임
    }
  }
};
</script>

<style scoped></style>
