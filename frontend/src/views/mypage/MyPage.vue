<template>
  <div class="mypage-wrap">
    <TabMenu>
      <Tab name="회원정보" selected="true" class="user-info">
        <UserInfo />
      </Tab>
      <Tab name="구매내역"> <BuyList /> </Tab>
      <Tab name="판매내역"> <SellList /> </Tab>
      <Tab name="관심목록"> <LikeList /> </Tab>
      <Tab name="나의 리뷰"> <MyReview /> </Tab>
    </TabMenu>
  </div>
</template>

<script>
import Tab from "../../components/tab/TabContent.vue";
import TabMenu from "../../components/tab/TabMenu.vue";

import UserInfo from "../../views/mypage/comp/UserInfo.vue";
import BuyList from "../../views/mypage/comp/BuyList.vue";
import LikeList from "../../views/mypage/comp/LikeList.vue";
import SellList from "../../views/mypage/comp/SellList.vue";
import MyReview from "../../views/mypage/comp/MyReview.vue";

export default {
  name: "UserInfo ",
  components: {
    Tab,
    TabMenu,
    UserInfo,
    BuyList,
    LikeList,
    SellList,
    MyReview,
  },
};
</script>

<style lang="scss">
#container {
  padding-right: 0;
  padding-left: 0;
}
</style>
