<template>
  <div class="container">
    <el-backtop>up</el-backtop>
    <div class="nav-top">
      <img
        class="nav-top-img"
        src="https://reviveimg.hellorf.com/www/images/57d3b61dc84003508b72b52c57395bc3.jpg"
        alt
      />
    </div>
    <div class="classify">
      <ul class="classify-item">
        <!-- 点击全部，查询所有的作品信息，并渲染到页面 -->
        <li @click="search">全部</li>
        <!-- 点击对应类型，通过类别查询对应的作品信息，并渲染到页面 -->
        <li v-for="(item,sort) in sorts" :key="sort" @click="sortSearch(sort+1)">{{item}}</li>
      </ul>
      <ul class="middlenav">
        <li @click="Select">编辑精选</li>
        <li @click="NewRelase">最新发布</li>
        <li @click="Upfast">上升最快</li>
      </ul>
    </div>
    <productlist1 :product="product"></productlist1>
    <div class="nav-buttom1">
      <img
        class="nav-buttom-img"
        src="https://reviveimg.hellorf.com/www/images/39ad77bf656b4a3390a0315877e51424.jpg"
        alt
      />
    </div>
  </div>
</template>
<script>
import productlist1 from "@/views/public/productlist1";
export default {
  name: "Observe",
  components: {
    productlist1
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
      product: [],
      pagesize: 10,
      currentPage: 1
    };
  },
  methods: {
    Select:function(){
      this.$http
        .get("http://localhost:8081/search")
        .then(response => {
          this.product = response.data;
          console.log(this.product[0].productName);
        })
        .catch(function(err) {
          console.error(err);
        });
    },
    NewRelase:function(){
      this.$http
        .get("http://localhost:8081/search")
        .then(response => {
          this.product = response.data;
          this.product =this.Relase();
          console.log(this.product[0].productName);
        })
        .catch(function(err) {
          console.error(err);
        });
    },
    Upfast:function(){
       this.$http
        .get("http://localhost:8081/search")
        .then(response => {
          this.product = response.data;
          this.product =this.Up();
          console.log(this.product[0].productName);
        })
        .catch(function(err) {
          console.error(err);
        });
    },
    Relase:function(){
      let temp;
				for(let i=0;i<this.product.length-1;i++){
					for(let j=i;j<this.product.length-1;j++){
						if(parseInt(this.product[i].time)>parseInt(this.product[j].time)){
							temp=this.product[i];
							this.product[i]=this.product[j];
							this.product[j]=temp;
						}
					}
        }
        return this.product;
    },
    Up:function(){
      let temp;
				for(let i=0;i<this.product.length-1;i++){
					for(let j=i;j<this.product.length-1;j++){
						if(parseInt(this.product[i].popularity)>parseInt(this.product[j].popularity)){
							temp=this.product[i];
							this.product[i]=this.product[j];
							this.product[j]=temp;
						}
					}
        }
         return this.product;
    },
    //查询全部商品信息，并修改data里product的值
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
    },
    //通过类型编号查询对应类别的作品信息，并修改product的值
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
    }
  },
  mounted: function() {
    console.log("已挂载");
    this.$http
      .get("http://localhost:8081/search")
      .then(response => {
        this.product = response.data;
        console.log(response.data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}
li {
  list-style: none;
}

.nav-top {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.nav-top-img {
  width: 1130px;
  height: 100px;
  margin: 20px auto;
  border-radius: 4px;
}

.classify {
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding-bottom: 12px;
  background-color: #fff;
  font-size:14px;
}
.middlenav{
   width:300px
}
.classify-item{
 width:1130px;
}
.middlenav,.classify-item {
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middlenav>li,.classify-item > li {
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.middlenav>li:hover{
  border-bottom:2px solid #282828;
}
.nav-buttom1 {
  width: 100%;
  height: 140px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.nav-buttom-img {
  width: 1130px;
  height: 100px;
  margin: 20px auto;
  border-radius: 4px;
}
</style>
