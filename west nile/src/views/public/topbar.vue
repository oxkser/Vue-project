<template>
  <div id="topbar">
    <div class="auto-info" v-for="(item,index) in product.slice(0,1)" :key="index">
      <img  @click="toAuthor(item.authorId)" :src="item.avatar"/>
      <div class="auto-info-1">
        <span class="productName">{{item.productName}}</span>
        <span class="heat"></span>
        <br />
        <span class="authorName">{{item.authorName}}</span>
        <span class="attention">关注</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topbar",
  props: {
    product: Array
  },
  methods: {
    load() {
      var top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        console.log(top);
      var node = document.getElementById("topbar");
   
        if (top > 300) {
          //500就是滚动条滚动到的位置，大于500才显示
          node.style.display = "block";
        } else {
          node.style.display = "none";
        }
    },
    //在新页面打开作者详情页
      toAuthor(authorId) {
        const { href }=this.$router.resolve({
          name:"Author",
          query:{
            authorId:authorId
          }
        });
        window.open(href,"_blank")
      }
  },
  mounted:function() {
    console.log(this.load);
    window.addEventListener("scroll", this.load);
  },
  destroyed:function() {
    window.removeEventListener("scroll", this.load, false);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#topbar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 1349px;
  height: 56px;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 999;
}

.auto-info {
  height: 56px;
  width: 1130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

#topbar img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
}
.auto-info-1 {
  width: auto;
  height: 39px;
  margin-left: 10px;
}
.productName {
  font-size: 14px;
  font-weight: 700;
}
.authorName {
  color: #666;
  font-size: 12px;
  cursor: pointer;
}
.attention {
  margin-left: 7px;
  color: #d36f16;
  cursor: pointer;
  font-size: 12px;
}
.heat {
  display: inline-block;
  width: 14px;
  height: 16px;
  margin-top: 0px;
  margin-left: 5px;
  background-image: url("https://static.zcool.cn/git_z/build/images/svg/bianjijingxuan.svg?v=1");
}
</style>
