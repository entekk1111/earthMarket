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

import UserInfo from "../../views/mypage/pages/UserInfo.vue";
import BuyList from "../../views/mypage/pages/BuyList.vue";
import LikeList from "../../views/mypage/pages/LikeList.vue";
import SellList from "../../views/mypage/pages/SellList.vue";
import MyReview from "../../views/mypage/pages/MyReview.vue";

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
