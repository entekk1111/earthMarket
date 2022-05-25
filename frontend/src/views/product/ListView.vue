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
      <!-- contentList-group -->
      <div class="contentList-group">
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
      </div>
      <!-- // contentList-group -->

      <!-- bottom-wrap -->
      <div class="bottom-wrap">
        <!-- pagination -->
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        ></b-pagination>
        <!--  //pagination -->
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

export default {
  name: "ListPage",
  components: {
    SearchInput, //찾기
    SortingBox, //드롭다운메뉴
  },
  data: function () {
    return {
      list: [],
      perPage: 3,
      currentPage: 1,
      items: [],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
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

<style scoped lang="scss">
.pagination ::v-deep {
  @import "~bootstrap/dist/css/bootstrap.min";
  @import "~bootstrap-vue/dist/bootstrap-vue.min";
}
</style>
