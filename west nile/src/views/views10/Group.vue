<template>
  <div class="devisebox">
    <!-- 设计师 -->
    <personal :authorlist="authorlist" :productList="productList"></personal>
  </div>
</template>

<script>
// 导入组件
import personal from "@/views/public/personal";
export default {
  name: "group",
  components: {
    personal: personal
  },
  data() {
    return {
      authorlist: [],
      productList: []
    };
  },
  mounted: function() {
    //从团体表中查数据
    this.$http
      .get("http://localhost:8081/Author")
      .then(response => {
        this.product = response.data;
        console.log(response.data);
        this.authorlist = response.data.result1;
        this.productList = response.data.result2;
        console.log(this.authorlist, this.productList);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.devisebox {
  width: 100%;
}
</style>
