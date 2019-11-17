let CompanyService=require("../Service/CompanyService");
let companyService=new CompanyService();
module.exports.select=function(req,res){
    let actID=req.query.actID;
    companyService.select(actID,function(ob){
        res.json(ob);
    });
}
module.exports.selectOnline=function(req,res){
    let onlineID=req.query.onlineID;
    companyService.selectOnline(onlineID,function(ob){
        res.json(ob);
    });
}
module.exports.selectDesign=function(req,res){
    let id=req.query.id;
    companyService.selectDesign(id,function(ob){
        res.json(ob);
    });
}
module.exports.selectSpecial=function(req,res){
    let id=req.query.id;
    companyService.selectSpecial(id,function(ob){
        res.json(ob);
    });
}
module.exports.selectAuthor=function(req,res){
    companyService.selectAuthor(function(ob){
        res.json(ob);
    });
}
module.exports.InsertUser=function(req,res){
    let name=req.query.name;
    let phone=req.query.phone;
    let passwd=req.query.passwd;
    console.log(req.query);
    companyService.InsertUser(name,phone,passwd,function(ob){
        res.json(ob);
    });
}
module.exports.LoginUser=function(req,res){
    let phone=req.query.phone;
    let passwd=req.query.passwd;
    console.log("--------"+phone,passwd);
    companyService.LoginUser(phone,passwd,function(ob){
        res.json(ob);
    });
}
module.exports.selectHome=function(req,res){
    let onlineID=req.query.onlineID;
    companyService.selectHome(onlineID,function(ob){
        res.json(ob);
    });
}
module.exports.selectAuthorProduct=function(req,res){
    let fans=req.query.fans;
    let authorName=req.query.authorName;
    companyService.selectAuthorProduct(fans,authorName,function(ob){
        res.json(ob);
    });
}
module.exports.selectAuthorWork=function(req,res){
    let authorName=req.query.authorName;
    companyService.selectAuthorWork(authorName,function(ob){
        res.json(ob);
    });
}

module.exports.selectGroup=function(req,res){
    let authorName=req.query.authorName;
    companyService.selectGroup(authorName,function(ob){
        res.json(ob);
    });
}

module.exports.selectSort=function(req,res){
    let sort=req.query.sort;
    companyService.selectSort(sort,function(ob){
        res.json(ob);
    });
}

module.exports.authorNameSearch=function(req,res){
    let myName=req.query.authorName;
    companyService.authorNameSearch(myName,function(ob){
        res.json(ob);
    });
}
// module.exports.FindSort=function(req,res){
//     let fatherSort=req.query.fatherSort;
//     companyService.FindSort(fatherSort,function(ob){
//         res.json(ob);
//     });
// }




     
   