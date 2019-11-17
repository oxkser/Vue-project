<template>
  <div class="container">
    <el-backtop>up</el-backtop>
    <div class="main">
      <div class="title">上传作品</div>
      <div class="product-datail">
        <div class="msg">作品信息</div>
        <div class="content">
          <div class="product-name">
            <el-input v-model="productName" placeholder="请输入作品名字"></el-input>
            <span class="limit">50</span>
          </div>
          <div class="product-sort">
            <el-select v-model="value" placeholder="请选择作品的类型">
              <el-option
                v-for="item in options"
                :key="item.sort"
                :label="item.label"
                :value="item.sort"
              ></el-option>
            </el-select>
          </div>
          <div class="product-dec">
            <el-input v-model="productDes" placeholder="作品说明"></el-input>
            <span class="limit">2000</span>
          </div>
        </div>
      </div>
      <div class="product-img">
        <div class="msg">
          <div class="hint1">上传图片</div>
          <div class="hint2">注：不要在图片上放置设计师商业推广信息（除案例信息外），不超过100张，支持批量上传。</div>
        </div>
        <div class="uploder">
          <el-upload
            class="upload-demo"
            action="http://localhost:8081/uploadproductimg"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleProductImgSuccess"
            list-type="picture"
          >
            <el-button class="img-btn" size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件。</div>
          </el-upload>
        </div>
      </div>
      <div class="product-cover">
        <div class="msg">上传封面</div>
        <div class="uploder-cover">
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8081/uploadcover"
            :on-success="handleCoverSuccess"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
          </el-upload>
        </div>
      </div>
      <div class="uplode">
        <el-button
          @click="submitProduct(authorName,productName,productDes,value,coverUrlList,ProductImgUrlList)"
          class="submit"
          type="primary"
        >
          发布
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UploadProduct",
  data() {
    return {
      productName: "",
      authorName: "",
      productDes: "",
      options: [
        {
          sort: "1",
          label: "平面"
        },
        {
          sort: "2",
          label: "UI"
        },
        {
          sort: "3",
          label: "网页"
        },
        {
          sort: "4",
          label: "插画"
        },
        {
          sort: "5",
          label: "动漫"
        },
        {
          sort: "6",
          label: "摄影"
        },
        {
          sort: "7",
          label: "空间"
        },
        {
          sort: "8",
          label: "工业/产品"
        },
        {
          sort: "9",
          label: "三维"
        },
        {
          sort: "10",
          label: "影视"
        },
        {
          sort: "11",
          label: "手工艺"
        },
        {
          sort: "12",
          label: "纯艺术"
        },
        {
          sort: "13",
          label: "服装"
        },
        {
          sort: "14",
          label: "其他"
        }
      ],
      value: "",
      ProductImgUrlList: [],
      coverUrlList: [],
      newProductId: null
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //作品图片上传到服务器成功的钩子函数，每次上传成功将图片的新地址返回以对象数组的形式push到ProductImgUrlList数组中
    handleProductImgSuccess(response, file, fileList) {
      this.ProductImgUrlList.push(response);
      console.log(this.ProductImgUrlList);
    },
    //作品封面上传成功的钩子函数，上传成功将封面图片的新地址以对象数组的形式push到coverUrlList数组中
    handleCoverSuccess(response, file, fileList) {
      this.coverUrlList.push(response);
      console.log(this.coverUrlList);
    },
    //提交作品
    submitProduct(
      authorName,
      productName,
      productDes,
      sort,
      coverUrlList,
      ProductImgUrlList
    ) {
      //获得封面上传后的新地址
      let coverUrl = this.coverUrlList[0].cover_url;
      //vue中axios的post方法传参不能为对象，利用qs插件的stringify将其转化为用&链接的字符串
      let buffer = this.$qs.stringify({
        authorName: authorName,
        productName: productName,
        productDes: productDes,
        sort: sort,
        coverUrl: coverUrl
      });
      //向服务器发送请求，上传作品信息，返回上传作品的id
      this.$http
        .post("http://localhost:8081/addproduct", buffer, {
          headers: { "Content-type": "application/x-www-form-urlencoded" }
        })
        .then(response => {
          //将新作品的id返回
          this.newProductId = response.data.insertId;
          console.log(response.data.insertId);
          for (let i = 0; i < this.ProductImgUrlList.length; i++) {
            let buffer = this.$qs.stringify({
              newProductId: this.newProductId,
              src: this.ProductImgUrlList[i].productimg_url
            });
            this.$http
              .post("http://localhost:8081/addproductimg", buffer, {
                headers: { "Content-type": "application/x-www-form-urlencoded" }
              })
              .then(response => {
                console.log("作品图片插入成功" + response.data.insertId);
              })
              .catch(function(err) {
                console.log(err);
              });
          }
        })
        .catch(function(err) {
          console.error(err);
        });
      alert("作品添加成功");
    }
  },
  mounted: function() {
    let mydata = JSON.parse(this.$route.query.mydata);
    this.$store.commit("change");
    this.$store.commit("GetId", mydata);
    this.authorName=this.$store.state.myName;
  }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0%;
}
.container {
  background-color: #f4f4f4;
  width: 100%;
  height: auto;
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
.product-datail {
  width: 100%;
  height: 308px;
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
  text-align: left;
  width: 100%;
  height: 255px;
  box-sizing: border-box;
  padding: 30px;
  border-top: 1px solid #eeeeee;
}
.product-name {
  width: 636px;
  height: 42px;
  margin-bottom: 30px;
  position: relative;
}
.limit {
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 12px;
  color: #999;
}
.product-sort {
  margin-bottom: 30px;
}
.product-dec {
  width: 636px;
  height: 42px;
  margin-bottom: 30px;
  position: relative;
}
.product-img {
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 4px;
}
.hint1 {
  width: 56px;
  display: inline-block;
}
.hint2 {
  width: 600px;
  display: inline-block;
  color: #bbb;
  font-size: 12px;
  margin-left: 30px;
}
.uploder {
  text-align: left;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 30px;
  border-top: 1px solid #eeeeee;
}
.img-btn {
  width: 80px;
  height: 40px;
}
.product-cover {
  width: 100%;
  height: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 4px;
}
.uploder-cover {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 30px;
  border-top: 1px solid #eeeeee;
}
.uplode {
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
}
</style>