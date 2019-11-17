<template>
  <div class="container">
    <div class="item" v-for="item in products.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.productId">
      <img @click="getDetail(item.productId,item.authorName)" :src="item.cover" alt="">
      <div class="name">{{item.productName}}
          <div class="name-bgimg"></div>
      </div>
    </div>

    <div class="page">
        <!-- 分页组件 -->
        <el-pagination background layout="prev, pager, next" :page-size="pagesize" :total="products.length"
          @current-change="current" @prev-click="prevPage" @next-click="nextPage">
        </el-pagination>
      </div>
  </div>
</template>
<script>
export default {
  name: "productlist2",
  props: {
    products: Array
  },
  data() {
    return {
      pagesize: 5,
      currentPage: 1
    };
  },
  methods:{
      current(currentPage) {
        this.currentPage = currentPage;
      },
      prevPage() {
        this.currentPage--;
      },
      nextPage() {
        this.currentPage++;
      }
      ,
      getDetail(productId,authorName) {
        console.log(productId);
        console.log(authorName);
        this.$router.push({
          path: "/product",
          query: {
            id: productId,
            authorName:authorName
          }
        })
      }
  }
};
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.container{
    margin: 0;
    text-align:left;
}
.item {
  width: 205px;
  height: 200px;
  border-radius: 4px;
  margin-right: 21px;
  display: inline-block;
  border-radius: 5px;
  background-color: rgb(192, 238, 238);
}
.page{
    text-align: center;
    margin: 10px 0;
}
img{
    vertical-align: middle;
    width: 205px;
    height: 154px;
    border-radius: 5px;
    cursor: pointer;
}
.name{
    box-sizing: border-box;
    position: relative;
    width: 205px;
    height: 21px;
    padding:0 16px ;
    margin-top: 10px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name-bgimg {
    display: inline-block;
    position: absolute;
    right: 10px;
    width: 14px;
    height: 16px;
    margin-top: 0px;
    margin-left: 5px;
    background-image: url("https://static.zcool.cn/git_z/build/images/svg/bianjijingxuan.svg?v=1");
  }
</style>