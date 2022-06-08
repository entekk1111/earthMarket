<template>
  <!-- select-group -->
  <div class="select-group">
    <li>
      <b-dropdown class="btn-dropdown">
        <template #button-content>
          상품 종류
          <i class="dropdown-arr"
            ><span class="sr-only">열림/닫힘화살표</span></i
          >
        </template>
        <b-dropdown-group
          class="chbox_wrap"
          v-for="(productItem, index) in productList"
          :key="index"
        >
          <input type="checkbox" name="" v-bind:id="'input' + productItem.id" />
          <label v-bind:for="'input' + productItem.id">
            {{ productItem.content }}
          </label>
        </b-dropdown-group>
        <b-dropdown-group class="btn-wrap">
          <button type="button" class="btn-cancel">취소</button>
          <button type="button" class="btn btn-green sm">확인</button>
        </b-dropdown-group>
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
        <b-dropdown-group
          class="chbox_wrap"
          v-for="(priceItem, index) in priceList"
          :key="index"
        >
          <input type="checkbox" name="" v-bind:id="'input' + priceItem.id" />
          <label v-bind:for="'input' + priceItem.id">
            {{ priceItem.content }}원
          </label>
        </b-dropdown-group>
        <b-dropdown-group class="btn-wrap">
          <button type="button" class="btn-cancel">취소</button>
          <button type="button" class="btn btn-green sm">확인</button>
        </b-dropdown-group>
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
        <b-dropdown-group
          class="chbox_wrap"
          v-for="(regionItem, index) in regionList"
          :key="index"
        >
          <input type="checkbox" name="" v-bind:id="'input' + regionItem.id" />
          <label v-bind:for="'input' + regionItem.id">
            {{ regionItem.content }}
          </label>
        </b-dropdown-group>
        <b-dropdown-group class="btn-wrap">
          <button type="button" class="btn-cancel">취소</button>
          <button type="button" class="btn btn-green sm">확인</button>
        </b-dropdown-group>
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
        <b-dropdown-group
          class="chbox_wrap"
          v-for="(methodlItem, index) in methodList"
          :key="index"
        >
          <input type="checkbox" name="" v-bind:id="'input' + methodlItem.id" />
          <label v-bind:for="'input' + methodlItem.id">
            {{ methodlItem.content }}
          </label>
        </b-dropdown-group>
        <b-dropdown-group class="btn-wrap">
          <button type="button" class="btn-cancel">취소</button>
          <button type="button" class="btn btn-green sm">확인</button>
        </b-dropdown-group>
      </b-dropdown>
    </li>
  </div>
  <!-- //select-group -->
</template>
<script>
export default {
  data: function () {
    return {
      //상품분류
      lists: [],
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
      value: "전체",
      dropdown: ["orange", "apple"],
      show: false,
      selectGroup: [],
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    select(option) {
      this.value = option;
    },
  },
};
</script>
