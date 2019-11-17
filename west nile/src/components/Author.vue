<template>
  <div class="container">
    <div class="bg-img" :style="{backgroundImage: 'url(' +author[0].bgImg + ')'}">
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
    </div>

    <div class="author-info">
      <div class="info">
        <div class="avatar-container">
          <img class="avatar" :src="author[0].avatar" />
        </div>
        <div class="author-name">{{author[0].authorName}}</div>
        <div class="author-address">{{author[0].address}}|{{author[0].profession}}</div>
        <div class="signature">{{author[0].signature}}</div>
        <div class="btn">
          <div class="start">
            <div class="attention">关注</div>
          </div>
          <div>
            <div class="chat">私聊</div>
          </div>
        </div>
      </div>
    </div>

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
  name: "Author",
  components: {
  },
  data() {
    return {
      authorId: 0,
      isActive: false,
      product: [],
      author: [{ bgImg: "" }],
      authorName: "",
      navdata: [
        { id: 1, title: "推荐", toUrl: "/authorrecomment" },
        { id: 2, title: "作品", toUrl: "/authorproduct" },
        { id: 3, title: "资料", toUrl: "/authordetail" },
        { id: 4, title: "收藏", toUrl: "/authorCollect" },
        { id: 5, title: "生活", toUrl: "/authorLife" }
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
    }
  },
  mounted: function() {
    console.log("已挂载作者页面");
    this.authorId = this.$route.query.authorId;
    let authorId = this.$route.query.authorId;
    console.log("id------" + this.authorId);
    //通过作者的id去查作者的相关资料
    this.$http
      .get("http://localhost:8081/authorIdSearch?authorId=" + authorId)
      .then(response => {
        this.author = response.data;
        this.authorName = response.data[0].authorName;
        console.log("name: " + this.authorName);
      })
      .catch(function(err) {
        console.error(err);
      });

      //更改Vuex的状态
      let myData = JSON.parse(this.$route.query.myData);
      console.log(myData);
      this.$store.commit("change");
      this.$store.commit("GetId", myData);
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
  left: 50%;
  top:270px;
  margin-left: -549px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item > div {
  width: 440px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item > div > div {
  width: 216px;
  height: 52px;
  display: flex;
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
  color: #fff;
  font-weight: bold;
}
.word {
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}
.author-info {
  width: 100%;
  height: 260px;
  position: relative;
  top: -70px;
}
.info {
  width: 330px;
  margin: 0 auto;
  display: flex;
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
  width:326px !important;
  height: 38px;
  margin: 0 auto;
  margin-top: 20px;
  display:flex;
  justify-content: space-between;
  align-items: center;
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
  background: #53a7ff;
  border: 1px solid#53A7FF;
}
.btn > div:nth-of-type(2){
  background-color:#fff;
  border:1px solid #53A7FF;
}
.start:hover {
  background: #409eff;
  border: 1px solid#409EFF;
}
.nav-center {
  width: 468px;
  height: 56px;
  position: absolute;
  top: 606px;
  left: 50%;
  margin-left: -234px;
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