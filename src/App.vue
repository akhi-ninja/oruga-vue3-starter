<template>

<Header/>
<div class="container  is-fluid">
<section class="main-content columns is-fullheight mt-3">
<!-- <MenuBar/> -->

  <div class="container is-fluid">
   <TileBox/>
  </div>
</section>
</div>
<Footer/>

</template>

<script>
// import MenuBar from './components/MenuBar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import TileBox from './components/TileBox.vue'

export default {
  name: 'App',
  components: {

    // MenuBar,
    Footer,
    Header,
    TileBox
  }
}
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
