<template>
  <div class="designerbox">
    <div class="topnavbox">
      <div class="topnav">
        <router-link to="/devise">设计师</router-link>
        <router-link to="/group">团体</router-link>
      </div>
    </div>
    <div class="bottomnavbox">
      <div class="bottomnav">
        <div class="leftbox">
          <div class="box1">筛选：</div>
          <div class="box2">
            <el-select v-model="value1" placeholder="不限职业" size="mini" class="myselect">
              <el-option
                v-for="item in option1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1"
              ></el-option>
            </el-select>
          </div>
          <div class="box3">
            <el-select v-model="value2" placeholder="不限城市" size="mini" class="myselect">
              <el-option
                v-for="item in option2"
                :key="item.value2"
                :label="item.label"
                :value="item.value2"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="rightbox">
          <div class="box1">排序：</div>
           <el-select v-model="value3" placeholder="作品最多" size="mini" class="myselect">
              <el-option
                v-for="item in option3"
                :key="item.value3"
                :label="item.label"
                :value="item.value3"
              ></el-option>
            </el-select>
        </div>
      </div>
    </div>
    <div class="designrouter">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "designer",
  data() {
    return {
       option1: [{
          value1: '插画师',
          label: '插画师'
        }, {
          value1: '摄影师',
          label: '摄影师'
        }, {
          value1: '动画师',
          label: '动画师'
        }, {
          value1: '平面设计师',
          label: '平面设计师'
        }],
         option2: [{
          value2: '成都',
          label: '成都'
        }, {
          value2: '北京',
          label: '北京'
        }, {
          value2: '上海',
          label: '上海'
        }, {
          value2: '香港',
          label: '香港'
        }],
         option3: [{
          value3: '粉丝最多',
          label: '粉丝最多'
        }, {
          value3: '作品最多',
          label: '作品最多'
        }, {
          value3: '人气最高',
          label: '人气最高'
        }],
        value1: '',
        value2:'',
        value3:''
    };
  },
  methods:{
    load() {
      console.log("-----------");
      var top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        console.log(top);
      var node = document.getElementsByClassName("topnavbox")[0];
   
        if (top >128) {
          node.style.position="fixed";
          node.style.top="0px";
          node.style.boxShadow="0 0 6px 0 #ddd"
        } else {
          node.style.position="relative";
          node.style.top="0px";
           node.style.boxShadow=""
        }
    }
  },
   mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.designrouter {
  background-color: #f4f4f4;
  height: 100%;
  width: 100%;
}
.designerbox {
  width: 100%;
  background-color: #f4f4f4;
}
.topnavbox,
.bottomnavbox {
  width: 100%;
  height: 55px;
  background-color: #fff;
}
.topnavbox {
  /* position: fixed;
  top: 117px;
  left: 0px; */
  /* box-shadow: 3px 3px 3px 3px #dddddd; */
  z-index:999;
  border-bottom: 2px solid #f4f4f4;
}
.topnav {
  width: 150px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topnav a {
  display: inline-block;
  padding: 20px 0;
  color: #999;
  font-size: 16px;
  text-decoration: none;
}
.topnav a:hover {
  color: #282828;
  border-bottom: 2px solid #282828;
}
.bottomnav {
  width: 1130px;
  height: 55px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottomnav div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottomnav div div {
  color: #444;
  font-size: 14px;
}
.leftbox{
  width:280px;
  height:55px;
}
.rightbox{
  width:200px;
}
.leftbox .box1,.rightbox .box1{
  margin-top:6px;
}
.bottomnav div div:first-of-type {
  color: #999;
}
.myselect .el-input__inner{
  border:none;
  outline:none;
}
.myselect .el-input{
width:100px;
height:20px;
}
.el-select-dropdown__item{
width:100px;
height:20px;
}
.myselect .el-input{
  width:110px;
  padding:7px 0;
}
</style>
