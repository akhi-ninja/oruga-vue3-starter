<template>
  <Header />
  <div class="main-sidebar">
    <div class="sidebar-brand">
      
    </div>
  </div>
  <div class="layout-wrapper is-center-layout">
    <router-view />
  </div>
 
  <Footer />
   
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";


export default {
  name: "App",
  components: {

    Footer,
    Header
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#app {
  height: 100%;
  min-height: 100%;
}
</style>
