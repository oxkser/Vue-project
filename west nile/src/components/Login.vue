<template>
  <div class="Loginbox">
    <div class="login">
        <div class="toptitle">
            <div class="title1">West Nile|通行证</div>
            <div class="title2">WEST NILE 尼罗河</div>
            <div class="title3">登录尼罗河，与820万+名设计创意人一起交流设计吧！</div>
        </div>
      <div class="middlelogin">
       <div class="topbox">
          <router-link to="/passwdlogin">密码登录</router-link>
          <router-link to="/messagelogin">注册账号</router-link>
       </div>
        <router-view></router-view>
        <div class="bottomlogin">
          <div class="box1">第三方账号登录</div>
          <div class="box2">
            <i class="iconfont icon-QQ"></i>
            <i class="iconfont icon-weibo1"></i>
            <i class="iconfont icon-weixin1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style scoped>
.login{
    width:100%;
    height:700px;;
    background-image: url(https://static.zcool.cn/v1.1.82/passport4.0/images/login-ground.jpg);
    background-size: 100% 700px;
    background-repeat: no-repeat;
    overflow: hidden;
}
.topbox{
  width:340px;
  height:46px;
  line-height:46px;
  border-bottom: 1px solid #eee;
  margin:15px auto;
  text-align:left;
}
.topbox a{
  display: inline-block;
  height:20px;
  line-height:20px;
  color:#999;
  font-size:16px;
  padding:12px 10px;
  text-decoration: none;
}
.topbox a:hover{
  border-bottom: 1px solid #282828;
  color:#282828;
}
.toptitle{
    width:100%;
    margin:0 auto;
}
.title1{
    padding:20px;
    text-align:left;
    color:#fff;
    font-size:24px;
    font-weight:bolder;
}
.title2{
    text-align:center;
    color:#fff;
    font-size:30px;
    font-weight:bold;
}
.title3{
    color:#fff;
    font-size:20px;
}
.middlelogin{
    width:400px;
    height:500px;
    border-radius:5px;
    background-color:#fff;
    margin:20px auto;
    overflow: hidden;
}
.bottomlogin{
  margin-top:20px;
}
.bottomlogin .box1{
  width:400px;
  height:20px;
  line-height:20px;
  font-size:14px;
  color:#999;
  margin-bottom: 10px;
}
.bottomlogin .box2 i{
  font-size:42px;
  padding:0 10px;
  color:#ddd;
}
.bottomlogin .box2 i.icon-weixin1:hover{
  color:#58bc46;
}
.bottomlogin .box2 i.icon-weibo1:hover{
  color:#e90e24;
}
.bottomlogin .box2 i.icon-QQ:hover{
  color:#3caae3;
}
</style>