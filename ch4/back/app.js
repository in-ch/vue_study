const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("안녕 ㅎㅎ"); //res.status().send("안녕 백엔드")를 생략한 버젼임.
});

app.listen(3085, () => {
  console.log(`백엔드 ${3085}번 포트에서 작동 중.`);
});
