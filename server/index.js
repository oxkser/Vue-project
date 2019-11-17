let express=require('express');
let app=express();
//处理文件的模块
let fs = require("fs");
//引入body-parser模块
let bodyParser = require("body-parser");
//创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});
//引入文件上传的模块
let multer = require("multer");
//设置静态文件
app.use(express.static("public"));
let CompanyControl=require('./Control/CompanyControl');
let Controller=require("./Control/Controller");

//设置跨域访问
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
  });
app.get('/activity',CompanyControl.select);
app.get("/online",CompanyControl.selectOnline);
app.get("/home",CompanyControl.selectHome);
app.get("/design",CompanyControl.selectDesign);
app.get("/special",CompanyControl.selectSpecial);
app.get("/Author",CompanyControl.selectAuthor);
app.get("/Product",CompanyControl.selectAuthorProduct);
app.get("/Produce",CompanyControl.selectAuthorWork);
app.get("/insertUser",CompanyControl.InsertUser);
app.get("/loginUser",CompanyControl.LoginUser);
app.get("/Group",CompanyControl.selectGroup);
app.get("/Sort",CompanyControl.selectSort);
app.get("/authorName",CompanyControl.authorNameSearch);
// app.get("/findSort",CompanyControl.FindSort);




app.get("/search",Controller.search);
app.get("/sortSearch",Controller.sortSearch);
app.get("/productIdSearch",Controller.productIdSearch);
app.get("/updataLike",Controller.updataLike);
app.get("/updataFans",Controller.updataFans);
app.get("/authorNameSearch",Controller.authorNameSearch);
app.get("/authorIdSearch",Controller.authorIdSearch);
app.get("/authorNameSearchDetail",Controller.authorNameSearchDetail);

app.post("/addproduct", urlencodedParser, Controller.addProduct);
app.post("/addproductimg", urlencodedParser, Controller.addProductImg);
app.post("/changemydata", urlencodedParser, Controller.changeMyData);


app.get("/selectmatch",Controller.selectMatch);
app.get("/selectmatchimg",Controller.selectMatchImg);

//利用文件上传模块（multer）和文件处理模块（fs）处理产品图片上传
app.post(
  "/uploadproductimg",
  multer({
    dest: __dirname + "/public/upload/imgs/productimg/"
  }).array("file"),
  function(req, res) {
    var responseJson = {
      code: "1" // 上传的文件信息
    };
    //原始文件的地址
    var src_path = req.files[0].path;
    //重新设置图片的名字
    var fileName = new Date().getTime() + ".jpg";
    //设置图片的地址
    var des_path = req.files[0].destination + fileName;

    console.log(des_path);

    //修改文件名称，可更改文件的存放路径.oldPath 原路径;newPath 新路径
    fs.rename(src_path, des_path, function(err) {
      if (err) {
        throw err;
      }
      //获取文件信息,des_path 文件路径
      fs.stat(des_path, function(err, stat) {
        if (err) {
          throw err;
        }

        var path = "http://localhost:8081/upload/imgs/productimg/" + fileName;
        res.json({
          productimg_url: path
        });
      });
    });
  }
);
//利用文件上传模块（multer）和文件处理模块（fs）处理封面图片上传
app.post(
  "/uploadcover",
  multer({
    dest: __dirname + "/public/upload/imgs/cover/"
  }).array("file"),
  function(req, res) {
    var responseJson = {
      code: "1" // 上传的文件信息
    };
    //原始文件的地址
    var src_path = req.files[0].path;
    //重新设置图片的名字
    var fileName = new Date().getTime() + ".jpg";
    //设置图片的地址
    var des_path = req.files[0].destination + fileName;

    console.log(des_path);

    //修改文件名称，可更改文件的存放路径.oldPath 原路径;newPath 新路径
    fs.rename(src_path, des_path, function(err) {
      if (err) {
        throw err;
      }
      //获取文件信息,des_path 文件路径
      fs.stat(des_path, function(err, stat) {
        if (err) {
          throw err;
        }

        var path = "http://localhost:8081/upload/imgs/cover/" + fileName;
        res.json({
          cover_url: path
        });
      });
    });
  }
);
//利用文件上传模块（multer）和文件处理模块（fs）处理头像上传
app.post(
  "/uploadavatar",
  multer({
    dest: __dirname + "/public/upload/imgs/avatar/"
  }).array("file"),
  function(req, res) {
    var responseJson = {
      code: "1" // 上传的文件信息
    };
    //原始文件的地址
    var src_path = req.files[0].path;
    //重新设置图片的名字
    var fileName = new Date().getTime() + ".jpg";
    //设置图片的地址
    var des_path = req.files[0].destination + fileName;

    console.log(des_path);

    //修改文件名称，可更改文件的存放路径.oldPath 原路径;newPath 新路径
    fs.rename(src_path, des_path, function(err) {
      if (err) {
        throw err;
      }
      //获取文件信息,des_path 文件路径
      fs.stat(des_path, function(err, stat) {
        if (err) {
          throw err;
        }

        var path = "http://localhost:8081/upload/imgs/avatar/" + fileName;
        res.json({
          avatar_url: path
        });
      });
    });
  }
);
//利用文件上传模块（multer）和文件处理模块（fs）处理背景图片上传
app.post(
  "/uploadbgimg",
  multer({
    dest: __dirname + "/public/upload/imgs/bgimg/"
  }).array("file"),
  function(req, res) {
    var responseJson = {
      code: "1" // 上传的文件信息
    };
    //原始文件的地址
    var src_path = req.files[0].path;
    //重新设置图片的名字
    var fileName = new Date().getTime() + ".jpg";
    //设置图片的地址
    var des_path = req.files[0].destination + fileName;

    console.log(des_path);

    //修改文件名称，可更改文件的存放路径.oldPath 原路径;newPath 新路径
    fs.rename(src_path, des_path, function(err) {
      if (err) {
        throw err;
      }
      //获取文件信息,des_path 文件路径
      fs.stat(des_path, function(err, stat) {
        if (err) {
          throw err;
        }

        var path = "http://localhost:8081/upload/imgs/bgimg/" + fileName;
        res.json({
          bgImg_url: path
        });
      });
    });
  }
);

app.listen(8081,function(){
    console.log("监听8081端口");
})