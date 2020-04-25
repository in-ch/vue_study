const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("안녕 ㅎㅎ");
});

app.listen(3085, () => {
  console.log(`백엔드 ${3085}번 포트에서 작동 중.`);
});

//sequelize
