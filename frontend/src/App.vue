<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
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
