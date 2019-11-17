<template>
  <div class="createBox">
    <div class="nav1">
      <div class="topnavbox1" ref="nav">
        <div v-for="(item,sort) in sorts" :key="sort" @click="sortSearch(sort+1)">{{item}}</div>
      </div>
    </div>
    <div class="hiddenbox" ref="hidden">
      <div class="hidden"></div>
    </div>
    <div class="displaybox">
      <productlist1 :product="product"></productlist1>
    </div>
  </div>
</template>

<script>
import productlist1 from "@/views/public/productlist1";
export default {
  name: "CityCreate",
  components: {
    productlist1: productlist1
  },
  data() {
    return {
      product: [],
      sorts: [
        "平面",
        "UI",
        "网页",
        "插画",
        "动漫",
        "摄影",
        "空间",
        "工业/产品",
        "三维",
        "影视",
        "手工艺",
        "纯艺术",
        "服装",
        "其他"
      ],
    };
  },
  methods: {
	   sortSearch: function(sort) {
      console.log(sort);
      this.$http
        .get("http://localhost:8081/sortSearch?sort=" + sort)
        .then(response => {
          this.product = response.data;
          console.log(response.data);
        })
        .catch(function(err) {
          console.error(err);
        });
    },
    search: function() {
      this.$http
        .get("http://localhost:8081/search")
        .then(response => {
          this.product = response.data;
          console.log(this.product[0].productName);
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  },
  mounted() {
    this.search();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.displaybox {
  width: 1100px;
  margin: 0 auto;
  padding-top: 20px;
}

.createBox {
  background-color: #f4f4f4;
  overflow: hidden;
}

.nav1 {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #f4f4f4;
}

.topnavbox1 {
  background-color: #fff;
  width: 1066px;
  height: 60px;
  margin: 0 auto;
}

.topnavbox1 div {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 15px 20px;
  color: #282828;
  font-size: 14px;
  color: #282828;
}
.topnavbox1 div:hover{
	cursor: pointer;
}
.hiddenbox {
  width: 100%;
  height: 110px;
  background-color: #fff;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  position: absolute;
  display: none;
}
</style>
