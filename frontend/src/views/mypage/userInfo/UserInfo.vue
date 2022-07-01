<template>
  <div>
    <TabMenu>
      <Tab name="회원정보" selected="true"> ㅇㅀㅇㅀㅇㅀ</Tab>
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
