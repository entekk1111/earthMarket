<template>
  <div class="grab">
    <!-- login-wrap" -->
    <div class="login-wrap layout">
      <h1 class="logo">
        <a href="/">
          <span class="sr-only"
            >지구의 장터 지금 구매할 수 있는 장터 지구의장터</span
          >
        </a>
      </h1>
      <div class="form-group">
        <ul>
          <li>
            <label for="idform"><span class="sr-only">아이디</span></label>
            <input type="text" id="idform" placeholder="아이디" />
          </li>
          <li>
            <label for="pwdform"><span class="sr-only">비밀번호</span></label>
            <input type="text" id="pwdform" placeholder="비밀번호" />
          </li>
        </ul>
        <a href="javascript:void(0);" class="btn btn-green">로그인</a>
      </div>
      <ul class="find-group">
        <li><a href="javascript:void(0);">아이디 찾기</a></li>
        <li><a href="/join">회원가입</a></li>
        <li><a href="javascript:void(0);">비밀번호 찾기</a></li>
      </ul>
      <div class="sns-group">
        <strong class="tit-style">간편로그인</strong>
        <ul>
          <!-- <li v-for="sns in snsGroup" :key="sns" class="ico ico0" + index+1>
          <a href="javascript:void(0);">
            <span class="sr-only">{{}}로그인</span>
          </a>
        </li> -->
          <li class="ico ico01">
            <a href="javascript:void(0);"
              ><span class="sr-only">카카오톡로그인</span></a
            >
          </li>
          <li class="ico ico02">
            <a href="javascript:void(0);"
              ><span class="sr-only">네이버로그인</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- // login-wrap -->
  </div>
</template>

<script>
export default {
  name: "loginView",
};
</script>

<style lang="scss">
#header,
#footer {
  display: none;
}
</style>
