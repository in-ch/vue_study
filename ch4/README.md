#1 이번 시간에는 드디어 백엔드 코딩에 대해서 배워보자..!

#front 쪽에서 빌더들은 항상 버전이 달라지므로 "sudo npm outdated"를 쳐서 업데이트가 잘 안된 것들 확인하고
#npm update를 눌러 최신 버전으로 다 바꿔준다.
#npm audit fix를 눌르면 버전이 달라져서 이상해진 거 자동으로 고쳐줌 #지속적으로 npm outdated를 쳐서 새로운 거 체킹하고 뭐가 달라졌는지 확인해 보자. #만약에 found 0 vulnerabilities가 0이 아니라 다른 숫자가 나오면 npm audit fix 를 입력하면 자동으로 취약점을 고쳐준다. 대부분 취약점을 고칠 수 있다.

#프론트엔드랑 백엔드가 따로 존재하는 이유
사용자가 많아 지면 따로따로 두는 게 맞음...
프론트가 db접속을 바로하면 보안에 문제가 되므로, 백을 거치는 게 맞다.

req(요청)
GET
header:
body

res(응답)
200 / 400 / 500
header
body: data

GET: 가져오다
POST: 생성하다, 등록하다
PUT: 전체 수정
PATCH: 부분 수정
DELETE: 삭제
OPTIONS: 찔러보기

http:// 는 포트 :80
https:// 는 포트 :443
따라서 app.js에서 app.listen 부분 바꿔야함.

sequelize를 설치하는 이유는 sql 표현을 통일화하기 위해서
mysql2는 node랑 mysql를 이어주는 드라이버같은 거임
npx sequelize init를 한 이유는 글로벌로 설치하면 package에 표현이 안되서 이렇게 하는 거임. 그리고 migrations같은 거 쓸려면 설치해야함
npm i -D nodemon 설치하면 기존에는 백에서 기능바뀌면 껏다 다시 껴야됐는데, 이걸 쓰면 그 짓을 안해도 된다.
