export const state = () => ({
  me: null
});

export const mutations = {
  //단순한 동기적 작업을 시킬 때 사용한다.
  setMe(state, payload) {
    state.me = payload; //payload는 회원 정보
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
  }
};
