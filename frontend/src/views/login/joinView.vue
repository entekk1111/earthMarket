<template>
  <div class="grab">
    <!-- join-wrap-->
    <form name="form" @submit.prevent="handleLogin">
      <div class="join-wrap layout">
        <h2 class="tit-style big">회원가입</h2>

        <!-- sns-group -->
        <div class="sns-group">
          <strong class="tit-style">간편로그인</strong>
          <ul>
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
        <!-- // sns-group -->

        <!--  form-group-->
        <ul class="form-group">
          <li>
            <label for="name_" class="label-tit">이름</label>
            <input type="text" id="name_" placeholder="이름을 입력해주세요" />
            <span class="validity">유효성검사</span>
          </li>
          <li>
            <label for="phoneNum" class="label-tit">휴대폰 번호</label>
            <div class="input-wrap">
              <input
                type="text"
                id="phoneNum"
                placeholder="휴대폰 번호를 입력해주세요"
              />
              <button
                type="button"
                id="btn_auth"
                class="btn btn-green-line disabled"
                data-bs-toggle="collapse"
                href="#collapse1"
                role="button"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                인증하기
              </button>
            </div>
            <!--  pwd-auth -->
            <div class="collapse" id="collapse1">
              <div class="pwd-auth">
                <strong>인증번호를 입력해주세요. </strong>
                <div class="input-wrap">
                  <label for="authNum"
                    ><span class="sr-only">인증번호입력</span></label
                  >
                  <input type="text" id="authNum" />
                  <button
                    type="button"
                    id="btn_confirm"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    확인
                  </button>
                </div>
                <span class="txt"
                  ><i class="ico iconify" data-icon="eva:info-outline"></i
                  >문자를 받지 못하셨나요?<a href="javascript:void(0);"
                    >문자 재전송하기</a
                  ></span
                >
              </div>
            </div>
            <!-- // pwd-auth -->
            <span class="validity">오류입니다.</span>
          </li>
          <li>
            <label for="id_" class="label-tit">아이디</label>
            <input type="text" id="id_" placeholder="아이디를 입력해주세요" />
            <span class="validity">오류입니다.</span>
          </li>
          <li>
            <label for="pwd" class="label-tit">비밀번호</label>
            <p class="txt-explain">
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요
            </p>
            <input type="text" id="pwd" placeholder="비밀번호를 입력해주세요" />
            <span class="validity">오류입니다.</span>
          </li>
          <li>
            <label for="pwdComfirm" class="label-tit">비밀번호 확인</label>
            <input
              type="text"
              id="pwdComfirm"
              placeholder="비밀번호 확인을 입력해주세요"
            />
          </li>
          <li>
            <label for="nickname" class="label-tit">닉네임</label>
            <p class="txt-explain">
              다른 유저와 겹치지 않는 닉네임을 입력해주세요.
            </p>
            <input
              type="text"
              id="nickname"
              placeholder="닉네임을 입력해주세요"
            />
            <span class="validity">오류입니다.</span>
          </li>
        </ul>
        <!--  // form-group -->

        <!-- checkbox-group -->
        <div class="checkbox-group">
          <strong class="label-tit">약관동의</strong>
          <div class="chbox_wrap">
            <input
              type="checkbox"
              name="agency_type[]"
              id="agency_type_100"
              value="100"
            />
            <label for="agency_type_100" class="idSave"
              ><span class="txt"
                >필수동의 항목 및 개인정보 수집 및 이용 동의, 마케팅 정보 수신에
                모두 동의합니다.</span
              ></label
            >
          </div>
        </div>
        <!--  //checkbox-group -->

        <a href="javascript:void(0);" class="btn btn-green">회원가입</a>
        <p class="txt-bottom">
          이미 회원가입 하셨나요?
          <a href="/login" class="">로그인</a>
        </p>
      </div>
    </form>
    <!--  // join-wrap -->

    <!-- <form name="form" @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="name">이름</label>
        <input
          type="text"
          placeholder="이름을 입력해주세요."
          v-model="user.name"
          v-validate="'required'"
        />
      </div>
      <div class="form-group">
        <label for="phoneNum">휴대폰 번호</label>
        <input
          type="tel"
          placeholder="휴대폰 번호를 입력해주세요."
          v-model="user.phoneNum"
          v-validate="'required'"
        />
        <button>인증하기</button>
      </div>
      <div class="form-group">
        <label for="id">아이디</label>
        <input
          type="text"
          placeholder="아이디를 입력해주세요."
          v-model="user.phoneNum"
          v-validate="'required'"
        />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          v-model="user.password"
          v-validate="'required'"
        />
      </div>
      <div class="form-group">
        <label for="passwordcConfirm">비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호 확인을 입력해주세요."
          v-model="user.passwordcConfirm"
          v-validate="'required'"
        />
      </div>
      <div class="form-group">
        <label for="nickName">닉네임</label>
        <span>다른 유저와 겹치지 않는 닉네임을 입력해주세요.</span>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          v-model="user.nickName"
          v-validate="'required'"
        />
      </div>
      <div class="form-group">
        <label for="nickName">약관 동의</label>
        <input type="checkbox" v-validate="'required'" />
        <span
          >필수동의 항목 및 개인정보 수집 및 이용 동의, 마케팅 정보 수신에 모두
          동의합니다.</span
        >
      </div>
      <button>회원가입</button>
      <span>이미 회원가입 하셨나요?</span><button>로그인</button>
    </form> -->
  </div>
</template>

<script>
export default {
  name: "joinView",
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
