<template>
<section>
    <o-field label="Name">
      <o-input v-model="name"></o-input>
    </o-field>

    <o-field label="Email" variant="danger" message="This email is invalid">
      <o-input type="email" value="john@" maxlength="30"> </o-input>
    </o-field>


    <o-field label="Password">
      <o-input type="password" value="iwantmytreasure" password-reveal> </o-input>
    </o-field>

    <o-field label="Message">
      <o-input maxlength="200" type="textarea"></o-input>
    </o-field>

 
    <o-button variant="primary">Submit</o-button>
  </section>
</template>
<script>
  export default {
      name:'Forms',
    data() {
      return {
        name: 'John Silver'
      }
    }
  }
</script>