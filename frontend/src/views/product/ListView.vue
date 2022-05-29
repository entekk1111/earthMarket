<template>
  <div class="grab">
    <!-- contentList-wrap -->
    <div class="contentList-wrap">
      <!-- top-wrap -->
      <div class="top-wrap">
        <h2 class="cont-tit">상품 모아보기</h2>
        <SearchInput />
      </div>
      <!-- // top-wrap -->
      <SortingBox />

      <!-- contentList-group  -->
      <div class="contentList-group">
        <div class="total-result">
          <strong>총 1045 상품</strong>
          <span class="total-view">전체 상품 보기</span>
        </div>
        <ul class="contentList">
          <li v-for="productItem in productlist" :key="productItem.num">
            <a href="/list/detail?productCode=0">
              <button type="button"><span class="sr-only">좋아요</span></button>
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
      <!-- <div class="contentList-group">
        <ul class="contentList">
          <li v-for="item in list" :key="item.num">
            <a href="/list/detail?productCode=0">
              <button type="button"><span class="sr-only">좋아요</span></button>
              <div class="img-wrap">
                <img
                  :src="require(`@/assets/image/board/${item.photo}`)"
                  alt=""
                />
              </div>
              <div class="txt-wrap">
                <span class="tag">{{ item.tag }}</span>
                <strong class="tit">{{ item.tit }}</strong>
                <strong class="price">{{ item.price }}원</strong>
              </div>
            </a>
          </li>
        </ul>
      </div> -->
      <!-- // contentList-group -->

      <!-- bottom-wrap -->
      <div class="bottom-wrap">
        <Pagination />
        <p class="page-result">총 1045 중 {{ currentPage }}-20 상품</p>
      </div>
      <!--  // bottom-wrap -->
    </div>
    <!--  //contentList-wrap -->
  </div>
</template>

<script>
import axios from "axios";
import SearchInput from "../../components/SearchInput.vue";
import SortingBox from "../../components/SortingBox.vue";
import Pagination from "../../components/PaginaionComp.vue";

export default {
  name: "ListPage",
  components: {
    SearchInput, //찾기
    SortingBox, //드롭다운메뉴
    Pagination, //페이지네이션
  },
  data: function () {
    return {
      list: [],
      //items: [],
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
  },
};
</script>
