<template>
  <div class="tab-wrap">
    <div class="tab-menu">
      <div class="grab">
        <button
          class="menu"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: currentTab === index }"
          @click="currentTab = index"
        >
          {{ tab }}
        </button>
        <a href="javascript:void(0);" class="btn-link"
          ><IconiFy class="ico" icon="bi:flag-fill" />판매자신고</a
        >
      </div>
    </div>
    <div class="tab-content grab">
      <div v-show="currentTab == 0">
        안녕하세요. 예리농장 예리아빠입니다~ 오늘은 물량이 부족해 15박스밖에
        발송을 못했습니다. 그래서 내일은 조금 더 적게 주문받겠습니다~ 수요일
        발송될 금실딸기 판매합니다. 생과이기 때문에 당도가 날마다 다를 수
        있습니다~ 최대한 받아보는 기쁨을 드리기 위해 노력하겠습니다 오늘은
        10개로 주문받아보겠습니다. 딸기는 주문순으로 발송되고 있습니다.
        현금입금시 1시간내 불입금시 자동취소됩니다. 도서산간이나 제주도는
        받아보시는 시간이 있으니 주문에 주의해 주세요. 저도 잘 살펴보겠습니다.
        그리고 주문하실 때 추가택배비를 선택해 주세요. 금실딸기 쨈이나
        슬러시용으로 꼬꼬마 사이즈와 못난이 딸기가 섞여있습니다. 1박스에 1.8~2kg
        사이로 담기고 2박스 묶음으로 판매합니다. 2박스 가격은 택배비 포함
        30,000원입니다. 우선 로젠택배입니다. 우체국은 차후 진행하겠습니다.
        [출처] (예리농장) 금실딸기판매합니다. (농라 -농산물 수산물 직거래 장터)
        | 작성자 예리농장 D3159
      </div>
      <div v-show="currentTab == 1">별점별점33</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabComp",
  data: function () {
    return {
      currentTab: 0,
      tabs: ["상품 정보", "상품 리뷰"],
    };
  },
};
</script>
