<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="sucessMessage"
          :success="success"
          :rules="[ v= > !!v.trim() || '내용을 입력하세요.']"
          @input="onChangeTextarea"
        />
        <!-- outlined는 테두리 그려주는 거, auto-grow는 텍스트가 길어지면 자동으로 길어지는 거, clearalbe는 x 떠서 글 한 번에 없애 주는 거 -->
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hideDetails: false,
      sucessMessage: "",
      success: false
    };
  },
  methods: {
    onChangeTextarea() {},
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("posts/add", {});
      }
    }
  }
};
</script>

<style scoped></style>
