let Services = require("../Service/Services");
//查询所有作品信息
module.exports.search = function(req, res) {
	let services = new Services();
	services.search( function(data) {
		res.json(data);

	});
};
//根据类别查询作品信息
module.exports.sortSearch = function(req, res) {

	let sort = req.query.sort;
	let services = new Services();
	services.sortSearch(sort, function(data) {
		res.json(data);

	});
};
//根据作品id查询作品信息
module.exports.productIdSearch = function(req, res) {
	console.log(req.query.productId)
	let productId = req.query.productId;
	let services = new Services();
	services.productIdSearch(productId, function(data) {
		res.json(data);

	});
};
//更新作品点赞信息
module.exports.updataLike = function(req, res) {
	let productId = req.query.productId;
	let like = req.query.like;
	let services = new Services();
	services.updataLike(productId,like, function(data) {
		res.json(data);
	});
};
//更新作者的粉丝数量
module.exports.updataFans = function(req, res) {
	let authorName = req.query.authorName;
	let fans = req.query.fans;
	let services = new Services();
	services.updataFans(authorName,fans, function(data) {
		res.json(data);
	});
};
//根据作者名字查询所有作品
module.exports.authorNameSearch = function(req, res) {
	let authorName=req.query.authorName;
	let services = new Services();
	services.authorNameSearch(authorName,function(data) {
		res.json(data);

	});
};
//根据作者的id查询作者的所有作品
module.exports.authorIdSearch = function(req, res) {
	let authorId=req.query.authorId;
	let services = new Services();
	services.authorIdSearch(authorId,function(data) {
		res.json(data);

	});
};
//通过作者的名字去查作者的相关信息
module.exports.authorNameSearchDetail = function(req, res) {
	let authorName=req.query.authorName;
	let services = new Services();
	services.authorNameSearchDetail(authorName,function(data) {
		res.json(data);

	});
};
//添加新作品到product表
module.exports.addProduct = function(req, res) {
	let authorName=req.body.authorName;
	let productName=req.body.productName;
	let productDes=req.body.productDes;
	let sort=req.body.sort;
	let coverUrl=req.body.coverUrl;
	let services = new Services();
	services.addProduct(authorName,productName,productDes,sort,coverUrl,function(data) {
		res.json(data);
	});
};
//添加产品图片到产品图片表
module.exports.addProductImg = function(req, res) {
	let newProductId=req.body.newProductId;
	let src=req.body.src;
	console.log(newProductId);
	let services = new Services();
	services.addProductImg(newProductId,src,function(data) {
		res.json(data);
	});
};
//更新当前作者的用户信息
module.exports.changeMyData = function(req, res) {
	let authorId=req.body.newAuthorId;
	let authorName=req.body.authorName;
	let sex=req.body.sex;
	let hometown=req.body.hometown;
	let address=req.body.address;
	let profession=req.body.profession;
	let signature=req.body.signature;
	let intro=req.body.intro;
	let avatar=req.body.avatar;
	let bgImg=req.body.bgimg;
	let qq=req.body.qq;
	let weixin=req.body.weixin;
	console.log(req.body);
	let services = new Services();
	services.changeMyData(authorId,authorName,sex,hometown,address,profession,signature,intro,avatar,bgImg,qq,weixin,function(data) {
		res.json(data);
	});
};
//查询所有设计大赛作品
module.exports.selectMatch = function(req, res) {
	let services = new Services();
	services.selectMatch( function(data) {
		res.json(data);

	});
};
//查询设计大赛里作品的详情,即图片
module.exports.selectMatchImg = function(req, res) {
	let id=req.query.id
	let services = new Services();
	services.selectMatchImg(id,function(data) {
		res.json(data);

	});
};
