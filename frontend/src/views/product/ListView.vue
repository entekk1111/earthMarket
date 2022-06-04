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

      <!-- sort-wrap -->
      <div class="sort-wrap">
        <!-- select-group -->
        <ul class="select-group">
          <li>
            <b-dropdown class="btn-dropdown">
              <template #button-content>
                상품 종류
                <i class="dropdown-arr"
                  ><span class="sr-only">열림/닫힘화살표</span></i
                >
              </template>
              <b-dropdown-item
                class="chbox_wrap"
                v-for="(productItem, index) in productList"
                :key="index"
              >
                <input
                  type="checkbox"
                  name=""
                  v-bind:id="'input' + productItem.id"
                />
                <label v-bind:for="'input' + productItem.id">
                  {{ productItem.content }}
                </label>
              </b-dropdown-item>
              <li class="btn-wrap">
                <button type="button" class="btn-cancel">취소</button>
                <button type="button" class="btn btn-green sm">확인</button>
              </li>
            </b-dropdown>
          </li>
          <li>
            <b-dropdown class="btn-dropdown">
              <template #button-content>
                가격
                <i class="dropdown-arr"
                  ><span class="sr-only">열림/닫힘화살표</span></i
                >
              </template>
              <li
                class="chbox_wrap"
                v-for="(priceItem, index) in priceList"
                :key="index"
              >
                <input
                  type="checkbox"
                  name=""
                  v-bind:id="'input' + priceItem.id"
                />
                <label v-bind:for="'input' + priceItem.id">
                  {{ priceItem.content }}원
                </label>
              </li>
              <li class="btn-wrap">
                <button type="button" class="btn-cancel">취소</button>
                <button type="button" class="btn btn-green sm">확인</button>
              </li>
            </b-dropdown>
          </li>
          <li>
            <b-dropdown class="btn-dropdown">
              <template #button-content>
                지역
                <i class="dropdown-arr"
                  ><span class="sr-only">열림/닫힘화살표</span></i
                >
              </template>
              <li
                class="chbox_wrap"
                v-for="(regionItem, index) in regionList"
                :key="index"
              >
                <input
                  type="checkbox"
                  name=""
                  v-bind:id="'input' + regionItem.id"
                />
                <label v-bind:for="'input' + regionItem.id">
                  {{ regionItem.content }}
                </label>
              </li>
              <li class="btn-wrap">
                <button type="button" class="btn-cancel">취소</button>
                <button type="button" class="btn btn-green sm">확인</button>
              </li>
            </b-dropdown>
          </li>
          <li>
            <b-dropdown class="btn-dropdown">
              <template #button-content>
                거래방법
                <i class="dropdown-arr"
                  ><span class="sr-only">열림/닫힘화살표</span></i
                >
              </template>
              <li
                class="chbox_wrap"
                v-for="(methodlItem, index) in methodList"
                :key="index"
              >
                <input
                  type="checkbox"
                  name=""
                  v-bind:id="'input' + methodlItem.id"
                />
                <label v-bind:for="'input' + methodlItem.id">
                  {{ methodlItem.content }}
                </label>
              </li>
              <li class="btn-wrap">
                <button type="button" class="btn-cancel">취소</button>
                <button type="button" class="btn btn-green sm">확인</button>
              </li>
            </b-dropdown>
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
      <!--  //sort-wrap  -->

      <!-- contentList-group  -->
      <div class="contentList-group">
        <div class="total-result">
          <strong>총 1045 상품</strong>
          <SortingBox />
        </div>
        <ul class="contentList">
          <li v-for="productItem in productlist" :key="productItem.num">
            <a href="/list/detail?productCode=0" class="txt-wrap">
              <button type="button" class="btn-like">
                <IconiFy icon="bx:heart" />
                <span class="sr-only">좋아요</span>
              </button>
              <div class="img-wrap">
                <img :src="productItem.photo" alt="" />
              </div>
              <span class="tag">{{ productItem.tag }}</span>
              <p class="tit">{{ productItem.tit }}</p>
              <span class="price">{{ productItem.price }}원</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- // contentList-group -->

      <!-- bottom-wrap -->
      <div class="bottom-wrap">
        <Pagination />
        <p class="page-result">총 1045 중 20 상품</p>
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
      //상품분류
      productList: [
        { id: "1", content: "곡물/견과류" },
        { id: "2", content: "과실류" },
        { id: "3", content: "채소/나물류" },
        { id: "4", content: "축산물" },
        { id: "5", content: "수산물" },
      ],
      priceList: [{ content: "1000" }],
      regionList: [
        { id: "6", content: "서울" },
        { id: "7", content: "부산" },
        { id: "8", content: "대구" },
        { id: "9", content: "광주" },
        { id: "10", content: "제주도" },
        { id: "11", content: "대전" },
      ],
      methodList: [
        { id: "12", content: "직거래" },
        { id: "13", content: "일반택배" },
        { id: "14", content: "당일배송" },
      ],

      //상품리스트
      list: [],
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
