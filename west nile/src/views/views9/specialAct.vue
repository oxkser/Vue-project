<template>
   <div class="specialAct">
     <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in mylist" :key="item.id">
        <img :src="item.img_url">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="decbox">
      <p>{{myobj.special_dec}}</p>
  </div>
   </div>
</template>
<script>
export default {
    name:"SpecialAct",
    data(){
        return {
            mylist:[],
            myobj:{}
        }
    },
    mounted: function() {
    console.log(this.$route.query.work_id);
    let id = this.$route.query.work_id;
    let myurl = `http://localhost:8081/special?id=${id}`;
    console.log(myurl);
    let that = this;
    this.$http({
      method: "get",
      url: myurl
    })
      .then(function(res) {
        console.log(res.data);
        that.myobj = res.data.data9[0];
        that.mylist=res.data.data10;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
</script>>
<style scoped>
.specialAct{
    width:100%;
    background-color:#333;
}
.block img{
    /* width:1280px; */
    height:500px;
}
.decbox{
    margin:0 auto;
    width:1130px;
    padding:20px 0;
    background-color:rgba(200, 200, 200, 0.3);
    color:lightcyan;
    font-size:20px;
}
</style>>