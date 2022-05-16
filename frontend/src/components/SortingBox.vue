<template>
  <!-- sort-wrap -->
  <div class="sort-wrap">
    <!-- select-group -->
    <ul class="select-group">
      <li class="item" v-for="(item, index) in list" :key="item">
        <div class="select-wrap dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            :id="'dropdownMenuButton' + index"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ item.sort }}
          </button>

          <!-- dropdown-menu -->
          <ul
            class="dropdown-menu"
            :aria-labelledby="'dropdownMenuButton' + index"
          >
            <li
              class="dropdown-item"
              v-for="dropdownItem in dropdownList"
              :key="dropdownItem"
              href="#"
            >
              {{ dropdownItem.item }}
            </li>
          </ul>
          <!-- //dropdown-menu -->
        </div>
      </li>
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
</template>

<script>
export default {
  name: "SortingBox",
  data: function () {
    return {
      list: [
        { sort: "상품종류" },
        { sort: "가격" },
        { sort: "지역" },
        { sort: "거래방법" },
      ],
      dropdownList: [
        { item: "sdfsd" },
        { item: "sdfsd" },
        { item: "sdfsd" },
        { item: "sdfsd" },
      ],
    };
  },
};
</script>
