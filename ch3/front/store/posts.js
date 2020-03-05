export const state = () => ({
  mainPosts: [],
  hasMorePost: true // 이게 false이면 서버에서 게시글을 더 이상 불러오지 않음.
});

const limit = 10;

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload); //push는 뒤에 글을 넣는 거고 unshift는 맨 위에 글을 넣는 것이다.
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  },
  loadPosts(state, payload) {
    const fakePosts = Array(limit)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        User: {
          id: 1,
          nickname: "제로초"
        },
        content: `Hello infinite scrolling ~ ${Math.random()}`,
        Comment: [],
        Images: []
      }));
    state.mainPosts = state.mainPosts.concat(fakePosts);
    state.hasMorePost = fakePosts.length === limit; // 만약 limit이랑 길이가 맞지 않으면 false가 되므로 hasMorePost 값에 false를 넣는 거임.
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
  },
  addComment({ commit }, payload) {
    // 댓글 달기
    commit("addComment", payload);
  },
  loadPosts({ commit, state }, payload) {
    commit("loadPosts");
  }
};
