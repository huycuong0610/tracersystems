<template>
  <Layout>
    Start
  </Layout>
</template>


<style lang="scss">
section {
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #e2e2e2;
}
.my-hr-line{
    position: relative;
    left: -15px;
    width: calc(100% + 30px);
    /* height: 1px; */
    border: 0.5px solid #E4E5E6;
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
    &.white{
       border: 0.5px solid white;
    }
}
html{
  overflow-x: hidden;
}
img{
  width: 100%;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Facebook Developer Circles Innovation Challenge"
  },
  components: {
  }
};
</script>