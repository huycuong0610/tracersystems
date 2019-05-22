<template>
  <div class="main">
    <header>
      <Navigation/>
    </header>
    <slot/>
    <Footer />
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600,600i,700,700i');

html, body {
  font-family: 'Montserrat', sans-serif !important;
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