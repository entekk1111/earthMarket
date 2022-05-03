<template>
  <div id="app">
    <List/>
    <ProductDetail/>
  </div>
</template>

<script>
import List from './views/List.vue';
import ProductDetail from './views/ProductDetail.vue';

export default {
  name: 'App',
  components: {
    List,
    ProductDetail
  }
}
</script>

<style>

</style>
