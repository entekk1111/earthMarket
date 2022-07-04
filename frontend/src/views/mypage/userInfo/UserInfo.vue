<template>
  <div class="mypage-wrap">
    <TabMenu>
      <Tab name="회원정보" selected="true" class="user-info">
        <h2 class="cont-tit02">회원정보</h2>
        <ul class="list-info">
          <li>
            <span>닉네임</span>
            <strong class="txt">시냇물졸졸</strong>
            <a href="javascript:void(0);" class="txt-blue">변경</a>
          </li>
          <li>
            <span>휴대폰 번호</span>
            <strong class="txt">010 2356 4568</strong>
            <a href="javascript:void(0);" class="txt-blue">변경</a>
          </li>
          <li>
            <span>주소지</span>
            <p class="txt">경주시 용산읍 밀구 2길 1</p>
            <a href="javascript:void(0);" class="txt-blue">변경</a>
          </li>
          <li>
            <span>비밀번호</span>
            <strong class="txt">*********</strong>
            <a href="javascript:void(0);" class="txt-blue">변경</a>
          </li>
        </ul>
      </Tab>
      <Tab name="구매내역"> ssdfsdfsdf </Tab>
      <Tab name="판매내역"> ssdfsdfsdf </Tab>
      <Tab name="관심목록"> ssdfsdfsdf </Tab>
      <Tab name="나의 리뷰"> ssdfsdfsdf </Tab>
    </TabMenu>
  </div>
</template>

<script>
import Tab from "../../../components/tab/TabContent.vue";
import TabMenu from "../../../components/tab/TabMenu.vue";

export default {
  name: "UserInfo ",
  components: {
    Tab,
    TabMenu,
  },
};
</script>

<style lang="scss">
#container {
  padding-right: 0;
  padding-left: 0;
}
</style>
