import Vue from "vue";
import VueRouter from "vue-router";
import MainHome from "../views/MainHome.vue";

Vue.use(VueRouter);

const routes = [
  //*** 메인 ***
  {
    path: "/",
    name: "home",
    component: MainHome,
  },

  //**** 상품 product ***
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

  // *** login  ***
  //회원가입
  {
    path: "/join",
    name: "join",
    component: () => import("../views/login/JoinView.vue"),
  },
  //로그인
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/LoginView.vue"),
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

  // *** 시세  ***
  //시세
  {
    path: "/price",
    name: "price",
    component: () => import("../views/price/PriceList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
