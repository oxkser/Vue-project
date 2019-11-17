<template>
  <div class="block">
    <div class="banner">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in bannerlist" :key="item.banner_id">
          <img :src="item.banner_url" :alt="item.productName"  @click="getDetail(item.productId,item.authorName)"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middledisplay">
      <div class="middledisplaybox">
        <div class="imagebox" v-for="item in imagelist" :key="item.id">
          <img :src="item.imgUrl" :alt="item.productName" class="image" />
        </div>
      </div>
    </div>
    <div class="middlenav">
      <div class="middlenavbox">
        <router-link to="/recommend">首页推荐</router-link>
        <router-link to="/release">最新发布</router-link>
        <router-link to="/up">上升最快</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footerimagebox">
      <div class="footerimage">
        <img
          src="https://reviveimg.hellorf.com/www/images/e036a80ccc99efe90b961e483e494298.jpg"
          alt="footerimage"
        />
      </div>
    </div>
    <div class="guessFont">猜你喜欢</div>
    <div class="guessbox">
      <div class="guess">
       <Display :list=mylist></Display>
      </div>
    </div>
  </div>
</template>

<script>
import Display from "@/views/public/public"
export default {
  name: "Home",
  components: {
	  Display
  },
  data() {
    return {
    	mylist:[],
      bannerlist: [],
      imagelist: [
        {
          id: 1,
          imgUrl:
            "https://reviveimg.hellorf.com/www/images/9b0243ce8237a963ef37e96379543600.jpg",
          name: "图片1"
        },
        {
          id: 2,
          imgUrl:
            "https://reviveimg.hellorf.com/www/images/b69be431c9f2e61a01ec4603cac08f95.jpg",
          name: "图片2"
        },
        {
          id: 3,
          imgUrl:
            "https://reviveimg.hellorf.com/www/images/133e3ce119215fb9d6fe3510fe71dd16.jpg",
          name: "图片3"
        },
        {
          id: 4,
          imgUrl:
            "https://reviveimg.hellorf.com/www/images/c6521ecab805e678843de979622ddae6.jpg",
          name: "图片4"
        },
        {
          id: 5,
          imgUrl:
            "https://img.zcool.cn/community/01f6145db6794aa8012163ba29088d.jpg@260w_195h_1c_1e_1o_100sh.jpg",
          name: "图片5"
        }
      ]
    };
  },
  methods:{
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
    load() {
      console.log("-----------");
      var top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        console.log(top);
      var node = document.getElementsByClassName("middlenav")[0];
   
        if (top >600) {
          node.style.position="fixed";
          node.style.top="-48px";
          node.style.zIndex="999";
          node.style.boxShadow="0 0 6px 0 #ddd"
        } else {
          node.style.position="relative";
          node.style.top="0px";
           node.style.boxShadow=""
        }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
  mounted: function() {
    window.addEventListener("scroll", this.load);
    let myurl=`http://localhost:8081/sort`;
				console.log(myurl);
				let that=this;
				this.$http({
					method: 'get',
					url:myurl,
					data: {
					}
    			}).then(function(res){
					console.log(res.data);
          that.mylist=res.data.result1;
          that.mylist.length=15;
          that.bannerlist=res.data.result2;
				}).catch(function(err){
					console.log(err);
				})
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.el-carousel {
  width: 1130px;
  margin: 0 auto;
}
.banner {
  margin-top: 20px;
}
img {
  width: 1130px;
  border-radius: 5px;
}
.middledisplay {
  width: 100%;
}
.middledisplaybox {
  width: 1160px;
  margin: 0 auto;
}

.middledisplaybox .imagebox {
  width: 210px;
  height: 168px;
  float: left;
  margin: 10px;
}

.middledisplaybox .imagebox img {
  width: 210px;
  height: 168px;
}

.middlenav {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  /* position:fixed;
		top:0; */
}

.middlenavbox {
  width: 450px;
  margin: 10px auto;
  height: 39px;
  margin-top: 50px;
}

.middlenavbox a {
  display: inline-block;
  width: 100px;
  margin: 0 10px;
  height: 48px;
  line-height: 48px;
  color: #484848;
  text-decoration: none;
  text-align: center;
}

.middlenavbox a:hover {
  border-bottom: 1px solid #409eff;
}
.page {
  width: 100%;
  background-color: #f4f4f4;
  padding-top: 10px;
}
.page .el-pagination.is-background .btn-next,
.page .el-pagination.is-background .btn-prev,
.page .el-pagination.is-background .el-pager li {
  background-color: #fff;
}
.footerimagebox {
  width: 100%;
  height: 100px;
  padding:20px 0;
  background-color:#f4f4f4;
}
.footerimage {
  width: 1130px;
  height: 100px;
  margin: 0 auto;
}
.footerimage img {
  width: 1130px;
  height: 100px;
  border-radius: 5px;
}
.guessFont {
  width:100%;
  height: 30px;
   text-align:left;
  color: #666;
  font-size: 14px;
  line-height: 30px;
  padding: 0 60px;
  background-color:#f4f4f4;
}
.guessbox {
  width: 100%;
  background-color: #f4f4f4;
  padding: 10px 0;
}
.guess {
  width: 1160px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.display {
  width: 210px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
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
  /* text-decoration: center; */
  padding: 0 10px;
}
.display .name {
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
  color: #bbb;
  font-size: 12px;
}
.display .article img {
  width: 20px;
  height: 20px;
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
  width: 28%;
}
.display .article span.name {
  color: #333;
}
</style>
