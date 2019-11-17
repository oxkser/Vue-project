<template>
  <div class="Headerbox">
    <div class="navbox">
      <div class="nav">
        <div class="logobox">
          <img class="image" src="../assets/logo.png" alt="logo" />
          <div class="logo">West nile</div>
        </div>
        <el-menu
          class="el-menu-demo navbox1"
          mode="horizontal"
          router
          background-color="#409EFF"
          text-color="#ECF5FF"
        >
          <el-menu-item>
            <router-link to="/" class="home">首页</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/search" class="search">发现</router-link>
          </el-menu-item>
          <el-submenu :index="item1.id" v-for="item1 in middlelist" :key="item1.id">
            <template slot="title">
              <router-link :to="{path:item1.path}">{{item1.name}}</router-link>
            </template>
            <el-menu-item>
              <router-link :to="item1.path">{{item1.list[0]}}</router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link :to="item1.path">{{item1.list[1]}}</router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link :to="item1.path">{{item1.list[2]}}</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item>
            <router-link to="/designer" class="designer">设计师</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/list" class="list">榜单</router-link>
          </el-menu-item>
        </el-menu>

        <el-menu
          class="el-menu-demo navbox1"
          mode="horizontal"
          router
          background-color="#409EFF"
          text-color="#ECF5FF"
        >
          <el-menu-item>
            <i class="iconfont icon-sousuo"></i>
          </el-menu-item>
          <el-menu-item>
            <div class="updata" @click="toUploadProduct(myName)">
              <i class="iconfont icon-upload"></i>
            </div>
          </el-menu-item>
          <el-menu-item>
            <i class="iconfont icon-tishi"></i>
          </el-menu-item>
          <el-submenu class="loginimg" index="4">
            <template slot="title">
              <router-link to="/login">
                <img :src="ImgUrl" />
              </router-link>
            </template>
            <el-menu-item
              v-for="item in mylist"
              :key="item.id"
              v-show="flag"
              @click="PathTo(item.path)"
            >
              <a>{{item.dec}}</a>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="routerbox">
      <router-view></router-view>
    </div>
    <div class="footer1">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer";

export default {
  name: "Header",
  components: {
    Footer
  },
  data() {
    return {
      mydata: [],
      flag: false,
      myName:this.$store.state.myName,
      mylist: [
        { id: 1, dec: "我的主页", path: "/data" },
        { id: 2, dec: "开始创作", path: "/create" },
        { id: 3, dec: "资料与账号", path: "/resume" },
        { id: 4, dec: "退出", path: "/" }
      ],
      middlelist: [
        {
          id: "2",
          name: "同城",
          path: "/city",
          list: ["创作", "生活圈", "设计师"],
          pathlist: ["/citycreate", "/citylife", "/citydesigner"]
        },
        //路由未匹配
        {
          id: "3",
          name: "活动",
          path: "/activity",
          list: ["专题活动", "线上活动", "设计大赛"],
          pathlist: ["/special", "/online", "/design"]
        }
      ]
    };
  },
  methods: {
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
    },
    PathTo(path) {
      this.$router.push({ path: `${path}` });
    }
  },
  computed: {
    ImgUrl() {
      return this.$store.state.myAvatar;
    }
  },
  mounted: function() {
    console.log(this.$store.state.myName);
    this.flag = this.$store.state.flag;
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.navbox {
  width: 100%;
  height: 60px;
  background-color: #409eff;
  overflow: hidden;
}
.routerbox {
  width: 100%;
  overflow: hidden;
}
.nav {
  width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logobox {
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.image {
  width: 45px;
  height: 45px;
}

.logo {
  width: 150px;
  height: 55px;
  line-height: 55px;
  display: inline-block;
  font-size: 28px;
  font-weight: bold;
}

.rightnav ul {
  margin: 0 30px;
}

.el-menu-item i.iconfont {
  font-size: 22px;
  color: #ecf5ff;
}

.el-submenu a {
  color: #ecf5ff;
  text-decoration: none;
}
.el-menu-item a {
  text-decoration: none;
}
.footer1 {
  height: 230px;
  overflow: hidden;
}
.el-menu--horizontal ul li a {
  color: #ecf5ff;
  text-decoration: none;
}
.el-submenu .is-opened {
  color: #ecf5ff;
}
.loginimg img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
