<template>
  <div class="contentList-wrap">
    <!-- top-wrap -->
    <div class="top-wrap">
      <h2 class="cont-tit">상품 모아보기</h2>
      <SearchInput />
    </div>
    <!-- // top-wrap -->
    <SortingBox />
  </div>
</template>

<script>
import SearchInput from "../../components/SearchInput.vue";
import SortingBox from "../../components/SortingBox.vue";

export default {
  name: "ListPage",
  components: {
    SearchInput, //찾기
    SortingBox, //드롭다운메뉴
  },
};
</script>
