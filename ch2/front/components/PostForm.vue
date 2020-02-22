<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="successMessage"
          :success="success"
          :rules="textRules"
          @input="onChangeTextarea"
        />
        <!-- outlined는 테두리 그려주는 거, auto-grow는 텍스트가 길어지면 자동으로 길어지는 거, clearalbe는 x 떠서 글 한 번에 없애 주는 거 -->
      </v-form>
      <v-btn type="submit" color="green" absolute right>짹쨱</v-btn>
      <v-btn>이미지 업로드</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      content: "",
      hideDetails: true,
      successMessage: "",
      success: false,
      textRules: [v => !!v || "내용을 입력하세요."]
    };
  },
  computed: {
    ...mapState(["users/me"])
  },
  methods: {
    onChangeTextarea() {
      this.hideDetails = false; //이미지 업로드 위에 빈 공간이 생기게 만드는 것이다. ( 오류 메시지를 위해서 )
      this.success = false;
      this.successMessage = "";
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("posts/add", {
            content: this.content,
            User: {
              nickname: this.me.nickname
            },
            Comments: [],
            Images: [],
            id: Date.now(),
            createdAt: Date.now()
          })
          .then(() => {
            this.hideDetails = false;
            this.success = true;
            this.successMessage = "게시글 등록 성공";
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style scoped></style>
