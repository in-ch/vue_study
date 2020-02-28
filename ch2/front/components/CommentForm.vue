<template>
  <v-form
    ref="form"
    v-model="valid"
    style="position:Relative"
    @submit.prevent="onSubmitForm"
  >
    <v-textarea
      v-model="content"
      filled
      label="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      success-messages="successMessages"
      @input="onChangeTextarea"
    >
    </v-textarea>
    <v-btn color="green" dark absolute top right type="submit">삐약</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      content: "",
      success: false,
      successMessages: "",
      hideDetails: true
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
    onChangeTextarea(value) {
      if (value.length) {
        (this.hideDetails = true),
          (this.success = false),
          (this.successMessages = "");
      }
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("posts/addComment", {
            id: Date.now(),
            postId: this.postId,
            required: true
          })
          .then(() => {
            this.content = "";
            this.hideDetails = false;
            this.success = true;
            this.successMessage = "게시글 등록 성공!";
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style></style>
