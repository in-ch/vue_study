<template>
  <v-app>
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">NodeBird</nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-text-field
            label="검색"
            hide-details
            prepend-icon="mdi-magnify"
            :style="{ display: 'flex', alignItems: 'center' }"
          />

          <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>프로필</div>
          </v-btn>

          <v-btn
            text
            nuxt
            to="/signup"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>

    <div>{{ posts }}</div>
    <v-btn @click="onChangeName">바이바이</v-btn>
    <v-row no-gutters>
      <!-- no-gutters 같은 경우 세로줄 간의 패딩을 없앨 수 있다. -->
      <v-col cols="12" md="4">
        <login-form />
      </v-col>

      <v-col cols="12" md="8">
        <Nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LoginForm from "~/components/LoginForm";

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      name: "Nuxt.js"
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.name;
    }
  },
  methods: {
    onChangeName() {
      this.$store.commit("posts/bye");
      console.log(this.$store.state.posts.name);
    }
  }
};
</script>

<style scoped></style>
