import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //*** 메인 ***
  {
    path: "/",
    name: "home",
    meta: {
      addClass: "main-container",
    },
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
    meta: {
      addClass: "wide chat-container",
    },
    component: () => import("../views/chat/ChatView.vue"),
  },

  // *** login  ***
  //회원가입
  {
    path: "/join",
    name: "join",
    meta: {
      addClass: "login-container",
    },
    component: () => import("../views/login/joinView.vue"),
  },
  //로그인
  {
    path: "/login",
    name: "login",
    meta: {
      addClass: "login-container no-header",
    },
    component: () => import("../views/login/loginView.vue"),
  },
  //아이디찾기
  {
    path: "/findId",
    name: "findId",
    meta: {
      addClass: "login-container",
    },
    component: () => import("../views/login/FindId.vue"),
  },
  //비밀번호찾기
  {
    path: "/findpwd",
    name: "findpwd",
    meta: {
      addClass: "login-container",
    },
    component: () => import("../views/login/FindPwd.vue"),
  },
  //새 비밀번호 설정
  {
    path: "/newPwd",
    name: "newPwd",
    meta: {
      addClass: "login-container",
    },
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
    path: "/mypage",
    name: "mypage",
    component: () => import("../views/mypage/MyPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
