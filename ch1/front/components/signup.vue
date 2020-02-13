<template>
  <v-container>
    <v-card>
      <v-subheader>회원가입</v-subheader>
      <v-container>
        <v-form>
          <v-text-field label="이메일" type="email" required />
          <v-text-field label="비밀번호" type="password" required />
          <v-text-field label="비밀번호 확인" type="password" required />
          <v-text-field label="닉네임" type="nickname" required />
          <v-checkbox label="가입하시겠습니까?" type="nickname" required />
          <v-btn color="green" type="submit">가입하기</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
