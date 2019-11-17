<template>
  <div class="main">
    <ul class="main-list">
      <!-- 遍历从数据库里拿到的作品信息，渲染到页面，并通过数组的划分实现分页 -->
      <li
        v-for="(item,index) in product.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :key="index"
      >
        <img :src="item.cover" @click="getDetail(item.productId,item.authorName)" />
        <div class="main-list-item">
          <div class="item-name">{{item.productName}}</div>
          <div class="item-bgimg"></div>
          <div class="item-sort">{{getSort(item.sort)}}</div>
          <div class="item-word">
            <span :title="'共'+item.productPopularity+'人气'" class="iconfont icon-renqi"></span>
            <span>{{item.productPopularity}}</span>&nbsp;&nbsp;
            <span :title="'共'+item.comments+'评论'" class="iconfont icon-pinglun"></span>
            <span>{{item.comments}}</span>&nbsp;&nbsp;
            <span :title="'共'+item.like+'点赞'" class="iconfont icon-diancai1-copy"></span>
            <span>{{item.like}}</span>&nbsp;&nbsp;
          </div>
        </div>
        <div @click="toAuthor(item.authorId)" class="card">
          <img :src="item.avatar">
          <div class="author">{{item.authorName}}</div>
          <div class="time">{{item.time}}</div>
        </div>
      </li>
    </ul>
    <div class="page">
      <!-- 分页组件 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="product.length"
        @current-change="current"
        @prev-click="prevPage"
        @next-click="nextPage"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "productlist1",
  props: {
    product: Array
  },
  data() {
    return {
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
      pagesize: 10,
      currentPage: 1
    };
  },
  methods: {
    current(currentPage) {
      this.currentPage = currentPage;
    },
    prevPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
    },
    //通过类别编号获取类别信息
    getSort: function(sort) {
      return this.sorts[sort - 1];
    },
    //通过路由跳转到作品详情界面，传参为对应作品的id
    getDetail(productId,authorName) {
        let myData = JSON.stringify(this.$store.state.myData);
        const { href }=this.$router.resolve({
          name:"Product",
          query:{
            id:productId,
            authorName,
            myData
          }
        });
        window.open(href,"_blank")
      },
    //在新页面打开作者详情页
      toAuthor(authorId) {
         let myData = JSON.stringify(this.$store.state.myData);
        const { href }=this.$router.resolve({
          name:"Author",
          query:{
            authorId,
            myData
          }
        });
        window.open(href,"_blank")
      }
  }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.main {
  width: 100%;
  height: auto;
  padding-top: 20px;
  background-color: #f4f4f4;
}

.main-list {
  width: 1170px;
  height: auto;
  margin: 0 auto;
   text-align:left;
}

.main-list > li {
  width: 210px;
  height: 308px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: white;
  display: inline-block;
  overflow: hidden;
}

.main-list > li > img {
  width: 210px;
  height: 158px;
  border-radius: 5px;
  cursor: pointer;
}

.main-list > li > img:hover {
  opacity: 0.8;
  transition: 0.1s linear;
}

.main-list-item {
  border-bottom: 1px solid #eee;
  padding: 11px 16px 13px;
  height: 75px;
  width: 178px;
}

.item-name {
  width: 154px;
  height: 20px;
  color: #000000;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
}
.item-name:hover {
  color: #d36f16;
}
.item-bgimg {
  display: inline-block;
  width: 14px;
  height: 16px;
  margin-top: 0px;
  margin-left: 5px;
  background-image: url("https://static.zcool.cn/git_z/build/images/svg/bianjijingxuan.svg?v=1");
}

.item-sort {
  width: 178px;
  height: 18px;
  font-size: 12px;
  color: #bbb;
  margin-bottom: 17px;
}

.item-word {
  font-size: 12px;
  color: #bbb;
}
.item-word span{
 margin:0 2px;
}
.card {
  width: 178px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
}

.card img {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 11px;
}

.card div {
  display: inline-block;
  font-size: 12px;
}

.author {
  width: 80px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-left: 25px;
  cursor: pointer;
}
.author:hover {
  color: #d36f16;
}
.card .time {
  color: #bbb;
}
.page {
  text-align: center;
  margin: 10px 0;
}
</style>