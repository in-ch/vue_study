export const state = () => ({
  me: null,
  followerList: [
    {
      id: 1,
      nickname: "히어로"
    },
    {
      id: 2,
      nickname: "엘리멘탈"
    },
    {
      id: 3,
      nickname: "데스티니"
    }
  ],
  followingList: [
    {
      id: 1,
      nickname: "히어로+"
    },
    {
      id: 2,
      nickname: "엘리멘탈+"
    },
    {
      id: 3,
      nickname: "데스티니+"
    }
  ]
});

export const mutations = {
  //단순한 동기적 작업을 시킬 때 사용한다.
  setMe(state, payload) {
    state.me = payload; //payload는 회원 정보
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  addFollowing({ commit }, payload) {
    state.followerList.push(payload);
  },

  addFollower({ commit }, payload) {
    state.followingList.push(payload);
  },

  removeFollowing({ commit }, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followerList.splice(index, 1);
  },

  removeFollower({ commit }, payload) {
    const index = state.followingList.findIndex(v => v.id === payload.id);
    state.followingList.splice(index, 1);
  }
};

export const actions = {
  // 비동기적인, 서버통신 등의 복잡한 작업이 들어 간다.
  signUp(
    { commit, dispatch, state, rootState, getters, rootGetters },
    payload
  ) {
    //commit은 mutations을 실행시키는 거, displatch는 actions를 실행시키는 거,
    commit("setMe", payload); // 유저의 상태를 바꾸기 위해 사용
  },
  login({ commit, dispatch, state, rootState, getters, rootGetters }, payload) {
    commit("setMe", payload);
  },
  logOut(
    { commit, dispatch, state, rootState, getters, rootGetters },
    payload
  ) {
    commit("setMe", null); // 로그아웃 하는 거다.
  },
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  },
  addFollowing({ commit }, payload) {
    commit("addFollowing", payload);
  },
  addFollower({ commit }, payload) {
    commit("addFollower", payload);
  },
  removeFollowing({ commit }, payload) {
    // 비동기 요청이 들어감
    commit("removeFollowing", payload);
  },
  removeFollower({ commit }, payload) {
    commit("removeFollower", payload);
  }
};
