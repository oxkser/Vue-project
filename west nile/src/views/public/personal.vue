<template>
  <div class="personal-box">
    <div class="personal-content" v-for="(item1,index) in authorlist" :key="item1.authorId">
      <!-- 左边内容 -->
      <div class="personal-content-lfbox">
        <img class="per-img" :src="item1.avatar" @click="toAuthor(item1.authorId)" />
        <div class="per-int-box">
          <div class="per-name-box">
            <span class="per-name">{{item1.authorName}}</span>
            <img class="per-ico" src="https://static.zcool.cn/z/images/svg/honor_gogoup.svg" />
            <img
              class="per-ico"
              src="https://static.zcool.cn/z/images/svg/honor_tuijian_designer.svg"
            />
          </div>
          <div class="position-info">{{item1.hometown}} | {{item1.profession}}</div>
          <div class="work">
            <span class="pre-mood">创作</span>
            <span class="create-num">{{item1.account}} |</span>
            <span class="fant">粉丝</span>
            <span class="fant-name">{{item1.fans}}</span>
            <br />
            <span class="pre-work">{{item1.signature}}</span>
          </div>
          <button class="per-follow" @click="Addfollow(item1.authorName,item1.fans,index)">关注</button>
        </div>
      </div>
      <!-- 右边内容 -->
      <div class="personal-content-ribox">
        <img class="per-opus-img" @click="getDetail(item2.productId,item2.authorName)" v-for="item2 in FilterProduct(item1.authorName)" :key="item2.productId" :src="item2.cover"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  props: {
    authorlist: Array,
    productList: Array
  },
  data() {
    return {
      flag: false,
      list:[]
    };
  },
  methods: {
    getDetail(productId,authorName) {
        const { href }=this.$router.resolve({
          name:"Product",
          query:{
            id:productId,
            authorName:authorName
          }
        });
        window.open(href,"_blank")
      },
    toAuthor: function(authorId) {
      const { href } = this.$router.resolve({
        name: "Author",
        query: {
          authorId: authorId
        }
      });
      window.open(href, "_blank");
    },
    Addfollow: function(authorName, fans, index) {
      this.flag = this.$store.state.flag;
      if (this.flag) {
        fans++;
        let buttons = document.getElementsByClassName("per-follow");
        buttons[index].style.backgroundColor = "#f3f3f3";
        buttons[index].innerText = "已关注";
        console.log(authorName);
        this.$http
          .get(
            "http://localhost:8081/Product?fans=" +
              fans +
              "&authorName=" +
              authorName
          )
          .then(response => {
            console.log(response.data);
            this.authorlist =response.data;

          })
          .catch(function(err) {
            console.error(err);
          });
      } else {
        this.$router.push({ path: "/login" });
        return false;
      }
    },
    FilterProduct: function(authorName) {
      console.log(this.productList);
      let that = this;
      let Filterlist = this.productList.filter(function(obj) {
        for (let i = 0; i < that.productList.length; i++) {
          if (that.productList[i].authorName == authorName) {
            return obj.authorName == authorName;
          }
        }
      });
      console.log(Filterlist);
      let newarr=[];
      if(Filterlist.length>3){
        for(let i=0;i<3;i++){
          newarr[i]=Filterlist[i];
        }
        return newarr;
      }
      return Filterlist;
    }
  },
  mounted: function() {
  }
};
</script>

<style scoped>
.personal-box {
  width: 1130px;
  margin: 20px auto;
  text-align: left;
}

.personal-content {
  width: 1130px;
  height: 211px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 2px auto;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  overflow:hidden;
}
.per-img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.personal-content-lfbox {
  display: flex;
}
.personal-content-ribox{
  width:57%;
  text-align: left;
  display:flex;
  flex-wrap: nowrap;
  margin-left:55px;
}
.per-int-box {
  margin-left: 20px;
}

.per-ico {
  width: 16px;
  height: 16px;
}

.per-follow {
  width: 100px;
  height: 36px;
  border-radius: 5px;
  padding: 0;
  font-size: 14px;
  background: #ffe300;
  border-color: #ffe300;
  color: #444;
  border: none;
  margin-top: 20px;
}

.position-info,
.pre-work {
  font-size: 12px;
  color: #bbb;
}

.pre-mood,
.fant {
  color: #666;
  font-size: 13px;
}

.per-name,
.create-num,
.fant-name {
  color: #333;
  font-weight: 600;
}

.work {
  margin-top: 12px;
}

.per-opus-img {
  width: 200px;
  height: 150px;
  padding: 0 5px;
}
</style>
