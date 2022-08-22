<template>
  <div class="tab-wrap">
    <!-- tab-menu -->
    <div class="tab-menu">
      <div class="grab">
        <button
          class="menu"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: tab.isActive }"
          @click="selectTab(tab)">
          <span>{{ tab.name }} </span>
        </button>
        <a
          href="javascript:void(0);"
          class="btn-link"><IconiFy
            class="ico"
            icon="bi:flag-fill" />판매자신고</a>
      </div>
    </div>
    <!-- // tab-menu -->

    <!-- tab-conten -->
    <div class="tab-content grab">
      <slot></slot>
    </div>
    <!-- // tab-content -->
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data: function () {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>
