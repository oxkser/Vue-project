let sqlBase = require('./sqlBase');
class CompanyModel extends sqlBase {
  constructor() {
    super();
  }
  selectActid(actID, callback) {
    let sql = `select * from activity where act_id='${actID}'`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[activity ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectDesign(callback) {
    let sql = `select * from design`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[design ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectSpecial(callback) {
    let sql = `select * from special`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[Online ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectOnline(callback) {
    let sql = `select * from online`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[Online ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectUnderline(callback) {
    let sql = `select * from underline`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[Underline ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectOnlineAct(id, callback) {
    let sql = `select * from online where id=${id}`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[onlineID ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectOnlineWork(onlineID, callback) {
    let sql = `select * from act_online where online_id=${onlineID}`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[act_online ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectDesignAct(id, callback) {
    let sql = `select * from act_design where design_id=${id}`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[act_design ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectSpecialAct(id, callback) {
    let sql = `select * from act_special where special_id=${id}`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[act_special ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
  selectSpecial_img(img_id, callback) {
    let sql = `select * from special_img where img_id=${img_id}`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[special_img ERROR] - ", err.message);
        return;
      }
      callback(result);
    })
  }
  selectAuthorWork(authorName, callback) {
    let sql = `select * from product where authorName='${authorName}'`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[selectAuthorWork ERROR] - ", err.message);
        return;
      }
      callback(result);
    })
  }

  InsertUser(name, phone, passwd, callback) {
    let sql = `INSERT INTO user (authorName,phone,passwd,popularity,fans,attention,integral) VALUES ('${name}','${phone}','${passwd}',0,0,0,0)`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[InsertUser ERROR] - ", err.message);
        return;
      }
      callback(result);
    })
  }
  // selectHome(onlineID, callback) {
  //   let sql = `select * from act_online where online_id=${onlineID} `;
  //   this.connection.query(sql, function (err, result) {
  //     if (err) {
  //       console.log("[selectHome ERROR] - ", err.message);
  //       return;
  //     }
  //     callback(result);
  //   });
  // }
  AddAuthorFollow(fans, authorName, callback) {
    let sql2 = `UPDATE user SET fans='${fans}' WHERE authorName ='${authorName}' `;
    let _this = this;
    this.connection.query(sql2, function (err) {
      if (err) {
        console.log("[AddAuthorFollow ERROR] - ", err.message);
        return;
      }
      let sql = "select * from user";
      _this.connection.query(sql, function (err, result) {
        if (err) {
          console.log("[AddAuthorFollow ERROR] - ", err.message);
          return;
        }
        console.log("result--------------------------------" + JSON.stringify(result))
        callback(result);
      })
    })
  }

  selectAuthor(callback) {
    let sql1 = `select * from user `;
    let _this = this;
    this.connection.query(sql1, function (err, result1) {
      if (err) {
        console.log("[selectAuthor ERROR] - ", err.message);
        return;
      }
      let sql = "select * from user u, product p where u.authorName = p.authorName";
      _this.connection.query(sql, function (err, result2) {
        if (err) {
          console.log("[AddAuthorWork ERROR] - ", err.message);
          return;
        }
        callback({ result1, result2 });
      })
    })
  }

  LoginUser(phone, passwd, callback) {
    let sql = `select * from user where phone='${phone}' and passwd='${passwd}'`;
    this.connection.query(sql, function (err, result) {
      console.log("result----" + result)
      if (err) {
        console.log("[LoginUser ERROR] - ", err.message);
        return;
      }
      callback(result);
    })
  }

  selectSort(sort, callback) {
    let sql = `SELECT *
    FROM product AS p
    
    INNER JOIN sort AS s ON (p.sort = s.fatherSortid)
    
    INNER JOIN user AS u ON (u.authorName = p.authorName)`;
    let that=this;
    this.connection.query(sql, function (err, result1) {
      if (err) {
        console.log("[selectSort ERROR] - ", err.message);
        return;
      }

      let sql1=`select * from banner`;
      that.connection.query(sql1, function (err, result2){
        if (err) {
          console.log("[selectBanner ERROR] - ", err.message);
          return;
        }
        callback({result1,result2});
      });
     
    })
  }

  authorNameSearch(myName, callback) {
    let sql = `select * from user where authorName='${myName}'`;
    this.connection.query(sql, function (err, result) {
      if (err) {
        console.log("[authorNameSearch ERROR] - ", err.message);
        return;
      }
      callback(result);
    })
  }  

}
module.exports = CompanyModel;