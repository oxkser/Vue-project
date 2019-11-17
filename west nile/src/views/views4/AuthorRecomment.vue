<template>
  <div>
    <productlist1 :product="product"></productlist1>
  </div>
</template>
<script>
import productlist1 from '@/views/public/productlist1'
export default {
  name: "AuthorRecommend",
  components: {
    productlist1
  },
  data() {
    return {
      product: [],
      authorName: ""
    };
  },
  mounted: function() {
    this.$http
      .get("http://localhost:8081/search")
      .then(response => {
        this.product = response.data;
        console.log(response.data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};
</script>
<style scoped>
</style>