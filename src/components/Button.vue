<template>
   <section>
    <o-button class="button is-primary" @click="clickMe('sdhjsdh')">Click Me</o-button>
  </section>
</template>
<script>

  export default {
        name: 'Button',
    data() {
      return {
        
      }
    },
    methods: {
      clickMe(msg) {
        alert(msg)
      }
    },
    computed: {
 
    }
  }
</script>
<style lang="scss">



</style>