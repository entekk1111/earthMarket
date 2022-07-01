<template>
  <div id="app" :class="$route.meta.addClass">
    <Header />
    <div id="container" class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/HeaderCmp.vue";
import Footer from "./components/layout/FooterCmp.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
