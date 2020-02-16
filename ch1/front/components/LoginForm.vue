<template>
  <v-container>
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field
            label="이메일"
            type="email"
            :rules="emailRules"
            v-model="email"
            required
          />
          <v-text-field
            label="비밀번호"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
          />
          <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
          <v-btn nuxt to="/signup">회원가입</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        v => !!v || "이메일은 필수입니다.",
        v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다."
      ],
      passwordRules: [v => !!v || "비밀번호는 필수입니다."]
    };
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        alert("로그인 시도");
      } else {
        alert("값을 다 입력해주세요.");
      }
    }
  }
};
</script>

<style></style>
