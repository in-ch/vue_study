<template>
  <div>
    <v-container>
      <post-form v-if="me" />
      <post-card />
      <post-card />
      <post-card />
      <post-card />
    </v-container>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";
import PostForm from "~/components/PostForm";
export default {
  components: {
    PostCard,
    PostForm
  },
  data() {
    return {
      name: "Nuxt.js"
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {}
};
</script>

<style scoped></style>
