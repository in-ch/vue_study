<template>
  <div>
    <v-container>
      <post-card />
      <post-card />
      <post-card />
      <post-card />
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
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
