let CompanyModel = require('../Modle/CompanyModel');
class CompanyService {
    constructor() { };
    select(actID, callback) {
        let companyModel = new CompanyModel();
        companyModel.selectActid(actID, function (data1) {
            console.log(actID, data1);
            if (data1.length != 0) {
                if (data1[0].act_id == 1) {
                    companyModel.selectDesign(function (data2) {
                        if (data2.length != 0) {
                            callback(data2);
                        }else{
                            console.log("Design有误！");
                        }
                    })
                }
                else if (data1[0].act_id == 2) {
                    companyModel.selectSpecial(function (data3) {
                        if (data3.length != 0) {
                            callback(data3);
                        }else{
                            console.log("Special有误！");
                        }
                    })
                }
                else if (data1[0].act_id == 3) {
                    companyModel.selectOnline(function (data4) {
                        if (data4.length != 0) {
                            callback(data4);
                        }else{
                            console.log("Online有误！");
                        }
                    })
                }
                else if (data1[0].act_id == 4) {
                    companyModel.selectUnderline(function (data5) {
                        if (data5.length != 0) {
                            callback(data5);
                        }else{
                            console.log("Underline有误！");
                        }
                    })
                }
            }
            else {
                console.log("--查询有误！");
            }
        });
    }
    selectOnline(id, callback) {
        let companyModel = new CompanyModel();
        companyModel.selectOnlineAct(id, function (data6) {
            if (data6.length != 0) {
                let onlineID = data6[0].id;
                console.log(data6);
                companyModel.selectOnlineWork(onlineID, function (data7) {
                    if (data7.length != 0) {
                        callback({ data6, data7 });
                    }
                })

            } else {
                console.log("第二次查询有误！");
            }
        })
    }
    selectDesign(id, callback) {
        let companyModel = new CompanyModel();
        companyModel.selectDesignAct(id, function (data8) {
            if (data8.length != 0) {
                callback(data8);
            }
        })
    }
    selectSpecial(id, callback) {
        let companyModel = new CompanyModel();
        companyModel.selectSpecialAct(id, function (data9) {
            if (data9.length != 0) {
                console.log(data9);
                let img_id = data9[0].special_id;
                companyModel.selectSpecial_img(img_id, function (data10) {
                    if (data10.length != 0) {
                        callback({ data9, data10 });
                    }
                });
            }
        })
    }
    selectAuthor(callback) {
        let companyModel = new CompanyModel();
        companyModel.selectAuthor(function (data11) {
            if (data11.length != 0) {
                callback(data11);
            }
        })
    }
    InsertUser(name,phone,passwd,callback) {
        let companyModel = new CompanyModel();
        companyModel.InsertUser(name,phone,passwd,function (data12) {
            if (data12.length != 0) {
                callback(data12);
            }
        })
    }
    LoginUser(phone,passwd,callback) {
        let companyModel = new CompanyModel();
        companyModel.LoginUser(phone,passwd,function (data13) {
            if (data13.length != 0) {
                callback(data13);
            }
            else{
                console.log(data13);
                console.log("Service出错");
            }
        })
    }
    selectHome(onlineID, callback) {
        let companyModel = new CompanyModel();
        companyModel.selectHome(onlineID, function (data14) {
            if (data14.length != 0) {
                callback(data14);
            }
        })
    }
    selectAuthorProduct(fans,authorName,callback){
        let companyModel = new CompanyModel();
        console.log(typeof(fans),typeof(authorName));
        companyModel.AddAuthorFollow(fans,authorName,function (data15) {
            if (data15.length != 0) {
                callback(data15);
            }
        })
    }
    selectAuthorWork(authorName,callback){
        let companyModel = new CompanyModel();
        console.log(typeof(authorName));
        companyModel.selectAuthorWork(authorName,function (data16) {
            if (data16.length != 0) {
                callback(data16);
            }
        })
    }
    selectSort(sort,callback){
        let companyModel = new CompanyModel();
        companyModel.selectSort(sort,function (data17) {
            if (data17.length != 0) {
                callback(data17);
            }
        })
    }
    
    authorNameSearch(myName,callback){
        let companyModel = new CompanyModel();
        companyModel.authorNameSearch(myName,function (data18) {
            if (data18.length != 0) {
                callback(data18);
            }
        })
    }
    // FindSort(fatherSort,callback){
    //     let companyModel = new CompanyModel();
    //     companyModel.FindSort(fatherSort,function (data19) {
    //         if (data19.length != 0) {
    //             callback(data19);
    //         }
    //     })
    // }
    
    
}
module.exports = CompanyService;