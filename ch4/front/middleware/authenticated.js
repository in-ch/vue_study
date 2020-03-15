//로그인한 사용자인지 검사
export default function({ store }) {
  if (!store.state.users.me) {
    //store의 state에 접근
    location.href("/");
  }
}
