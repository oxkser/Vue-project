let SqlBase = require("./SqlBase");
class Model extends SqlBase {
  constructor() {
    super();
  }
//直接查询所有产品信息
  search(callback) {
	let sql=`select * FROM product INNER JOIN user ON product.authorName=user.authorName `;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[search ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
    this.connection.end();
  };
  //通过类别查询相应类别的产品信息
  sortSearch(sort,callback) {
    // let sql = `select * from product where product.sort='${sort}'`;
	let sql=`select * FROM product INNER JOIN user ON product.authorName=user.authorName where product.sort='${sort}'`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[sortSearch ERROR] - ", err.message);
        return;
      }
      callback(result);
      console.log(result);
    });
    this.connection.end();
  };
  //通过产品id查询产品信息连接三个表，
  productIdSearch(productId,callback) {
  	let sql=`select * FROM product INNER JOIN user ON product.authorName=user.authorName INNER JOIN productimg ON product.productId=productimg.productId where product.productId='${productId}'`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[productIdSearch ERROR] - ", err.message);
        return;
      }
      callback(result);
      console.log(result);
    });
    this.connection.end();
  };
  //更新作品的点赞数
  updataLike(productId,like,callback) {
  	let sql=`UPDATE product SET product.like = '${like}' where product.productId ='${productId}'`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[updataLike ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
    this.connection.end();
  };
  //更新作者的粉丝数量
  updataFans(authorName,fans,callback) {
  	let sql=`UPDATE user SET user.fans = '${fans}' where user.authorName ='${authorName}'`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[updataFans ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
    this.connection.end();
  };
  //通过作者名字查询作品信息
  authorNameSearch(authorName,callback) {
     let sql = `select * from product INNER JOIN user ON product.authorName=user.authorName where product.authorName='${authorName}'`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[authorNameSearch ERROR] - ", err.message);
        return;
      }
      callback(result);
      console.log(result);
    });
    this.connection.end();
  };
  authorIdSearch(authorId,callback) {
    let sql = `select * from user where user.authorId='${authorId}'`;
   this.connection.query(sql, function(err, result) {
     if (err) {
       console.log("[authorIdSearch ERROR] - ", err.message);
       return;
     }
     callback(result);
     console.log(result);
   });
   this.connection.end();
 };

 authorNameSearchDetail(authorName,callback) {
  let sql = `select * from user where user.authorName='${authorName}'`;
 this.connection.query(sql, function(err, result) {
   if (err) {
     console.log("[authorNameSearchDetail ERROR] - ", err.message);
     return;
   }
   callback(result);
   console.log(result);
 });
 this.connection.end();
};
//添加新作品到product表
addProduct(authorName,productName,productDes,sort,coverUrl,callback) {
  let sql = `insert into product (authorName,productName,des,sort,cover) values('${authorName}','${productName}','${productDes}',${sort},'${coverUrl}')`;
 this.connection.query(sql, function(err, result) {
   if (err) {
     console.log("[insert ERROR] - ", err.message);
     return;
   }
   callback(result);
   console.log(result);
 });
 this.connection.end();
};
//将新作品的图片添加到productimg表
addProductImg(newProductId,src,callback) {
  let sql = `insert into productimg (src,productId) values('${src}',${newProductId})`;
 this.connection.query(sql, function(err, result) {
   if (err) {
     console.log("[insert ERROR] - ", err.message);
     return;
   }
   callback(result);
   console.log(result);
 });
 this.connection.end();
};
//修改个人信息
changeMyData(authorId,authorName,sex,hometown,address,profession,signature,intro,avatar,bgImg,qq,weixin,callback) {
  let sql=`UPDATE user SET user.authorName =?,user.sex =?,user.hometown=?,user.address=?,user.profession=?,user.signature=?,user.intro=?,user.avatar=?,user.bgImg=?,user.qq=?,user.weixin=? where user.authorId =?`;
  let sql_Params=[authorName,sex,hometown,address,profession,signature,intro,avatar,bgImg,qq,weixin,authorId];
  this.connection.query(sql,sql_Params, function(err, result) {
    if (err) {
      console.log("[search ERROR] - ", err.message);
      return;
    }
    callback(result);
  });
  this.connection.end();
};
//查询设计大赛里的所有作品
selectMatch(callback) {
  let sql = `select * from matchs`;
  this.connection.query(sql, function (err, result) {
    if (err) {
      console.log("[match ERROR] - ", err.message);
      return;
    }
    callback(result);
  });
  this.connection.end();
};
//查询设计大赛里作品的详情
selectMatchImg(id, callback) {
  let sql = `select * from matchimg where matchId=${id}`;
  this.connection.query(sql, function (err, result) {
    if (err) {
      console.log("[selectMatchImg ERROR] - ", err.message);
      return;
    }
    callback(result);
  });
  this.connection.end();
};
}

module.exports = Model;
