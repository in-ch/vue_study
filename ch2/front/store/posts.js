export const state = () => ({
  mainPosts: []
});

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload); //push는 뒤에 글을 넣는 거고 unshift는 맨 위에 글을 넣는 것이다.
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  }
};

export const actions = {
  add({ commit }, payload) {
    // 서버에 게시글 등록 요청 보낼 것이다.
    commit("addMainPost", payload);
  },
  remove({ commit }, payload) {
    // 게시글을 삭제한다.
    commit("removeMainPost", payload);
  }
};
