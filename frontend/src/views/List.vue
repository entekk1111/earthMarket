<template>
    <div>
        <div>
            <h1>상품모아보기</h1>
            <SearchInput/>
            <button>상품종류</button><button>가격</button><button>지역</button><button>거래방법</button><button>내근처상품탐색</button>
            총 1020 상품    
            <select>
                <option value="">최신등록순</option>
                <option value="">낮은가격순</option>
                <option value="">높은가격순</option>
                <option value="">관심순</option>
            </select>
        </div>
        <div>
            <ProductItem/><ProductItem/><ProductItem/><ProductItem/><ProductItem/><ProductItem/>
        </div>
    </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue'
import ProductItem from '../components/ProductItem.vue'

export default {
    name:"ListPage",
    components:{
        SearchInput,
        ProductItem
    }
}
</script>