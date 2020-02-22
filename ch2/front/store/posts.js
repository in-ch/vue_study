export const state = () => ({
  mainPosts: []
});

export const mutations = {
  addMainPost(state) {
    state.mainPosts.unshift(payload); //push는 뒤에 글을 넣는 거고 unshift는 맨 위에 글을 넣는 것이다.
  }
};

export const actions = {
  add({ commit }, payload) {
    // 서버에 게시글 등록 요청 보낼 것이다.
    commit("addMainPost");
  }
};
