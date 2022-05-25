<template>
  <div>
    <!-- sort-wrap -->
    <div class="sort-wrap">
      <!-- select-group -->
      <ul class="select-group">
        <li class="item" v-for="item in list" :key="item">
          <div class="select-wrap dropdown">
            <!-- <button
            class="btn dropdown-toggle"
            type="button"
            :id="'dropdownMenuButton' + index"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ item.sort }}
          </button> -->
            <!-- dropdown-menu -->
            <!-- <ul
            class="dropdown-menu"
            :aria-labelledby="'dropdownMenuButton' + index"
          >
            <li
              class="dropdown-item"
              v-for="dropdownItem in dropdownList"
              :key="dropdownItem"
              href="javascript:void(0);"
            >
              {{ dropdownItem.item }}
            </li>
          </ul> -->
            <!-- //dropdown-menu -->
            <b-dropdown id="dropdown-1" :text="{ sort }">
              <!-- <b-dropdown-item v-for="item in items" :key="item">
                {{ item.sort }}</b-dropdown-item
              > -->
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
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

    <div class="contentList-wrap">
      <div class="total-result">
        <strong>총 1045 상품</strong>
        <span>전체 상품 보기</span>
      </div>
      <ul class="contentList">
        <li v-for="(productItem, index) in productlist" :key="index">
          <a href="javascript:void(0);">
            <div class="img-wrap">
              <img :src="productItem.photo" alt="" />
            </div>
            <div class="txt-wrap">
              <span class="tag">{{ productItem.tag }}</span>
              <p class="tit">{{ productItem.tit }}</p>
              <span class="price">{{ productItem.price }}원</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      list: [
        { sort: "상품종류" },
        { sort: "가격" },
        { sort: "지역" },
        { sort: " 거래방법" },
      ],
      productlist: [
        {
          photo: require("../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
      ],
    };
  },
};
</script>
