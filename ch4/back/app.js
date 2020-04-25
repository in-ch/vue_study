const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("안녕 시퀄라이즈");
});

app.post("/user", (req, res) => {
  res.body;
});
app.listen(3085, () => {
  console.log(`백엔드 ${3085}번 포트에서 작동 중.`);
});
