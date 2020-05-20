export const state = () => ({
  mainPosts: [],
  hasMorePost: true, // 이게 false이면 서버에서 게시글을 더 이상 불러오지 않음.
});

const totalPosts = 101;
const limit = 10; // 실무에서는 limit을 안 쓰는데 이유는 실무에서는 네트워크가 껴있으니깐 total post가 계속 바뀔 수도 있기 때문에, 나중에 lastId 기반으로 한다. 그리고 쓰로톨링으로 인피니티 스크롤을 한다.

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload); //push는 뒤에 글을 넣는 거고 unshift는 맨 위에 글을 넣는 것이다.
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex((v) => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex((v) => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  },
  loadPosts(state, payload) {
    const diff = totalPosts - state.mainPosts.length; // 아직 안 불러온 게시글 수

    const fakePosts = Array(diff > limit ? limit : diff)
      .fill()
      .map((v) => ({
        id: Math.random().toString(),
        User: {
          id: 1,
          nickname: "인쵸리",
        },
        content: `무한스크롤잉 ~ ${Math.random()}`,
        Comment: [],
        Images: [],
      }));
    state.mainPosts = state.mainPosts.concat(fakePosts);
    state.hasMorePost = fakePosts.length === limit; // 만약 limit이랑 길이가 맞지 않으면 false가 되므로 hasMorePost 값에 false를 넣는 거임.
  },
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
  },
};
