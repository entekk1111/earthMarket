<template>
  <!-- <div>
    <div>
      <h1>상품모아보기</h1>
      <SearchInput />
      <button>상품종류</button><button>가격</button><button>지역</button
      ><button>거래방법</button><button>내근처상품탐색</button>
      총 1020 상품
      <select>
        <option value="">최신등록순</option>
        <option value="">낮은가격순</option>
        <option value="">높은가격순</option>
        <option value="">관심순</option>
      </select>
    </div>
    <div>
      <ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem /><ProductItem />
    </div>
  </div> -->

  <div class="contentList-wrap">
    <!-- top-wrap -->
    <div class="top-wrap">
      <h2 class="cont-tit">상품 모아보기</h2>
      <div class="search-wrap">
        <label for="inputSearch"
          ><span class="sr-only">상품 또는 지역 찾아보기</span></label
        >
        <input
          type="text"
          id="inputSearch"
          placeholder="상품 또는 지역 찾아보기"
        />
        <button type="button" class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--bx"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            data-icon="bx:search"
          >
            <path
              fill="currentColor"
              d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"
            ></path></svg
          ><span class="sr-only">검색</span>
        </button>
      </div>
    </div>
    <!-- // top-wrap -->

    <!-- sort-wrap -->
    <div class="sort-wrap">
      <!-- select-group -->
      <ul class="select-group">
        <li class="item">
          <div class="select-wrap dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              상품종류
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </li>
        <li class="item">
          <div class="select-wrap">
            <label for="select02"><span class="sr-only">가격</span></label>
            <select id="select02">
              <option>가격</option>
            </select>
          </div>
        </li>
        <li class="item">
          <div class="select-wrap">
            <label for="select03"><span class="sr-only">지역</span></label>
            <select id="select03">
              <option>지역</option>
            </select>
          </div>
        </li>
        <li class="item">
          <div class="select-wrap">
            <label for="select04"><span class="sr-only">거래방법</span></label>
            <select id="select04">
              <option>거래방법</option>
            </select>
          </div>
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
    <!--  //sort-wrap -->
  </div>
</template>

<script>
// import SearchInput from "../components/SearchInput.vue";
// import ProductItem from "../components/ProductItem.vue";

export default {
  name: "ListPage",
  //   components: {
  //     ProductItem,
  //     SearchInput,
  //   },
};
</script>
