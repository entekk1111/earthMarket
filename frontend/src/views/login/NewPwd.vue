<template>
  <div class="grab">
    <div class="join-wrap findId layout">
      <h2 class="tit-style big">새 비밀번호 설정</h2>
      <!--  form-group-->
      <ul class="form-group">
        <li>
          <label for="name_" class="label-tit">비밀번호</label>
          <p class="highlight">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요
          </p>
          <input type="text" id="name_" placeholder="비밀번호를 입력해주세요" />
          <span class="validity">유효성검사</span>
        </li>
        <li>
          <label for="id_" class="label-tit">비밀번호 확인</label>
          <input
            type="text"
            id="id_"
            placeholder="비밀번호 확인을 입력해주세요"
          />
          <span class="validity">유효성검사</span>
        </li>
      </ul>
      <!-- //form-group -->
      <a href="javascript:void(0);" class="btn btn-green">비밀번호 변경</a>
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
