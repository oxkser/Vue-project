//引入模块
let Model = require("../Modle/Model");
class Services {
  constructor() {
    //创建对象
    this.model = new Model();
  }
  
  search(callback){
  
    this.model.search(function(data) {
      callback(data);
     
    });
  };
  sortSearch(sort,callback){

    this.model.sortSearch(sort,function(data) {
      callback(data);

    });
  };
  productIdSearch(productId,callback){
  
    this.model.productIdSearch(productId,function(data) {
      callback(data);
  
    });
  };
  authorIdSearch(authorId,callback){
  
    this.model.authorIdSearch(authorId,function(data) {
      callback(data);
  
    });
  };
  updataLike(productId,like,callback){
  
    this.model.updataLike(productId,like,function(data) {
      callback(data);
  
    });
  };
  updataFans(authorName,fans,callback){
  
    this.model.updataFans(authorName,fans,function(data) {
      callback(data);
  
    });
  };
  authorNameSearch(authorName,callback){

    this.model.authorNameSearch(authorName,function(data) {
      callback(data);

    });
  };
  authorNameSearchDetail(authorName,callback){

    this.model.authorNameSearchDetail(authorName,function(data) {
      callback(data);

    });
  };
  addProduct(authorName,productName,productDes,sort,coverUrl,callback){

    this.model.addProduct(authorName,productName,productDes,sort,coverUrl,function(data) {
      callback(data);

    });
  };
  addProductImg(newProductId,src,callback){

    this.model.addProductImg(newProductId,src,function(data) {
      callback(data);

    });
  };
  changeMyData(authorId,authorName,sex,hometown,address,profession,signature,intro,avatar,bgImg,qq,weixin,callback){

    this.model.changeMyData(authorId,authorName,sex,hometown,address,profession,signature,intro,avatar,bgImg,qq,weixin,function(data) {
      callback(data);

    });
  };
  selectMatch(callback){
  
    this.model.selectMatch(function(data) {
      callback(data);
    });
  };
  selectMatchImg(id,callback){
  
    this.model.selectMatchImg(id,function(data) {
      callback(data);
     
    });
  };
}

module.exports = Services;
