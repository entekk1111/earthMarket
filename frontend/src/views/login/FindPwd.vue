<template>
  <div class="grab">
    <div class="join-wrap findId layout">
        <h2 class="tit-style big">비밀번호 찾기</h2>
        <!--  form-group-->
        <ul class="form-group">
          <li>
            <label for="name_" class="label-tit">이름</label>
            <input type="text" id="name_" placeholder="이름을 입력해주세요" />
            <span class="validity">유효성검사</span>
          </li>
          <li>
            <label for="id_" class="label-tit">아이디</label>
            <input type="text" id="id_" placeholder="아이디를 입력해주세요." />
            <span class="validity">유효성검사</span>
          </li>
        </ul>
        <!-- //form-group -->
        <a href="/newPwd" class="btn btn-green">비밀번호 찾기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "findId",
};
</script>

<style lang="scss">
#header .util-wrap,
#header .gnb,
#footer {
  display: none;
}
.header {
  border-bottom: 0;
}
</style>
