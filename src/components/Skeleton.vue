<template>
  <section>
   
    <o-skeleton width="20%" :animated="animated"></o-skeleton>

    <o-skeleton width="40%" :animated="animated"></o-skeleton>

    <o-skeleton width="80%" :animated="animated"></o-skeleton>

    <o-skeleton :animated="animated"></o-skeleton>

    <o-skeleton :animated="animated" circle width="64px" height="64px"></o-skeleton>

    <o-skeleton :animated="animated" size="large" :count="2"></o-skeleton>
  </section>
</template>

<script>
  export default {
      name:'Skeleton',
    data() {
      return {
        animated: true
      }
    }
  }
</script>