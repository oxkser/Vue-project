<template>
  <div class="container">
    <div class="main">
      <div class="null-images"></div>
      <div class="dec">TA没有创建任何收藏夹</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collect"
};
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.container {
  position: relative;
  top: 2px;
  width: 100%;
  height: 500px;
  background-image: url("https://img.zcool.cn/community/038e33259feb4b7a801216a4b02bd2a.jpg");
}
.main {
  position: absolute;
  top: 18px;
  left: 50%;
  margin-left:-565px;
  background-color: white;
  width: 1130px;
  height: 420px;
  border-radius: 10px;
}
.null-images{
  display: inline-block;
  background: url("https://static.zcool.cn/git_z/build/images/null-page-draw.png")
    no-repeat;
  width: 280px;
  height: 165px;
  background-size: 280px;
  vertical-align: middle;
  margin-top: 20px;
}
.dec{
    margin-top: 30px
}
</style>