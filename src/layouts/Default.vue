<template>
  <div class="main">
    <header>
      <Navigation/>
    </header>
    <slot/>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,500,700');

html, body {
  font-family: 'Roboto', sans-serif !important;
}
body { 
  background: url('../assets/images/bg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
<script>
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation
  }
}
</script>