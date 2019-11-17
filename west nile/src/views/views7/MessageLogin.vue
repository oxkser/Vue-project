<template>
  <div class="Registerbox">
    <div class="register">
      <div class="phonenumber1">
        <input type="text" placeholder="昵称" @blur="getNumber" @focus="ChangeBackground" id="name" />
      </div>
      <div class="passwd1">
        <input
          type="text"
          placeholder="手机号"
          @blur="getNumber"
          @focus="ChangeBackground"
          id="phone"
          class="phonenumber"
        />
      </div>
      <div class="passwd2">
        <input
          type="password"
          placeholder="密码"
          @blur="getNumber"
          @focus="ChangeBackground"
          id="passwd"
          class
        />
      </div>
      <div class="button1">
        <button @click="Register" id="register">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      phone: 0,
      passwd: 0,
      name: ""
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
      let name = document.getElementById("name").value;
      let patrn = /^(\w){6,20}$/;
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        document.getElementById("phone").style.border = "1px solid red";
      }
      if (!patrn.exec(passwd)) {
        document.getElementById("passwd").style.border = "1px solid red";
        return false;
      }
      document.getElementById("phone").style.border = "none";
      document.getElementById("passwd").style.border = "none";
      let button = document.getElementById("register");
      button.style.backgroundColor = "#409eff";
      button.style.color = "#fff";
      this.phone = phone;
      this.passwd = passwd;
      this.name=name;
    },
    Register: function() {
      this.$http
        .get(
          `http://localhost:8081/insertUser?phone=${this.phone}&passwd=${this.passwd}&name=${this.name}`
        )
        .then(response => {
          console.log(response.data);
          alert("注册成功！");
        })
        .catch(function(err) {
        alert("注册失败，请重试！");
          console.error(err);
        });
    }
  }
};
</script>
<style scoped>
.register {
  width: 330px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.register > div:nth-of-type(1),
.register > div:nth-of-type(2),
.register > div:nth-of-type(3) {
  width: 330px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.register > div:nth-of-type(1) > input,
.register > div:nth-of-type(2) > input,
.register > div:nth-of-type(3) > input {
  width: 328px;
  height: 39px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  border: 0;
  outline: none;
  text-shadow: none;
}
.register button {
  width: 330px;
  height: 40px;
  background-color: #eee;
  border: 0;
  outline: none;
  color: #ccc;
}
</style>