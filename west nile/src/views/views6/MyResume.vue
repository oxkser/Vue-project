<template>
  <div class="container">
    <div class="main">
      <div class="title">修改资料</div>
      <div class="base-info">
        <div class="msg">基本信息</div>
        <div class="content">
          <div class="td">
            <div class="min-title">账号：</div>
            <div class="account">{{account}}</div>
          </div>
          <div class="td">
            <div class="min-title">用户名：</div>
            <div class="size1">
              <el-input v-model="newAuthorName" :placeholder="authorName"></el-input>
            </div>
          </div>
          <div class="td">
            <div class="min-title">性别：</div>
            <div>
              <el-radio v-model="newSex" label="男">男</el-radio>
              <el-radio v-model="newSex" label="女">女</el-radio>
            </div>
          </div>
          <div class="td">
            <div class="min-title">家乡：</div>
            <div class="size1">
              <el-input v-model="newHometown" :placeholder="hometown"></el-input>
            </div>
          </div>
          <div class="td">
            <div class="min-title">现居：</div>
            <div class="size1">
              <el-input v-model="newAddress" :placeholder="address"></el-input>
            </div>
          </div>
          <div class="td">
            <div class="min-title">职业：</div>
            <div class="size1">
              <el-select v-model="newProfession" placeholder="请选择">
                <el-option
                  v-for="item in professions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="td">
            <div class="min-title">酷龄：</div>
            <div class="account">{{kuage}}</div>
          </div>
          <div class="td">
            <div class="min-title">签名：</div>
            <div class="size2">
              <el-input v-model="newSignature" :placeholder="signature"></el-input>
            </div>
          </div>
          <div class="td">
            <div class="min-title">简介：</div>
            <div class="size2">
              <el-input v-model="newIntro" :placeholder="intro"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="avatar-container">
        <div class="msg">修改头像</div>
        <div class="content">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8081/uploadavatar"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="avatarUrl" :src="avatarUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="avatar-container">
        <div class="msg">修改背景图片</div>
        <div class="content">
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8081/uploadbgimg"
            :on-success="handleBgimgSuccess"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件。</div>
          </el-upload>
        </div>
      </div>
      <div class="contact-container">
        <div class="msg">联系方式</div>
        <div class="content">
          <div class="td">
            <div class="min-title">QQ：</div>
            <div class="size1">
              <el-input v-model="newQQ" :placeholder="QQ"></el-input>
            </div>
          </div>
          <div class="td">
            <div class="min-title">微信：</div>
            <div class="size1">
              <el-input v-model="newWeixin" :placeholder="weixin"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="upload">
        <el-button @click="submitData()" class="submit" type="primary">
          确认修改
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalData",
  data() {
    return {
      author: {},
      authorId: null,
      account: "",
      authorName: "",
      hometown: "",
      address: "",
      kuage: "",
      signature: "",
      intro: "",
      QQ: "",
      weixin: "",
      professions: [
        {
          value: "平面设计师",
          label: "平面设计师"
        },
        {
          value: "插画师",
          label: "插画师"
        },
        {
          value: "三维设计师",
          label: "三维设计师"
        },
        {
          value: "网页设计师",
          label: "网页设计师"
        },
        {
          value: "UI设计师",
          label: "UI设计师"
        },
        {
          value: "动画师",
          label: "动画师"
        },
        {
          value: "产品设计师",
          label: "产品设计师"
        },
        {
          value: "室内设计师",
          label: "室内设计师"
        },
        {
          value: "摄影师",
          label: "摄影师"
        },
        {
          value: "学生",
          label: "学生"
        },

        {
          value: "设计爱好者",
          label: "设计爱好者"
        },
        {
          value: "UX设计师",
          label: "UX设计师"
        },
        {
          value: "新媒体设计师",
          label: "新媒体设计师"
        },
        {
          value: "概念设计师",
          label: "概念设计师"
        },
        {
          value: "特效设计师",
          label: "特效设计师"
        },
        {
          value: "建筑师",
          label: "建筑师"
        },
        {
          value: "服装设计师",
          label: "服装设计师"
        },
        {
          value: "手工艺人",
          label: "手工艺人"
        },
        {
          value: "艺术工作者",
          label: "艺术工作者"
        },
        {
          value: "教育工作者",
          label: "教育工作者"
        }
      ],
      newAuthorName: "",
      newSex: "",
      newHometown: "",
      newAddress: "",
      newProfession: "",
      newSignature: "",
      newIntro: "",
      avatarUrl: "",
      bgImgUrl:"",
      newQQ: "",
      newWeixin: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.avatarUrl = res.avatar_url;
      console.log(this.avatarUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleBgimgSuccess(response, file, fileList) {
      this.bgImgUrl=response.bgImg_url;
      console.log(this.bgImgUrl);
    },
    submitData() {
      let buffer = this.$qs.stringify({
        newAuthorId: this.authorId,
        authorName: this.newAuthorName,
        sex: this.newSex,
        hometown: this.newHometown,
        address: this.newAddress,
        profession: this.newProfession,
        signature: this.newSignature,
        intro: this.newIntro,
        avatar: this.avatarUrl,
        bgimg:this.bgImgUrl,
        qq: this.newQQ,
        weixin: this.newWeixin
      });
      console.log(buffer);
      this.$http
        .post("http://localhost:8081/changemydata", buffer, {
          headers: { "Content-type": "application/x-www-form-urlencoded" }
        })
        .then(response => {
          console.log("资料修改成功" + response.data[0]);
        })
        .catch(function(err) {
          console.error(err);
        });
        alert("资料修改成功");
    }
  },
  mounted: function() {
    console.log("已挂载资料修改界面");
   let authorId =this.$store.state.myId;
    console.log(authorId);
    //通过作者的id去查作者的相关资料
    this.$http
      .get("http://localhost:8081/authorIdSearch?authorId=" + authorId)
      .then(response => {
        this.author = response.data;
        this.authorId = response.data[0].authorId;
        this.authorName = response.data[0].authorName;
        this.account = response.data[0].phone;
        this.hometown = response.data[0].hometown;
        this.address = response.data[0].address;
        this.kuage = response.data[0].kuage;
        this.signature = response.data[0].signature;
        this.intro = response.data[0].intro;
        this.QQ = response.data[0].QQ;
        this.weixin = response.data[0].weixin;
        console.log(this.author);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px dashed black;
  border-radius: 10px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border: 1px dashed black;
  border-radius: 50%;
}
.container {
  background-color: #f4f4f4;
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 20px 0px;
}
.main {
  width: 900px;
  height: auto;
  margin: 0 auto;
}
.title {
  width: 100%;
  height: 66px;
  border-radius: 4px;
  background-color: white;
  line-height: 66px;
  padding: 0 30px;
  text-align: left;
  box-sizing: border-box;
}
.base-info {
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 4px;
}
.msg {
  width: 100%;
  height: 53px;
  box-sizing: border-box;
  padding: 0 30px;
  font-size: 14px;
  line-height: 53px;
  text-align: left;
  border-radius: 4px;
}
.content {
    text-align:left;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 30px 40px;
  border-top: 1px solid #eeeeee;
}
.td {
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  margin: 10px 0;
}
.td > div {
  display: inline-block;
}
.min-title {
  width: 80px;
  height: 100%;
  text-align: right;
  line-height: 52px;
  font-size: 14px;
  color: #bbbbbb;
  padding-right: 30px;
}
.size1 {
  width: 200px;
  height: 100%;
}
.size2 {
  width: 600px;
  height: 100%;
}
.avatar-container {
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 4px;
}
.contact-container {
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 4px;
}
.upload {
  margin-top: 10px;
  width: 100%;
  height: 52px;
  text-align: center;
  line-height: 52px;
}
.submit {
  width: 100px;
  height: 40px;
}
.el-select-dropdown__item {
  padding-left: 20px;
  padding-right: inherit;
}
</style>