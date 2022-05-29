<template>
  <div>
    <!-- sort-wrap -->
    <div class="sort-wrap">
      <!-- select-group -->
      <ul class="select-group">
        <b-dropdown
          v-for="dropdownItem in dropdownItems"
          :key="dropdownItem"
          class="btn-dropdown"
        >
          <template #button-content>
            {{ dropdownItem.tit }}
          </template>
          <div v-for="dropdownlist in dropdownlists" :key="dropdownlist">
            <b-dropdown-item href="javascript:void(0);">
              {{ dropdownlist.content }}
            </b-dropdown-item>
            <b-dropdown-item href="javascript:void(0);">
              {{ dropdownlist.content2 }}
            </b-dropdown-item>
          </div>
        </b-dropdown>
      </ul>
      <!-- //select-group -->

      <!-- toggle-button-wrap -->
      <div class="toggle-button-wrap">
        <label for="toggleBtn">내 근처 상품탐색</label>
        <div class="toggle-button">
          <input type="checkbox" id="toggleBtn" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
      <!-- // toggle-button-wrap -->
    </div>
    <!--  //sort-wrap -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      dropdownItems: [
        { tit: "상품종류" },
        { tit: "가격" },
        { tit: "지역" },
        { tit: "거래방법" },
      ],
      dropdownlists: [{ content: "An item", content2: "An item1222" }],
    };
  },
};
</script>
