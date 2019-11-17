<template>
  <div class="designActBox">
    <div class="designAct">
      <div class="imagebox1">
        <img :src="myobj.picture1_url" />
      </div>
      <div class="dec1">
        <p>{{myobj.picture1_dec}}</p>
      </div>
      <div class="imagebox2">
        <img :src="myobj.picture2_url" />
      </div>
      <div class="dec2">
        <p>{{myobj.picture2_dec}}</p>
      </div>
      <div class="imagebox3">
        <img :src="myobj.picture3_url" />
      </div>
      <div class="dec3">
        <p>{{myobj.picture3_dec}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DesignAct",
  data() {
    return {
      myobj: {}
    };
  },
  mounted: function() {
    console.log(this.$route.query.work_id);
    let id = this.$route.query.work_id;
    let myurl = `http://localhost:8081/design?id=${id}`;
    console.log(myurl);
    let that = this;
    this.$http({
      method: "get",
      url: myurl
    })
      .then(function(res) {
        console.log(res.data);
        that.myobj = res.data[0];
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>>
<style scoped>
.designActBox {
  width: 100%;
  background-color: #f7f7f7;
}
.designAct{
    position:relative;
}
.designActBox .designAct {
  width: 1260px;
  margin: 0 auto;
}
.designActBox .designAct img {
  width: 1260px;
}
.designAct .dec1,.dec2,.dec3{
    width:1130px;
    background-color:rgba(255, 255, 255, 0.5);
    /* padding:20px; */
    color:#282828;
    overflow: hidden;
    font-size:20px;
    position:absolute;
    top:300px;
    left:50%;
    margin-left:-565px;
    text-align:center;
}
.dec2{
    top:625px;
}
.dec3{
    top:1000px;
}
</style>