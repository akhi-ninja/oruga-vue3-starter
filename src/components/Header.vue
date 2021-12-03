<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">

      <img width="42" height="68" src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4" alt="Lightweight UI components for Vue.js" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

<router-link class="navbar-item" to="/">Home</router-link> |
      <router-link class="navbar-item" to="/about">About</router-link>
  
    </div>

    <div class="navbar-end header-nav">
      <div class="navbar-item">
        <div class="buttons">
         
          <o-button @click="clickMe('signup')" class="button is-primary" >Sign up</o-button>
           <o-button  @click="clickMe('login')" class="button  is-light" >Log in</o-button>
        
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>

  export default {
        name: 'Header',
    data() {
      return {
        
      }
    },
    methods: {
      clickMe(msg) {
        alert(msg, 'Clicked!')
      }
    },
    computed: {
 
    }
  }
</script>
<style lang="scss">



</style>