# Hacker-News 를 이용한 웹앱

## image shot

<img width="957" alt="스크린샷 2022-03-21 오후 8 18 13" src="https://user-images.githubusercontent.com/61385080/159250729-da965bac-e21c-495e-8001-1682ab63ced6.png">



## 초기 setting

create-react-app 을 이용해 프로젝트의 setting 에 관한 스트레스를 줄였습니다.


## 주요기능

- Hacker-news 사이트가 제공하는 api를 이용해 news 를 보여주기
- user 정보 보여주기
- 댓글 보기
- top/new/ask/show/job 등 항목별로 api 이용해 보여주기
- 좌우 slider
- 상하 slider


## 기술스택

- frontend : react
- api 요청 : axios
- store : local store
- css : css
- backend : hacker-news 제공


## 구현 concept

- 모든 페이지에 접근할때 axios를 이용해 server 에 다시 요청한 새 내용을 render 
  : 게시판형태의 속성상 1초전의 내용이 1초후와 같다고 보장할 수 없으므로 좀 전의 받아둔 내용은 재사용하는 것은 정확한 정보가 아닐 수 있기 때문에 매 페이지마다 새롭게 요청한 정보를 사용한다.


## 사용 library

- react-slick-slider
- axios


