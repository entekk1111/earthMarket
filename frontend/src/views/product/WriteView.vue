<template>
  <div>
    <form action="">
      <div>
        상품종류
        <select name="PRODUCT_CATE" id="">
          <option value="">상품 종류 선택</option>
          <option value="A">과채류</option>
        </select>
        <input
          type="text"
          placeholder="상품 입력"
          name="PRODUCT_CATE_SN"
          v-model="PRODUCT_CATE_SN"
          ref="PRODUCT_CATE_SN"
        />
      </div>
      <div>
        판매글 제목
        <input
          type="text"
          name="TITLE"
          placeholder="판매글 제목을 올려주세요."
          v-model="TITLE"
          ref="TITLE"
        />
      </div>
      <div>
        규격
        <input
          type="number"
          name="PER_UNIT"
          placeholder="0"
          v-model="PER_UNIT"
        />
        <select name="UNIT" v-model="UNIT" id="">
          <option value="">단위</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </div>
      <div>
        가격 <input type="tel" name="PRICE" v-model="PRICE" placeholder="0" />원
      </div>
      <div>
        판매자 주소 <button type="button">주소 가져오기</button>
        <input type="text" name="SELLER_ADDR" v-model="SELLER_ADDR" />
        <button type="button">주소 찾기</button>
        <input
          type="text"
          name="SELLER_DETAIL_ADDR"
          placeholder="상세주소 입력"
          v-model="SELLER_DETAIL_ADDR"
        />
      </div>
      <div>
        상품 상세 설명<textarea
          name="DETAIL_DESC"
          id=""
          cols="30"
          rows="10"
          v-model="DETAIL_DESC"
        ></textarea>
      </div>
      <div>
        상품 사진 올리기
        <div>최대 5장 사진 업로드 가능</div>
      </div>
      <div>
        거래방법
        <input type="checkbox" v-model="DELIVER_METHOD" value="A" />
        일반택배
        <input type="checkbox" v-model="DELIVER_METHOD" value="B" />
        당일배송(고속버스터미널 택배 )
        <input type="checkbox" v-model="DELIVER_METHOD" value="C" />
        직거래
      </div>
    </form>
    <button type="button">취소하기</button
    ><button type="button" @click="addProductFn">등록하기</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "WritePage",
  data() {
    return {
      PRODUCT_CATE_SN: "",
      TITLE: "",
      PER_UNIT: "",
      UNIT: "",
      PRICE: "",
      SELLER_ADDR: "",
      SELLER_DETAIL_ADDR: "",
      DETAIL_DESC: "",
      DELIVER_METHOD: [],
      form: "",
    };
  },
  methods: {
    addProductFn() {
      if (!this.PRODUCT_CATE_SN) {
        alert("카테고리를 입력해주세요.");
        this.$refs.PRODUCT_CATE_SN.focus();
        return;
      }
      if (!this.TITLE) {
        alert("제목을 입력해주세요.");
        this.$refs.TITLE.focus();
        return;
      }

      this.form = {
        PRODUCT_CATE_SN: this.PRODUCT_CATE_SN,
        TITLE: this.TITLE,
        PER_UNIT: this.PER_UNIT,
        UNIT: this.UNIT,
        PRICE: this.PRICE,
        SELLER_ADDR: this.SELLER_ADDR,
        SELLER_DETAIL_ADDR: this.SELLER_DETAIL_ADDR,
        DETAIL_DESC: this.DETAIL_DESC,
        DELIVER_METHOD: this.DELIVER_METHOD,
      };
      axios
        .post("/api/product/addProduct", this.form)
        .then((succese) => {
          console.log(succese);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
