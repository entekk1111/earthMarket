<template>
  <div class="grab">
    <!-- contentList-wrap -->
    <div class="contentList-wrap">
      <!-- top-wrap -->
      <div class="top-wrap">
        <h2 class="cont-tit">
          상품 모아보기
        </h2>
        <SearchInput />
      </div>
      <!-- // top-wrap -->

      <!-- sort-wrap -->
      <div class="sort-wrap">
        <SelectDropdown />
        <!-- toggle-button-wrap -->
        <div class="toggle-button-wrap">
          <label for="toggleBtn">내 근처 상품탐색</label>
          <div class="toggle-button">
            <input
              type="checkbox"
              id="toggleBtn"
              class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div>
        <!-- // toggle-button-wrap -->
      </div>
      <!--  //sort-wrap  -->

      <!-- contentList-group  -->
      <div class="contentList-group">
        <div class="total-result">
          <strong>총 1045 상품</strong>
          <SortingComp />
        </div>
        <ul class="contentList">
          <li
            v-for="(productItem, index) in productlist"
            :key="index">
            <button
              type="button"
              class="btn-like"
              @click="setActiveItemId(index)">
              <i class="ico"><span class="sr-only">좋아요</span></i>
            </button>
            <a href="/list/detail?productCode=0">
              <div class="img-wrap">
                <img
                  :src="productItem.photo"
                  alt="" />
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
      <!-- // contentList-group -->

      <!-- bottom-wrap -->
      <div class="bottom-wrap">
        <Pagination />
        <p class="page-result">
          총 1045 중 20 상품
        </p>
      </div>
      <!--  // bottom-wrap -->
    </div>
    <!--  //contentList-wrap -->
  </div>
</template>

<script>
import axios from "axios";
import SearchInput from "../../components/SearchInput.vue";
import SelectDropdown from "../../components/dropdown/SelectDropdown.vue";
import Pagination from "../../components/PaginaionComp.vue";
import SortingComp from "../../components/dropdown/SortingComp.vue";

export default {
  name: "ListPage",
  components: {
    SearchInput, //찾기
    SelectDropdown, //드롭다운메뉴
    Pagination, //페이지네이션
    SortingComp, //상품분류
  },
  data: function () {
    return {
      //상품리스트
      productlist: [
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
        {
          photo: require("../../assets/image/board/sample01.jpg"),
          tag: "달콤팜",
          tit: "새콤달콤 설향딸기",
          price: "4,200",
        },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("/api/product/getList")
        .then((succese) => {
          console.log(succese.data);
          this.list = succese.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //좋아요 토글
    setActiveItemId(index) {
      const element = document.getElementsByClassName("btn-like");
      if (element[index].classList.contains("active")) {
        element[index].classList.remove("active");
      } else {
        element[index].classList.add("active");
      }
    },
  },
};
</script>
