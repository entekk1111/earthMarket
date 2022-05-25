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

    <div class="contentList-wrap">
      <div class="total-result">
        <strong>총 1045 상품</strong>
        <span class="total-view">전체 상품 보기</span>
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
      dropdownItems: [
        { tit: "상품종류" },
        { tit: "가격" },
        { tit: "지역" },
        { tit: "거래방법" },
      ],
      dropdownlists: [{ content: "An item", content2: "An item1222" }],
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
