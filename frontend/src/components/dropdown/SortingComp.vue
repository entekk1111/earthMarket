<template>
  <div class="total-view">
    <b-dropdown class="btn-dropdown">
      <template #button-content>
        전체 상품 보기
        <i class="dropdown-arr"><span class="sr-only">열림/닫힘화살표</span></i>
      </template>
      <b-dropdown-item
        class=""
        v-for="(productItem, index) in productList"
        :key="index">
        {{ productItem.content }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      productList: [
        { content: "최신등록순" },
        { content: "낮은가격순" },
        { content: "높은가격순" },
        { content: "관심순" },
      ],
    };
  },
};
</script>
