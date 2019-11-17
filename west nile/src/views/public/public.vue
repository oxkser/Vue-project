<template>
  <div class="publicBox">
    <div class="editorbox">
      <div class="display" v-for="(item,index) in list" :key="index">
        <!-- list中的数量多于25时,进行分页 -->
        <img :src="item.cover" @click="getDetail(item.productId,item.authorName)" />
        <div class="name">{{item.productName}}</div>
        <div class="dec">{{item.fatherSort}}</div>
        <div class="icon">
          <i class="iconfont icon-liulanliang">{{item.productPopularity}}</i>
          <i class="iconfont icon-zan1">{{item.like}}</i>
          <i class="iconfont icon-liuyan">{{item.comments}}</i>
        </div>
        <div class="article" @click="toAuthor(item.authorId)">
          <img :src="item.avatar" />
          <span class="name">{{item.authorName}}</span>
          <span class="time">{{item.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    list: Array
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
      ]
    };
  },
  methods: {
    getDetail(productId, authorName) {
      console.log(productId);
      console.log(authorName);
      this.$router.push({
        path: "/product",
        query: {
          id: productId,
          authorName: authorName
        }
      });
    },
    getSort: function(sort) {
      return this.sorts[sort - 1];
    },
    toAuthor(authorId) {
      //跳轉到新頁面，並更改狀態值
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
  },
  mounted: function() {
    // let myData = this.$store.state.myData;
    // console.log(JSON.stringify(myData));
  }
};
</script>

<style>
.editorbox {
  /* width:660px; */
  margin: 0 auto;
  /* display:flex;
		justify-content: space-around;
		align-items:center;*/
}
.display {
  width: 210px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  float: left;
  margin: 8px;
}
.display img {
  width: 210px;
  height: 158px;
}
.display .name,
.display .dec,
.display .icon {
  width: 190px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
.display .name {
  text-align: left;
  color: #333;
  font-size: 14px;
}
.display .icon {
  margin: 10px 0;
  border-bottom: 1px solid #bbb;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.display .dec,
.display .icon i,
.display .article span {
  text-align: left;
  color: #bbb;
  font-size: 12px;
}
.display .name {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
}
.display .article img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.display .article {
  width: 190px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.display .article span {
  display: inline-block;
  width: 33%;
}
.display .article span.name {
  color: #333;
}
</style>
