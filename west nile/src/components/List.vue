<template>
  <div class="Listbox">
    <!-- 榜单头部内容 -->
    <div class="List">
      <div class="bil-hander-box">
        <img
          class="bil-hander-img"
          src="https://reviveimg.hellorf.com/www/images/03a4c9bce17ddddab4202e4be6393eca.jpg"
          alt
        />
      </div>
      <!-- 榜单内容 -->
      <div class="bil-content-box">
        <!-- 榜单左边内容盒子 -->
        <div class="bil-content-lfbox">
          <div class="current-bil-box">
            <p class="current-bil-name">
              当前榜单周期
              <strong class="current-num">136</strong>
            </p>
          </div>
          <div class="opue-box">
            <div class="opue-name">
              <p class="opue-bil-name">作品榜单</p>
            </div>
            <div class="opue-rou-box">
              <div class="opue-content name-p" v-for="item in opuelist" :key="item.id">{{item.name}}</div>
            </div>
            <div class="opue-name">
              <p class="opue-bil-name">文章榜单</p>
            </div>
            <div class="opue-rou-box">
              <div class="opue-content">
                <router-link class="opue-a" to="/numopues">
                  <p class="name-p">总榜</p>
                </router-link>
              </div>
            </div>
            <div class="opue-name">
              <p class="opue-bil-name opue-p">站酷榜单规则说明</p>
            </div>
            <div class="opue-rou-box">
              <div class="opue-rule-details">
                <p class="rule-name">
                  站酷会根据每周全站作品的数据情况，按照每项数据所占权重分别计算得分，采用百分制算法，对总得分数进行排名。
                  其中，使用的数据包括但不仅包括阅读、推荐、收藏、分享、站酷编辑的推荐级别。
                  <br />更新时间：每周二11:00。
                </p>
                <p class="opue-rule-name">特别声明</p>
                <p class="rule-name">
                  站酷秉承公正公开原则，坚决抵制刷榜行为，刷榜行为包括但不仅包括使用程序、号召团队或个人专为刷榜目的而产生的数据。一旦发现刷榜行为，
                  站酷将永久取消该作品上榜资格，涉及2次以上刷榜行为的设计师将永久取消上榜资格。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右边改变部分 -->
        <div class="deta-box">
          <!-- 榜单右边内容盒子顶部 -->
          <div class="bil-content-ribox">
            <div class="bil-riheder">
              <div class="bil-riheder-lf">
                <span>作品总榜</span>
                <span class="hender-time">每周二11:00更新</span>
              </div>
              <div class="bil-riheder-ri">
                <span>第136期</span>
                <span class="hender-time ri-time">2019-10-21~2019-10-27</span>
                <img class="Down" src="../assets/Down.png" alt />
              </div>
            </div>

            <ul class="product" v-for="(item,index) in ScoreSort" :key="item.id">
              <li class="product-content">
                <div class="rank">
                  <div class="ranknum">{{index+1}}</div>
                  <div class="score">分数</div>
                  <div class="num">{{item.score}}</div>
                </div>
                <div class="showpro">
                  <img class="showpro-img" :src="item.cover" @click="getDetail(item.productId,item.authorName)"/>
                </div>
                <div class="author">
                  <div class="title-box">
                    {{item.productName}}
                    <p class="career">{{item.fatherSort}}</p>
                  </div>
                  <div class="author-box">
                    <img class="author-img" :src="item.avatar" @click="toAuthor(item.authorId)" />
                    <br />
                    <span class="author-name">{{item.authorName}}</span>
                    <div class="author-time">{{item.time}}</div>
                  </div>
                </div>
                <div class="showdetails">
                  <span class="pick">查看详情</span>
                  <img class="pick-img" src="../assets/triangle-copy.png" alt />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "billboard",
  data() {
    return {
      list: [],
      opuelist: [
        {
          id: 1,
          name: "总榜",
          tar: "/numopues"
        },
        {
          id: 2,
          name: "平面",
          tar: "/planeopues"
        },
        {
          id: 3,
          name: "UI",
          tar: "/uiopues"
        },
        {
          id: 4,
          name: "网页",
          tar: "/webopues"
        },
        {
          id: 5,
          name: "插画",
          tar: "/paintopues"
        },
        {
          id: 6,
          name: "动漫 ",
          tar: "/comicopues"
        },
        {
          id: 7,
          name: "摄影",
          tar: "/phoopues"
        },
        {
          id: 8,
          name: "空间",
          tar: "/spaceopues"
        },
        {
          id: 9,
          name: "工业/产品",
          tar: "/productopues"
        },
        {
          id: 10,
          name: "三维",
          tar: "/threeopues"
        },
        {
          id: 11,
          name: "影视",
          tar: "/moviesopues"
        },
        {
          id: 12,
          name: "手工艺",
          tar: "/handopues"
        },
        {
          id: 13,
          name: "纯艺术",
          tar: "/pureartopues"
        },
        {
          id: 14,
          name: "服装",
          tar: "/clothingopues"
        }
      ]
    };
  },
  methods: {
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
    toAuthor(authorId) {
      let myData = JSON.stringify(this.$store.state.myData);
      const { href } = this.$router.resolve({
        name: "Author",
        query: {
          authorId,
          myData
        }
      });
      window.open(href, "_blank");
    }
    //   getSort:function(e){
    //     let ev=e||window.event;
    //     let target=ev.target||ev.srcElement;
    //     let sortname=target.innerText;
    //     console.log(sortname);
    // //發送請求
    //      this.$http
    //     .get("http://localhost:8081/Sort")
    //     .then(response => {
    //       console.log(response.data);
    //       this.list = response.data;
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    //     this.ScoreSort();
    //    this.list=this.FilterProduct(sortname);

    //   },
    // FilterProduct: function(sortname) {
    //   console.log(sortname);
    //   let that = this;
    //   let Filterlist = this.list.filter(function(obj) {
    //     for (let i = 0; i < that.list.length; i++) {
    //       if (that.list[i].fatherSort == sortname) {
    //         return obj.fatherSort == sortname;
    //       }
    //     }
    //   });
    //   return Filterlist;
    // },
    // ScoreSort: function() {
    //   let temp;
    //   for (let i = 0; i < this.list.length - 1; i++) {
    //     for (let j = i; j < this.list.length - 1; j++) {
    //       if (parseInt(this.list[i].score) < parseInt(this.list[j].score)){
    //         temp = this.list[i];
    //         this.list[i] = this.list[j];
    //         this.list[j] = temp;
    //       }
    //     }
    //   }
    //   return this.list;
    // }
  },
  mounted: function() {
    this.$http
      .get("http://localhost:8081/Sort")
      .then(response => {
        console.log(response.data);
        this.list = response.data.result1;
        console.log(this, list);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  computed: {
    ScoreSort: function() {
      let temp;
      for (let i = 0; i < this.list.length - 1; i++) {
        for (let j = i; j < this.list.length - 1; j++) {
          if (parseInt(this.list[i].score) < parseInt(this.list[j].score)) {
            temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
          }
        }
      }
      return this.list;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Listbox {
  width: 100%;
  background-color: #f4f4f4;
}
.List {
  width: 1130px;
  margin: 0 auto;
  color: #282828;
  text-align: left;
}
.box {
  width: 100%;
  text-align: center;
}

.bil-hander-box {
  width: 1130px;
  padding: 20px 0;
}

.bil-hander-img {
  width: 1130px;
  height: 100px;
}

.bil-content-box {
  width: 1130px;
  display: flex;
  justify-content: space-between;
}

/* 内容左边 */
.bil-content-lfbox {
  width: 210px;
}

.opue-rule-name {
  height: 55px;
  background-color: #fff;
  line-height: 55px;
}
.opue-bil-name,
.current-bil-name {
  height: 55px;
  background-color: #fff;
  line-height: 55px;
  padding-left: 30px;
}

.current-num {
  font-size: 20px;
  font-weight: 600;
  color: #282828;
  float: right;
  margin-right: 10px;
}

.opue-bil-name {
  margin-top: 15px;
}

.opue-a {
  text-decoration: none;
}

.name-p:hover {
  background-color: #409eff;
  color: #ecf0ff;
}

.opue-rou-box {
  text-align: left;
  margin: 4px 0;
}

.name-p {
  color: #000;
  font-size: 14px;
  line-height: 52px;
  text-align: left;
  padding-left: 30px;
  background-color: #fff;
}
.opue-rule-details {
  width: 148px;
  background: #fff;
  border-top: 1px solid #eeeeee;
  border-radius: 0 0 4px 4px;
  padding: 1px 30px;
  font-size: 12px;
}

.rule-name {
  line-height: 24px;
}

/* 内容右边 */
.bil-content-ribox {
  width: 898px;
}
.bil-riheder {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 56px;
  line-height: 56px;
  padding: 0 30px;
}
.bil-riheder-lf span {
  padding: 10px;
}
.bil-riheder-ri span {
  padding: 10px;
}
.hender-time {
  font-size: 12px;
  color: #bbbbbb;
}
.Down {
  width: 40px;
  height: 40px;
}
.ri-time,
.Down {
  vertical-align: middle;
}

/* 右边改变部分 */

ul,
.career {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

.product {
  background-color: #fff;
  height: 256px;
}

.product-content {
  margin-top: 10px;
  display: flex;
}

.showpro-img {
  width: 260px;
  height: 195px;
  padding-top: 25px;
}

.rank {
  width: 110px;
  height: 195px;
  padding-top: 48px;
  padding-left: 20px;
}

.rank .ranknum {
  width: 110px;
  font-size: 74px;
  text-align: center;
  padding-bottom: 10px;
}

.num {
  font-size: 21px;
  color: #444444;
  text-align: center;
  font-weight: 600;
  padding-top: 4px;
}

.author-time,
.score {
  font-size: 14px;
  color: #bbbbbb;
  text-align: center;
}

.author {
  height: 90px;
}

.career {
  font-size: 14px;
  color: #bbbbbb;
  text-align: left;
  margin: 5px 0 56px 0;
}

.title {
  text-decoration: none;
}

.title-box {
  padding-top: 25px;
  margin-left: 20px;
}

.author-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.author-box {
  text-align: left;
  margin-left: 20px;
}

.title,
.author-name {
  font-size: 14px;
  color: #282828;
}

.author-time {
  font-size: 12px;
  padding-top: 4px;
  text-align: left;
}

.pick-img,
.pick {
  font-size: 12px;
  vertical-align: middle;
}

.showdetails {
  /* height: 195px; */
  position: relative;
  top: 195px;
  left: 300px;
}
</style>
