let mysql=require('mysql');//调用mysql模块
class SqlBase{
    constructor(){
        this.connection=mysql.createConnection({
            host: "localhost", //主机 ip
            user: "root", //MySQL认证用户名
            password: "root", //MySQL认证用户密码
            port: "3306", //端口号
            database: "west nile" //数据库里面的数据
        });
        this.connection.connect();
    }
}
module.exports = SqlBase;