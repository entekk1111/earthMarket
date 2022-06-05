<template>
  <div>
    <div class="grab">
      <!-- breadcrumbs -->
      <ul class="breadcrumbs">
        <li>
          <a href="javscript:void(0);">상품목록 </a>
          <IconiFy icon="fa6-solid:angle-right" class="arr" />
        </li>
        <li>
          <a href="javscript:void(0);">과일류 </a>
          <IconiFy icon="fa6-solid:angle-right" class="arr" />
        </li>
        <li><a href="javscript:void(0);">딸기 </a></li>
      </ul>
      <!--  //breadcrumbs -->

      <!-- tit-wrap -->
      <div class="tit-wrap">
        <h2 class="cont-tit-normal">새콤달콤 설향딸기</h2>

        <!-- util-group -->
        <ul class="util-group">
          <li>
            <a href="javascript:void(0);">
              <IconiFy icon="mi:share" class="ico" />공유하기
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <IconiFy icon="bx:heart" class="ico ico-save" />저장
              <strong>40</strong>
            </a>
          </li>
        </ul>
        <!-- // util-group -->

        <!-- info-grouu  -->
        <ul class="info-grouup">
          <li>
            상품 평점<strong
              ><IconiFy
                icon="ant-design:star-filled"
                class="ico-star"
              />4.7</strong
            >
          </li>
          <li>조회<strong>420</strong></li>
          <li>2022.03.17. 6:20</li>
        </ul>
        <!--  //info-grouu  -->
      </div>
      <!--  // tit-wrap -->

      <!--  top-wrap  -->
      <div class="top-wrap">
        <div class="slider-wrap">
          <vueSlickCarousel
            ref="slider-big"
            v-bind="slickOptions"
            @beforeChange="syncSliders"
            class="slider slider-for"
          >
            <div v-for="(d, index) in data1" :key="index">
              <div class="item"><img :src="d.image" alt="" /></div>
            </div>
          </vueSlickCarousel>

          <vueSlickCarousel
            :class="'slider-thumb'"
            ref="slider-thumb"
            v-bind="slickNavOptions"
            :focusOnSelect="true"
            @beforeChange="syncSliders"
            class="slider-nav"
          >
            <div v-for="(d, index) in data1" :key="index">
              <div class="item"><img :src="d.image" alt="" /></div>
            </div>
          </vueSlickCarousel>
        </div>

        <!-- info-group  -->
        <div class="info-group">
          <strong class="money">18,000원</strong>
          <ul class="info-list">
            <li><span>판매자</span><strong>달콤팜 4.7</strong></li>
            <li><span>규격</span><strong>4kg</strong></li>
            <li><span>카테고리</span><strong>농산물 / 과일</strong></li>
            <li>
              <span>배송정보</span>
              <ul class="tag-list">
                <li>직거래</li>
                <li>당일배송</li>
                <li>일반택배</li>
              </ul>
            </li>
          </ul>
          <a href="javascript:void(0);" class="btn btn-green">판매자 채팅</a>
        </div>
        <!--  //info-group  -->
      </div>
      <!-- // top-wrap  -->
    </div>

    <!--  bottom-wrap -->
    <div class="bottom-wrap">
      <TabComp />
    </div>
    <!-- // bottom-wrap -->
  </div>
</template>

<script>
import vueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import TabComp from "../../components/TabComp.vue";

export default {
  name: "productDetail",
  components: { vueSlickCarousel, TabComp },
  data: function () {
    return {
      data1: [
        { image: require("../../assets/image/board/sample01.jpg") },
        { image: require("../../assets/image/main/mVisual.jpg") },
        { image: require("../../assets/image/board/sample01.jpg") },
        { image: require("../../assets/image/main/mVisual.jpg") },
        { image: require("../../assets/image/board/sample01.jpg") },
        { image: require("../../assets/image/main/mVisual.jpg") },
      ],
      slickOptions: {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        draggable: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
      slickNavOptions: {
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        dots: false,
      },
    };
  },
  methods: {
    syncSliders(currentPosition, nextPosition) {
      this.$refs["slider-big"].goTo(nextPosition);
      this.$refs["slider-thumb"].goTo(nextPosition);
    },
  },
};
</script>
