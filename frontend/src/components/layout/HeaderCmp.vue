<template>
  <header id="header" class="header">
    <div class="grab">
      <!-- logo -->
      <h1 class="logo">
        <a href="/"
          ><span class="sr-only"
            >지구의 장터 지금 구매할 수 있는 장터 지구장터
          </span></a
        >
      </h1>
      <!-- //logo -->

      <!-- gnb -->
      <ul class="gnb">
        <li><router-link to="/list">상품리스트</router-link></li>
        <li><router-link to="/price">시세</router-link></li>
      </ul>
      <!--  .//gnb -->

      <!-- util-wrap -->
      <div class="util-wrap">
        <ul class="link-join">
          <!-- 로그인 전 -->
          <li>
            <router-link to="/join">회원가입</router-link>
          </li>
          <li>
            <router-link to="/login">로그인</router-link>
          </li>

          <!-- 로그인 후 -->
          <li>
            <i class="ico">
              <IconiFy icon="teenyicons:message-text-alt-outline"></IconiFy>
            </i>
            <router-link to="/chat"> 채팅</router-link>
          </li>
          <li class="link-mypage">
            <i class="ico bg"><IconiFy icon="mi:user" /></i>
            <router-link to="/mypage/userInfo"> 시냇물졸졸</router-link>
          </li>
        </ul>
        <a href="/write" class="btn btn-blue">상품올리기</a>
      </div>
      <!--  //util-wrap -->
    </div>
  </header>
</template>

<script>
export default {};
</script>
