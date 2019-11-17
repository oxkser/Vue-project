<template>
  <div class="container">
    <!-- 背景 -->
    <div class="bg-img" :style="{backgroundImage: 'url(' +author[0].bgImg + ')'}"></div>
    <!-- 中间数据 -->
    <div class="item">
      <div class="item-left">
        <div>
          <div class="word">人气</div>
          <div class="pop">{{author[0].popularity}}</div>
        </div>
        <div>
          <div class="word">积分</div>
          <div class="pop">{{author[0].integral}}</div>
        </div>
      </div>
      
      <div class="item-right">
        <div>
          <div class="word">粉丝</div>
          <div class="pop">{{author[0].fans}}</div>
        </div>
        <div>
          <div class="word">关注</div>
          <div class="pop">{{author[0].attention}}</div>
        </div>
      </div>
    </div>

    <!-- 头像及信息部分 -->

    <div class="author-info">
        <div class="info">
          <div class="avatar-container">
            <img class="avatar" :src="author[0].avatar" />
          </div>
          <div class="author-name">{{author[0].authorName}}</div>
          <div class="author-address">{{author[0].address}}|{{author[0].profession}}</div>
          <div class="signature">{{author[0].signature}}</div>
          <div class="btn">
            <div @click="toUploadProduct(author[0].authorName)" class="start">开始创作</div>
          </div>
        </div>
    </div>

    <!-- 路由跳转部分 -->
    <div class="nav-center">
      <div
        v-for="(item,index) in navdata"
        :key="item.id"
        class="mylink"
        :class="{active:index==isActive}"
        @click="changeValue(index)"
      >{{item.title}}</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Myhome",
  data() {
    return {
      authorId: 0,
      isActive: false,
      product: [],
      person:[],
      author: [{ bgImg: "" }],
      authorName: "",
      navdata: [
        { id: 1, title: "推荐", toUrl: "/myrecomment" },
        { id: 2, title: "作品", toUrl: "/myproduct" },
        { id: 3, title: "资料", toUrl: "/mydetail" },
        { id: 4, title: "收藏", toUrl: "/mycollect" },
        { id: 5, title: "生活", toUrl: "/mylife" }
      ]
    };
  },
  methods: {
    changeValue(index) {
      this.isActive = index;
      this.$router.push({
        path: this.navdata[index].toUrl,
        query: { authorname: this.authorName }
      });
    },
    //在新页面打开作品上传页
    toUploadProduct(authorName) {
   //通过作者名查找
      this.$http
      .get("http://localhost:8081/authorName?authorName=" + authorName)
      .then(response => {
        this.person = response.data[0];
        console.log(this.person);
      })
      .catch(function(err) {
        console.log(err);
      });

      let mydata=JSON.stringify(this.person);
      const { href } = this.$router.resolve({
        path: "/create",
        query: {
          mydata
        }
      });
      window.open(href, "_blank");
    }
  },
  mounted: function() {
    console.log("已挂载我的主页");
    let authorId = this.$store.state.myId;
    console.log(authorId);
    this.$http
      .get("http://localhost:8081/authorIdSearch?authorId=" + authorId)
      .then(response => {
        this.author = response.data;
        this.authorName = response.data[0].authorName;
        console.log(this.author);
        console.log("name: " + this.authorName);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
}
.container {
  width: 100%;
  height: auto;
}
.bg-img {
  width: 100%;
  height: 344px;
  position: relative;
  background-position: center;
  background-color: #444444;
}
.item {
  width: 1098px;
  height: 52px;
  padding: 0 16px;
  position: absolute;
  left:50%;
  top:333px;
  margin-left:-549px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item > div {
  width: 440px;
  height: 52px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.item > div > div {
  width: 216px;
  height: 52px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.pop {
  width: 100%;
  height: 24px;
  font-size: 24px;
  text-align: center;
  line-height: 24px;
  color:#fff;
  font-weight:bold;
 
}
.word {
  width: 100%;
  font-size: 14px;
  font-weight:bold;
  text-align: center;
color:rgba(255, 255, 255, 0.5);
}
.author-info {
  width: 100%;
  height: 260px;
  position: relative;;
  top:-70px;
}
.info {
  width: 160px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.info > div {
  width: 100%;
  text-align: center;
}
div.avatar-container {
  width: 120px;
  height: 120px;
  border: 4px solid white;
  border-radius: 50%;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.author-name {
  font-size: 24px;
  color: #444444;
}
.author-address {
  margin-top: 7px;
  font-size: 12px;
  color: #bbbbbb;
}
.signature {
  margin-top: 12px;
  font-size: 14px;
  color: #666666;
}
.btn {
  width: 260px !important;
  height: 38px;
  margin: 0 auto;
  margin-top: 20px;
}
.btn > div {
  width: 160px;
  height: 36px;
  color: #666;
  border: 1px solid #bbb;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
    background:#53A7FF;
  border: 1px solid#53A7FF;
}
.start:hover {
  background: #409EFF;
  border: 1px solid#409EFF;
}
.nav-center {
  width: 468px;
  height: 56px;
  position: absolute;
  top:606px;
  left:50%;
  margin-left:-234px;
  z-index: 9999;
}
.mylink {
  display: inline-block;
  width: 90px;
  text-align: center;
  height: 100%;
  line-height: 56px;
  color: #999;
  cursor: pointer;
}
.mylink:hover {
  color: black;
}
.active {
  border-bottom: #444444 solid 2px;
  color: black;
  z-index: 100;
}
</style>