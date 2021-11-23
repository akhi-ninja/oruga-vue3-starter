<template>
  <Header />
  <div class="main-sidebar">
    <div class="sidebar-brand">
      <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
  <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
    Docs
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
      Overview
    </a>
  </div>
</div>
    </div>
  </div>
  <div class="layout-wrapper is-center-layout">
    <div class="columns">
      <div class="is-9 column">
        <section class="main-content columns is-fullheight mt-3">
          <div class="container is-fluid">
            <TileBox />
          </div>
        </section>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// import MenuBar from './components/MenuBar.vue'
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import TileBox from "./components/TileBox.vue";

export default {
  name: "App",
  components: {
    // MenuBar,
    Footer,
    Header,
    TileBox,
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
