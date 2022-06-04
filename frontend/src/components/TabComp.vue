<template>
  <div class="tab-wrap">
    <div class="tab-menu">
      <ul class="grab">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: currentTab === index }"
          @click="currentTab = index"
        >
          <button>{{ tab }}</button>
        </li>
      </ul>
    </div>
    <div class="tab-content grab">
      <div v-show="currentTab == 0">내용</div>
      <div v-show="currentTab == 1">별점별점33</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabComp",
  data: function () {
    return {
      currentTab: 0,
      tabs: ["상품 정보", "상품 리뷰"],
    };
  },
};
</script>
