<template>
  <div class="Passwdbox">
    <div class="passwd">
      <div class="phonenumber">
        <input type="text" placeholder="手机号" id="phone" @blur="getNumber" @focus="ChangeBackground" />
      </div>
      <div class="passwd">
        <input
          type="password"
          placeholder="密码"
          id="passwd"
          @blur="getNumber"
          @focus="ChangeBackground"
        />
      </div>
      <div class="submit">
        <button @click="Login" id="login">登录</button>
      </div>
      <div class="bottombox">
        <div>
          <input type="checkbox" />
          <span>下次自动登录</span>
        </div>
        <div>
          <span>忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PasswdLogin",
  data() {
    return {
      userlist: [],
      phone: 0,
      passwd: 0
    };
  },
  methods: {
    ChangeBackground: function(e) {
      let ev = e || window.event;
      let target = ev.target || ev.srcElement;
      target.style.backgroundColor = "#fff";
    },
    getNumber: function(e) {
      let ev = e || window.event;
      let target = ev.target || ev.srcElement;
      target.style.backgroundColor = "#f4f4f4";
      let phone = document.getElementById("phone").value;
      let passwd = document.getElementById("passwd").value;
      let patrn = /^(\w){6,20}$/;
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        document.getElementsByClassName("phonenumber")[0].style.border =
          "1px solid red";
      }
      if (!patrn.exec(passwd)) {
        document.getElementById("passwd").style.border = "1px solid red";
        return false;
      }
      document.getElementsByClassName("phonenumber")[0].style.border = "none";
      document.getElementById("passwd").style.border = "none";
      let button = document.getElementById("login");
      button.style.backgroundColor = "#409eff";
      button.style.color = "#fff";
      this.phone = phone;
      this.passwd = passwd;
    },
    Login: function() {
      this.$http
        .get(
          `http://localhost:8081/loginUser?phone=${this.phone}&passwd=${this.passwd}`
        )
        .then(response => {
          console.log(response.data);
          alert("登录成功！");
          let mydata=response.data[0];
         this.$store.commit('change');
         this.$store.commit('GetId',mydata);
          this.$router.push({path:"/"});
        })
        .catch(function(err) {
          alert("账号或密码错误！");
          console.error(err);
        });
    }
  }
};
</script>
<style scoped>
.passwd {
  width: 330px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.passwd > div:nth-of-type(1),
.passwd > div:nth-of-type(2),
.passwd > div:nth-of-type(3) {
  width: 330px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.passwd > div:nth-of-type(1) > input,
.passwd > div:nth-of-type(2) > input {
  width: 328px;
  height: 39px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  border: 0;
  outline: none;
  text-shadow: none;
}
.submit button {
  width: 330px;
  height: 40px;
  background-color: #eee;
  border: 0;
  outline: none;
  color: #ccc;
}
.bottombox {
  width: 330px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottombox > div:nth-of-type(2) a span {
  color: #999;
  text-decoration: none;
}
.bottombox > div:nth-of-type(2) span {
  padding: 0 5px;
  display: inline-block;
  width: 70px;
  height: 20px;
}
.bottombox > div:nth-of-type(2) span:hover {
  color: #282828;
}
.bottombox > div:nth-of-type(2) {
  cursor: pointer;
}
</style>