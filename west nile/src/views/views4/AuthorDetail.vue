<template>
   <div class="container">
    <div class="main">
      <div class="mian-1">
          <div class="title">基本信息</div>
          <table class="detail">
              <tr>
                  <th class="detail-title">用户名</th>
                  <th class="detail-content">{{ authorDetail[0].authorName}}</th>
              </tr>
              <tr>
                  <th class="detail-title">性别</th>
                  <th class="detail-content">{{authorDetail[0].sex}}</th>
              </tr>
              <tr>
                  <th class="detail-title">签名</th>
                  <th class="detail-content">{{authorDetail[0].signature}}</th>
              </tr>
              <tr>
                  <th class="detail-title">家乡</th>
                  <th class="detail-content">{{authorDetail[0].hometown}}</th>
              </tr>
              <tr>
                  <th class="detail-title">现居</th>
                  <th class="detail-content">{{authorDetail[0].address}}</th>
              </tr>
              <tr>
                  <th class="detail-title">职业</th>
                  <th class="detail-content">{{authorDetail[0].profession}}</th>
              </tr>
              <tr>
                  <th class="detail-title">酷龄</th>
                  <th class="detail-content">{{authorDetail[0].kuage}}</th>
              </tr>
              <tr>
                  <th class="detail-title">简介</th>
                  <th class="detail-content">{{authorDetail[0].intro}}</th>
              </tr>
          </table>
      </div>
      <div class="main-2">
          <div class="title">联系方式</div>
          <table class="detail">
              <tr>
                  <th class="detail-title">qq</th>
                  <th class="detail-content">{{authorDetail[0].qq}}</th>
              </tr>
              <tr>
                  <th class="detail-title">微信</th>
                  <th class="detail-content">{{authorDetail[0].weixin}}</th>
              </tr>
          </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"AuthorDetail",
    data(){
        return{
            authorDetail:[{
                authorName:"",
            }],
        }
    },
    mounted:function() {
        let authorName=this.$route.query.authorname;
        console.log(authorName);
        this.$http.get("http://localhost:8081/authorNameSearchDetail?authorName="+authorName)
        .then((response) => {
          this.authorDetail = response.data;
          console.log(response.data);
        })
        .catch(function(err) {
          console.error(err);
        })

    }
}
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
}
.container {
  position: relative;
  top: 2px;
  width: 100%;
  height: 700px;
  background-image: url("https://img.zcool.cn/community/038e33259feb4b7a801216a4b02bd2a.jpg");
}
.main {
  position: absolute;
  top: 18px;
  left: 50%;
  margin-left:-450px;
  background-color: white;
  width: 900px;
  height: 520px;
  border-radius: 10px;
}
.mian-1{
    width: 100%;
    height: 308px;
    padding: 30px 0;
    text-align:left;
    border-bottom: 1px solid #eeeeee;
}
.title{
    width: 100%;
    height: 28px;
    padding: 0 30px;
    color: #444444;
}
.detail{
    width: 100%;
    line-height: 1;
    font-size: 14px;
}
tr{
    width: 100%;
    height: 34px;
}
.detail-title{
    width: 84px;
    text-align: right;
    padding: 10px 0;
    padding-right: 30px;
    color: #bbbbbb;
    font-weight: normal;
    vertical-align: top;
}
.detail-content{
    padding: 10px 0;
    color: #666666;
    vertical-align: top;
    text-align: left;
}
.main-2{
    width: 100%;
    height: 92px;
    padding: 30px 0;
    text-align:left;
}

</style>