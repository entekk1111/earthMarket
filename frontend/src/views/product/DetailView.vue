<template>
  <div>
    <div class="grab">
      <!-- breadcrumbs -->
      <ul class="breadcrumbs">
        <li>
          <a href="javscript:void(0);">상품목록 </a>
          <IconiFy
            icon="fa6-solid:angle-right"
            class="arr" />
        </li>
        <li>
          <a href="javscript:void(0);">과일류 </a>
          <IconiFy
            icon="fa6-solid:angle-right"
            class="arr" />
        </li>
        <li><a href="javscript:void(0);">딸기 </a></li>
      </ul>
      <!--  //breadcrumbs -->

      <!-- tit-wrap -->
      <div class="tit-wrap">
        <h2 class="cont-tit-normal">
          새콤달콤 설향딸기
        </h2>

        <!-- util-group -->
        <ul class="util-group">
          <li>
            <a href="javascript:void(0);">
              <IconiFy
                icon="mi:share"
                class="ico" />공유하기
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <IconiFy
                icon="bx:heart"
                class="ico ico-save" />저장
              <strong>40</strong>
            </a>
          </li>
        </ul>
        <!-- // util-group -->

        <!-- info-group  -->
        <ul class="info-group">
          <li>
            상품 평점<strong><IconiFy
              icon="ant-design:star-filled"
              class="ico-star" />4.7</strong>
          </li>
          <li>조회<strong>420</strong></li>
          <li>2022.03.17. 6:20</li>
        </ul>
        <!--  //info-group  -->
      </div>
      <!--  // tit-wrap -->

      <!--  top-wrap  -->
      <div class="top-wrap">
        <div class="slider-wrap">
          <vueSlickCarousel
            ref="slider-big"
            v-bind="slickOptions"
            @beforeChange="syncSliders"
            class="slider slider-for">
            <div
              v-for="(d, index) in data1"
              :key="index">
              <div class="item">
                <img
                  :src="d.image"
                  alt="" />
              </div>
            </div>
          </vueSlickCarousel>

          <vueSlickCarousel
            :class="'slider-thumb'"
            ref="slider-thumb"
            v-bind="slickNavOptions"
            :focus-on-select="true"
            @beforeChange="syncSliders"
            class="slider-nav">
            <div
              v-for="(d, index) in data1"
              :key="index">
              <div class="item">
                <img
                  :src="d.image"
                  alt="" />
              </div>
            </div>
          </vueSlickCarousel>
        </div>

        <!-- info-group  -->
        <div class="info-group">
          <strong class="money">18,000원</strong>
          <ul class="info-list">
            <li>
              <span>판매자</span><strong>달콤팜
                <i class="star-wrap"><IconiFy
                  icon="ant-design:star-filled"
                  class="ico-star" />
                  4.7</i></strong>
            </li>
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
          <a
            href="/chat "
            class="btn btn-green">판매자 채팅</a>
        </div>
        <!--  //info-group  -->
      </div>
      <!-- // top-wrap  -->
    </div>

    <!--  bottom-wrap -->
    <div class="bottom-wrap">
      <TabMenu>
        <Tab
          name="상품정보"
          selected="true">
          <p>
            안녕하세요. 예리농장 예리아빠입니다~ 오늘은 물량이 부족해 15박스밖에
            발송을 못했습니다. 그래서 내일은 조금 더 적게 주문받겠습니다~ 수요일
            발송될 금실딸기 판매합니다. 생과이기 때문에 당도가 날마다 다를 수
            있습니다~ 최대한 받아보는 기쁨을 드리기 위해 노력하겠습니다 오늘은
            10개로 주문받아보겠습니다. 딸기는 주문순으로 발송되고 있습니다.
            현금입금시 1시간내 불입금시 자동취소됩니다. 도서산간이나 제주도는
            받아보시는 시간이 있으니 주문에 주의해 주세요. 저도 잘
            살펴보겠습니다. 그리고 주문하실 때 추가택배비를 선택해 주세요.
            금실딸기 쨈이나 슬러시용으로 꼬꼬마 사이즈와 못난이 딸기가
            섞여있습니다. 1박스에 1.8~2kg 사이로 담기고 2박스 묶음으로
            판매합니다. 2박스 가격은 택배비 포함 30,000원입니다. 우선
            로젠택배입니다. 우체국은 차후 진행하겠습니다. [출처] (예리농장)
            금실딸기판매합니다. (농라 -농산물 수산물 직거래 장터) | 작성자
            예리농장 D3159
          </p>
        </Tab>

        <Tab
          name="상품리뷰"
          total="56">
          ssdfsdfsdf
        </Tab>
      </TabMenu>
    </div>
    <!-- // bottom-wrap -->
  </div>
</template>

<script>
import vueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import Tab from "../../components/tab/TabContent.vue";
import TabMenu from "../../components/tab/TabMenu.vue";

export default {
  name: "ProductDetail",
  components: { vueSlickCarousel, Tab, TabMenu },
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
