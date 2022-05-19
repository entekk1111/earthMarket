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
      <div class="contentList-group">
        <ul class="contentList">
          <li v-for="item in list" :key="item">
            <a href="javascript:void(0);">
              <div class="img-wrap">
                <img :src="item.photo" alt="" />
              </div>
              <div class="txt-wrap">
                <span class="tag">{{ item.tag }}</span>
                <strong class="tit">{{ item.tit }}</strong>
                <strong class="price">{{ item.price }}원</strong>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--  //contentList-wrap -->
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
  data: function () {
    return {
      list: [
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
};
</script>
