<template>
  <div class="grab">
    <!-- breadcrumbs -->
    <ul class="breadcrumbs">
      <li>
        <a href="javscript:void(0);">상품목록 </a
        ><IconiFy icon="fa6-solid:angle-right" class="arr" />
      </li>
      <li>
        <a href="javscript:void(0);">과일류 </a
        ><IconiFy icon="fa6-solid:angle-right" class="arr" />
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
          <a href="javascript:void(0);"
            ><IconiFy icon="mi:share" class="ico" />공유하기</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><IconiFy icon="bx:heart" class="ico ico-save" />저장<strong
              >40</strong
            ></a
          >
        </li>
      </ul>
      <!-- // util-group -->

      <!-- info-grouu  -->
      <ul class="info-grouup">
        <li>
          상품 평점<strong><i class="ico-star"></i>4.7</strong>
        </li>
        <li>조회<strong>420</strong></li>
        <li>2022.03.17. 6:20</li>
      </ul>
      <!--  //info-grouu  -->
    </div>
    <!--  // tit-wrap -->

    <!--  mid-wrap  -->
    <div class="mid-wrap">
      <vueSlickCarousel v-bind="slickOptions">
        <div v-for="(d, index) in data1" :key="index">
          <a :href="d.image"> <img :src="d.image" alt="" />{{ d.text }} </a>
        </div>
      </vueSlickCarousel>
      <!-- info-group  -->
      <div class="info-group">
        <strong>18,000원</strong>
        <ul>
          <li><span>판매자</span>달콤팜 4.7</li>
          <li><span>규격</span>4kg</li>
          <li><span>카테고리</span>농산물 / 과일</li>
          <li>
            <span>배송정보</span>
            <ul>
              <li>직거래</li>
              <li>당일배송</li>
              <li>일반택배</li>
            </ul>
          </li>
        </ul>
      </div>
      <!--  //info-group  -->
    </div>
    <!-- // mid-wrap  -->
  </div>
</template>

<script>
export default {
  name: "productDetail",
};
</script>
