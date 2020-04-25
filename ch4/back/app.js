const express = require("express");

const app = express();

app.use(express.json()); // 기본적으로 app.js는 json형식의 데이터를 받지 못하므로 이렇게 선언해야 json형식의 데이터를 받을 수 있다.
app.use(express.urlencoded({ extended: false })); // app.js에 전송되는 데이터가 form 형식을 경우 app.js에서 받을 수 있는 데이터로 바꿔줌.

app.get("/", (req, res) => {
  res.send("안녕 시퀄라이즈");
});

app.post("/user", (req, res) => {
  req.body.email;
  req.body.password;
  req.body.nickname;
});
app.listen(3085, () => {
  console.log(`백엔드 ${3085}번 포트에서 작동 중.`);
});
