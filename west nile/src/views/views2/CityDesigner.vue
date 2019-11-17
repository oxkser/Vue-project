<template>
  <div class="citydesignerbox">
    <personal :authorlist="authorlist" :productList="productList"></personal>
  </div>
</template>

<script>
import personal from '@/views/public/personal'
export default {
  name: "CityDesigner",
  components:{
			"personal":personal
		},
  data() {
    return {
      authorlist: [],
      productList:[]
    };
  },
  methods: {
  },
  mounted: function() {
    this.$http
      .get("http://localhost:8081/Author")
      .then(response => {
        this.product = response.data;
        console.log(response.data);
        this.authorlist = response.data.result1;
        this.productList=response.data.result2;
        console.log(this.authorlist,this.productList);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.citydesignerbox{
  padding:1px 0;
}
</style>
