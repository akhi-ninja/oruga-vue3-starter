<template>
     <o-sidebar position="static" :mobile="mobile" :expand-on-hover="expandOnHover" :reduce="reduce" open>
        <img width="128" src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4" alt="Lightweight UI components for Vue.js" />
        <section style="padding: 1em">
          <h5>Example 1</h5>
          <h5>Example 2</h5>
          <h5>Example 3</h5>
          <h5>Example 4</h5>
          <h5>Example 5</h5>
        </section>
      </o-sidebar>
</template>
<script>

  export default {
        name: 'MenuBar',
    data() {
      return {
        
      }
    },
    methods: {
      clickMe() {
        alert('Clicked!')
      }
    },
    computed: {
 
    }
  }
</script>
<style lang="scss">



</style>