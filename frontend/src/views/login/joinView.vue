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
                id="phoneNum"
                v-model="initial"
                type="text"
                placeholder="휴대폰 번호를 입력해주세요"
                @input="inputChanged($event)"
              />
              <b-button
                v-b-toggle.collapse1
                class="btn btn-green-line"
                :class="{ disabled: isDisabled }"
                @click="btnDisabled"
              >
                인증하기
              </b-button>
            </div>

            <!--  pwd-auth -->
            <b-collapse id="collapse1">
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
                    :class="{ disabled: isDisabled }"
                  >
                    확인
                  </button>
                </div>
                <span class="txt">
                  <!-- <i class="ico iconify" data-icon="eva:info-outline"></i> -->
                  <Icon icon="mdi-light:home" />
                  문자를 받지 못하셨나요?
                  <a href="javascript:void(0);">문자 재전송하기</a>
                </span>
              </div>
            </b-collapse>

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
  </div>
</template>

<script>
export default {
  name: "joinView",
  data: function () {
    return {
      isDisabled: true,
    };
  },
  methods: {
    // 휴대폰 인증하기 : input에 내용물 있을 경우 인증하기 버튼 disabled 삭제 / input에 내용문 없을 경우 버튼 disabled 추가
    inputChanged(event) {
      if (event.target.value.length > 0) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    // 휴대폰 인증하기 : 드롭다운 된 후 다시 disabeled
    btnDisabled() {
      setTimeout(() => {
        this.isDisabled = true;
      }, 100);
    },
  },
};
</script>
