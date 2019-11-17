<template>
  <div class="container">
    <topbar :product="product"></topbar>
    <el-backtop>up</el-backtop>
    <div class="nav-top1">
      <img src="https://reviveimg.hellorf.com/www/images/39ad77bf656b4a3390a0315877e51424.jpg" alt="">
    </div>
    <!-- 作品区 -->
    <div class="nav-top2" v-for="(item,index) in product.slice(0,1)" :key="index">
      <!-- 作品信息区，热度人气评论等等 -->
      <div class="nav-top2-left">
        <h2>{{item.productName}}
          &nbsp;&nbsp;<div class="item-bgimg"></div>
        </h2>
        <div class="nav-top2-left1">{{item.time}}</div>
        <div class="nav-top2-left2">
          <div class="sort">{{getSort(item.sort)}}</div>
          <div class="item-word">
            <div :title="'共'+item.productPopularity+'人气'"><span class="iconfont icon-renqi"></span> <span>{{item.productPopularity}}</span></div>
            <div :title="'共'+item.comments+'评论'"><span class="iconfont icon-pinglun"></span> <span>{{item.comments}}</span></div>
            <div :title="'共'+like+'点赞'"><span class="iconfont icon-diancai1-copy"></span> <span>{{like}}</span></div>
          </div>
        </div>
      </div>
      <!-- 作者信息区 -->
      <div class="nav-top2-right">
        <img :title="item.authorName" :src="item.avatar" @click="toAuthor(item.authorId)">
        <div class="auto-info">
          <div :title="item.authorName" class="auto-info-name">{{item.authorName}}</div>
          <span>{{item.address}}</span>
          <span>|</span>
          <span>{{item.profession}}</span>
          <div class="btn-area">
            <div :class="{classC:isAddAttention}" class="attention" title="添加关注" @click="addAttention(isAddAttention)">关注</div>
            <div class="chat" title="发私信">私信</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-dec" v-for="(item) in product.slice(0,1)" :key="item.id">{{item.des}}</div>
    <!-- 作品描述，图片展示 -->
    <div class="product" v-for="(item) in product" :key="item.id">
      <div class="img-dec">{{item.imgDec}}</div>
      <div class="img">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div :class="[isClick? classA : classB]" v-for="(item) in product.slice(0,1)" @click="addLike(isClick)" :key="item.id">
      <div class="like-bgimg"></div>
      <span>{{like}}</span>
    </div>
    <div class="blank"></div>
    <productlist2 :products="products"></productlist2>
  </div>
</template>

<script>
  import topbar from './topbar'
  import productlist2 from'./productlist2'
  export default {
    name: "Product",
    components:{
      topbar,
      productlist2
    },
    data() {
      return {
        sorts: ['平面', 'UI', '网页', '插画', '动漫', '摄影', '空间', '工业/产品', '三维', '影视', '手工艺', '纯艺术', '服装', '其他'],
        product: [],
        products:[],
        productId: 0,
        authorName:"",
        like: 0,
        isClick: false,
        isAddAttention:false,
        classA: 'classA',
        classB: 'classB'
      }
    },
    computed: {
      id() {
        return this.$route.query.id;
      }
    },
    methods: {
      //给作品点赞，同一用户只能点赞一次。同时更改数据库里对应作品的like值
      addLike(isClick) {
        if (!isClick) {
          this.isClick = true;
          this.like++;
          let likes = this.like;
          let productId = this.productId;
          this.$http.get("http://localhost:8081/updataLike?like=" + likes + "&productId=" + productId)
            .then((response) => {
              console.log(response.data);
            })
            .catch(function(err) {
              console.error(err);
            })
              alert("作者大大已经收到你的点赞信息");
          return this.like;
        
        }
      },
      addAttention(isAddAttention) {
        if (!isAddAttention) {
          this.isAddAttention = true;
          this.fans++;
          let fans = this.fans;
          let authorName = this.authorName;
          this.$http.get("http://localhost:8081/updataFans?fans=" + fans + "&authorName=" + authorName)
            .then((response) => {
              console.log(response.data);
            })
            .catch(function(err) {
              console.error(err);
            })
              alert("关注"+this.authorName+"成功");
          return this.fans;
        
        }
      },
      getSort: function(index) {
        return this.sorts[index - 1];
      },
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
    },
    mounted: function() {
      //更改Vuex全局状态
      let myData = JSON.parse(this.$route.query.myData);
      console.log(myData);
      this.$store.commit("change");
      this.$store.commit("GetId", myData);

      console.log("已挂载");
      let productId = this.$route.query.id;
      let authorName=this.$route.query.authorName;
      console.log(productId);
      console.log(authorName);
      this.$http.get("http://localhost:8081/productIdSearch?productId=" + productId)
        .then((response) => {
          this.product = response.data;
          this.like = response.data[0].like;
          this.productId = response.data[0].productId;
          this.authorName=response.data[0].authorName;
          console.log(response.data);
        })
        .catch(function(err) {
          console.error(err);
        });
        this.$http.get("http://localhost:8081/authorNameSearch?authorName="+authorName)
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(function(err) {
          console.log(err);
        })
    },
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 1130px;
    height: auto;
    margin:0 auto;
     text-align:left;
  }
  .nav-top1 {
    padding: 20px 0;
    background: #fff;
    border-bottom: 1px solid #eee;
  }

  .nav-top1>img {
    width: 1130px;
    height: 100px;
  }

  .nav-top2 {
    width: 1130px;
    height: 130px;

    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }

  .nav-top2-left {
    width: 70%;
    padding: 15px 0;
    border-right: 1px solid #eee;
  }

  .nav-top2-right {
    width: 30%;
    text-align:left;
  }

  h2 {
    color: #333;
    font-size: 24px;
    font-weight: 400;
    display: inline-block;
  }

  .item-bgimg {
    display: inline-block;
    width: 14px;
    height: 16px;
    margin-top: 0px;
    margin-left: 5px;
    background-image: url(https://static.zcool.cn/git_z/build/images/svg/bianjijingxuan.svg?v=1);
  }

  .nav-top2-left>div {
    width: 100%;
    height: 31px;
    padding-top: 9px;
    font-size: 14px;
    color: #bbb;
  }

  .nav-top2-left2 {
    display: flex;
    justify-content: space-between;
  }

  .sort {
    width: 200px;
  }

  .item-word {
    display: flex;
    justify-content: space-around;
    width: 270px;
    height: auto;
    text-align: center;
  }

  .nav-top2-right>img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin: 25px 25px;
  }

  .auto-info {
    display: inline-block;
    position: absolute;
    width: 204px;
    height: 100px;
    margin: 15px 0;
  }

  .auto-info-name {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    vertical-align: middle;
    margin-bottom: 5px;
  }

  .auto-info-name:hover {
    color: #d36f16;
  }

  .auto-info>span {
    font-size: 12px;
    color: #bbb;
  }

  .btn-area {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 36px;
    margin-top: 15px;
  }

  .btn-area>div {
    width: 88px;
    height: 100%;
    border-radius: 5px;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
  }

  .attention {
    color: #444;
    background: #ffe300;
    border: 1px solid #ffe300;
  }
.classC{
    background-color: gray;
     border: 1px solid gray;
  }
  

  .chat {
    color: #444;
    border: 1px solid #999;
  }

  .product-dec {
    width: 800px;
    margin: 50px 165px;
    height: auto;
    font-size: 16px;
    word-wrap: break-word;
  }

  .img-dec {
    width: 800px;
    margin: 25px 165px;
    height: auto;
    font-size: 14px;
    text-align: center;
    word-wrap: break-word;
  }

  .img {
    width: 1130px;
    height: auto;
    margin-bottom: 50px;
    text-align: center;

  }
 .img img{
   width:1130px;
 }
  .classB {
    width: 118px;
    height: 72px;
    padding-top: 15px;
    position: relative;
    display: flex;
    flex-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #ffe300;
    margin: 0 auto;
    border-radius: 50px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .classA {
    color: #999;
    background-color: #EEEEEE;
    width: 118px;
    height: 72px;
    padding-top: 15px;
    position: relative;
    display: flex;
    flex-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .like-bgimg {
    width: 28px;
    height: 28px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: url("https://static.zcool.cn/git_z/build/images/svg/dianzan.svg");
  }
  .blank{
    width: 100%;
    height: 50px;
     border-bottom: 1px solid #eee;
  }
</style>
