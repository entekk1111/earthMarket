<template>
  <div>
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
