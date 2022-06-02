<template>
  <div class="grab">
    <!-- breadcrumbs -->
    <ul class="breadcrumbs">
      <li><a href="javscript:void(0);">상품목록 </a></li>
      <li><a href="javscript:void(0);">과일류 </a></li>
      <li><a href="javscript:void(0);">딸기 </a></li>
    </ul>
    <!--  //breadcrumbs -->
    <div class="tit-wrap">
      <h2>새콤달콤 설향딸기</h2>
      <ul class="">
        <li><a href="javascript:void(0);">공유하기</a></li>
        <li>
          <a href="javascript:void(0);">저장<strong>40</strong></a>
        </li>
      </ul>
    </div>

    <div class="">
      <vueSlickCarousel v-bind="slickOptions">
        <div v-for="(d, index) in data1" :key="index">
          <a :href="d.image"> <img :src="d.image" alt="" />{{ d.text }} </a>
        </div>
      </vueSlickCarousel>
      <!--  -->
      <div class="info-wrap">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetail",
};
</script>
