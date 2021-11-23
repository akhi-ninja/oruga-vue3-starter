<template>
  <o-tabs type="boxed">
    <o-tab-item>
      <template v-slot:header>
        <o-icon icon="info-circle" rootClass="custom-icon"></o-icon>
        <span> Issues 3 </span>
      </template>
    </o-tab-item>
    <o-tab-item>
      <template v-slot:header>
        <o-icon icon="retweet" rootClass="custom-icon"></o-icon>
        <span> Pull Requests </span>
      </template>
    </o-tab-item>
  </o-tabs>
</template>
<script>
export default {
  name: "Tabs",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss"></style>
