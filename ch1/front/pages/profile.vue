<template>
  <div>hello {{ name }}</div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      name: "Nuxt.js"
    };
  },
  head() {
    return {
      title: "프로필"
    };
  }
};
</script>

<style scoped></style>
