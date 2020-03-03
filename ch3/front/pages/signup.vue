<template>
  <v-container>
    <v-card>
      <v-subheader>회원가입</v-subheader>
      <v-container>
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-text-field
            label="이메일"
            v-model="email"
            type="email"
            :rules="emailRules"
            required
          />

          <v-text-field
            label="비밀번호"
            v-model="password"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-text-field
            label="비밀번호 확인"
            v-model="passwordCheck"
            type="password"
            :rules="passwordCheckRules"
            required
          />
          <v-text-field
            label="닉네임"
            v-model="nickname"
            type="nickname"
            :rules="nicknameCheckRules"
            required
          />
          <v-checkbox
            label="가입하시겠습니까?"
            v-model="terms"
            type="nickname"
            :rules="termsCheckRules"
            required
          />
          <v-btn color="green" type="submit">가입하기</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      passwordCheck: "",
      nickname: "",
      terms: "", //약관 동의
      emailRules: [
        v => !!v || "이메일은 필수입니다.",
        v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다."
      ],
      nicknameCheckRules: [v => !!v || "닉네임은 필수입니다."],
      passwordRules: [v => !!v || "비밀번호는 필수입니다."],
      passwordCheckRules: [
        v => !!v || "비밀번호 확인은 필수입니다.",
        v => v === this.password || "비밀번호가 일치하지 않습니다."
      ],
      termsCheckRules: [v => !!v || "약관에 동의해주세요."]
    };
  },
  head() {
    return {
      title: "회원가입"
    };
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("users/signUp", {
          nickname: this.nickname,
          email: this.email
        });
      } else {
        alert("폼이 유효하지 않습니다.");
      }
    }
  },
  middleware: "anonymous"
};
</script>

<style scoped></style>
