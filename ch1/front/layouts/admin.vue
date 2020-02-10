<template>
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/profile">Profile</nuxt-link>
      <nuxt-link to="/signup">signUp</nuxt-link>
      <nuxt-link to="/admin">Admin</nuxt-link>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nuxt.js"
    };
  }
};
</script>

<style scoped></style>
