<template>
  <div>
    <!-- pagination -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows">
      <!-- <template #first-text><span class="sr-only">First</span></template> -->
      <template #prev-text>
        <IconiFy icon="fa6-solid:angle-left" />
      </template>
      <template #next-text>
        <IconiFy icon="fa:angle-right" />
      </template>
      <!-- <template #last-text><span class="sr-only">Last</span></template> -->
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <!-- {{ page }} -->
      </template>
    </b-pagination>
    <!--  //pagination -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      rows: 100,
      perPage: 10,
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
