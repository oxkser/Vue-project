<template>
  <div class="onlineActBox">
    <div class="onlineAct">
      <div class="imgbox">
        <img :src="myObj.online_img">
      </div>
      <div class="decbox">
        <div class="box1">
          <div>{{myObj.act_name}}</div>
          <div>分享至 ></div>
        </div>
        <div class="box2">
          <div class="littlebox1">
            <span>活动时间:</span>
            <span>{{myObj.act_date}}</span>
          </div>
          <div class="littlebox2">
            <span>活动类型:</span>
            <span>{{myObj.act_type}}</span>
          </div>
          <div class="littlebox3">
            <span>活动策划:</span>
            <span>{{myObj.act_scheme}}</span>
          </div>
        </div>
        <div class="box3">
          <p>{{myObj.act_dec}}</p>
        </div>
        <div class="box4">
          <div class="botton">
            <div class="button1">已结束</div>
            <div class="button2">推荐</div>
          </div>
          <div class="iconbox">
            <i class="iconfont icon-liulanliang">{{myObj.act_views}}</i>|
            <i class="iconfont icon-liuyan">{{myObj.act_num}}</i>|
            <i class="iconfont icon-zan1">{{myObj.dianzan}}</i>
          </div>
        </div>
      </div>
    </div>
   <div class="middlebox">
      <div class="banner">
      <img src="https://reviveimg.hellorf.com/www/images/393abe7d14f3f03cbb238e7c40bd069c.jpg">
    </div>
    <div class="displaybox">
      <div class="title1">
        <div class="titlebox1">活动作品</div>
        <div class="titlebox2">最新上传</div>
      </div>
      <div class="display1">
        <Display :list="myWorklist"></Display>
      </div>
      <div class="page">
			<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="90">
			</el-pagination>
		</div>
    </div>
   </div>
  </div>
</template>

<script>
import Display from "@/views/public/public"
	export default {
  name: "OnlineAct",
  components: {
			"Display": Display
    },
    data(){
      return {
        myObj:{},
        myWorklist:[]
      }
    },
  mounted: function() {
    console.log(this.$route.query.work_id);
    let onlineID=this.$route.query.work_id;
    let myurl=`http://localhost:8081/online?onlineID=${onlineID}`;
				console.log(myurl);
				let that=this;
				this.$http({
					method: 'get',
					url:myurl,
					data: {
					}
    			}).then(function(res){
					console.log(res.data);
          that.myObj=res.data.data6[0];
          that.myWorklist=res.data.data7;
				}).catch(function(err){
					console.log(err);
				})
		}
  }
</script>

<style scoped>
.page{
		width:100%;
		background-color:#F4F4F4 ;
		padding-top:10px;
	}
	.page .el-pagination.is-background .btn-next, .page .el-pagination.is-background .btn-prev, .page .el-pagination.is-background .el-pager li{
		background-color:#fff;
	}
.onlineActbox{
  width:100%;
}
.onlineAct{
  padding:20px 0;
  width:1130px;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.onlineAct .imgbox{
  width:440px;
  height:330px;
}
.onlineAct .decbox{
  width:670px;
  height:330px;
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.onlineAct .imgbox img{
  width:440px;
  height:330px;
}
.decbox .box1{
  width:670px;
  /* margin:10px 0; */
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.decbox .box1>div:first-child{
  /* padding:10px 0; */
  color:#333;
  font-size:24px;
}
.decbox .box1>div:last-child{
  color:#282828;
  font-size:14px;
}
.decbox .box2{
  padding:10px 0;
  width:670px;
  height:60px;
  line-height:22px;
  font-size:14px;
  color:#bbb;
  text-align:left;
}
.decbox .box2 div span:last-child{
  color:#444;
  margin-left:10px;
}
.decbox .box3{
  width:670px;
  line-height:25px;
  text-align:left;
  color:#666;
  font-size:14px;
}
.decbox .box4{
  width:670px;
  height:50px;
  margin-top:20px;
  color:#aaa;
  position:absolute;
  bottom:0;
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.box4>div:first-child{
  width:300px;
  height:50px;
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.box4>div>div{
  width:140px;
  height:48px;
  line-height:48px;
  text-align:center;
  border-radius: 5px;
}
.box4>div>div:first-child{
  color:#bbb;
  background-color:#eee;
}
.box4>div>div:last-child{
  border:1px solid #bbb;
}
.box4>div>i{
  padding:0 20px;
  color:#aaa;
  font-size:12px;
}
.middlebox{
  padding:0;
  margin:0;
  width:100%;
  background-color:#F4F4F4;
}
.banner{
  width:1130px;
  margin:0 auto;
  padding-top:20px;
  border-radius: 5px;
  overflow:hidden;
  }
  .banner img{
    width:1130px;
    height:100px;
  }
.display1{
  width:1130px;
  margin:0 auto;
  overflow:hidden;
}
.title1{
  width:1130px;
  margin:0 auto;
  height:30px;
  line-height:30px;
  font-size:14px;
  color:#444;
  display:flex;
  justify-content: space-between;
  align-items:center;
}
</style>
