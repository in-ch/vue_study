<template>
  <div>
    <v-container>
      <div>
        <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
      </div>
    </v-container>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";
export default {
  components: {
    PostCard
  },
  data() {
    return {
      name: "Nuxt.js"
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
    mainPosts() {
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost() {
      return this.$store.state.posts.hasMorePost;
    }
  },
  methods: {
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (this.hasMorePost) {
          this.$store.dispatch("posts/loadPosts");
        }
      }
    }
  },
  fetch({ store }) {
    // fetch는 컴포넌트가 화면에 보이기 전에 store에 비동기적으로 데이터를 넣을 때 사용한다.
    store.dispatch("posts/loadPosts");
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped></style>
