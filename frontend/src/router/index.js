import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //*** 메인 ***
  {
    path: "/",
    name: "home",
    component: () => import("../views/index/MainHome.vue"),
  },

  //**** 상품 product ***
  //상품리스트
  {
    path: "/write",
    name: "write",
    component: () => import("../views/product/WriteView.vue"),
  },
  //상품리스트
  {
    path: "/list",
    name: "list",
    component: () => import("../views/product/ListView.vue"),
  },
  //상품상세
  {
    path: "/list/detail",
    name: "detail",
    component: () => import("../views/product/DetailView.vue"),
  },

  // *** 채팅하기  ***
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/chat/ChatView.vue"),
  },

  // *** login  ***
  //회원가입
  {
    path: "/join",
    name: "join",
    component: () => import("../views/login/joinView.vue"),
  },
  //로그인
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/loginView.vue"),
  },
  //아이디찾기
  {
    path: "/findId",
    name: "findId",
    component: () => import("../views/login/FindId.vue"),
  },
  //비밀번호찾기
  {
    path: "/findpwd",
    name: "findpwd",
    component: () => import("../views/login/FindPwd.vue"),
  },
  //새 비밀번호 설정
  {
    path: "/newPwd",
    name: "newPwd",
    component: () => import("../views/login/NewPwd.vue"),
  },

  // *** 시세  ***
  //시세
  {
    path: "/price",
    name: "price",
    component: () => import("../views/price/PriceList.vue"),
  },

  // *** 마이페이지  ***
  //회원정보
  {
    path: "/mypage/userInfo",
    name: "userInfo",
    component: () => import("../views/mypage/userInfo/UserInfo.vue"),
  },
  {
    path: "/mypage/userInfo/edit",
    name: "userInfoEdit",
    component: () => import("../views/mypage/userInfo/UserInfoEdit.vue"),
  },
  //판매목록
  {
    path: "/mypage/sellList",
    name: "sellList",
    component: () => import("../views/mypage/SellList.vue"),
  },
  //구매목록
  {
    path: "/mypage/buyList",
    name: "buyList",
    component: () => import("../views/mypage/BuyList.vue"),
  },
  //관심목록
  {
    path: "/mypage/likeList",
    name: "likeList",
    component: () => import("../views/mypage/LikeList.vue"),
  },
  //나의리뷰
  {
    path: "/mypage/myReview",
    name: "myReview",
    component: () => import("../views/mypage/MyReview.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
