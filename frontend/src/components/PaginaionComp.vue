<template>
  <div>
    <!-- pagination -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <!--  //pagination -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      perPage: 3,
      currentPage: 1,
    };
  },
};
</script>

<style scoped lang="scss">
.pagination ::v-deep {
  @import "~bootstrap/dist/css/bootstrap.min";
  @import "~bootstrap-vue/dist/bootstrap-vue.min";
}
</style>
