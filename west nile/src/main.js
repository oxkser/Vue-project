import Vue from 'vue';
import App from './App.vue';
import ElementUI, { Avatar } from 'element-ui';
import router from "./router";
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/font_1480694_yc3btsyp3fq/iconfont.css";
import "@/assets/font/iconfont.css"
import axios from 'axios';
import Vuex from 'vuex';
import qs from 'qs';
import autoAvatar from "@/assets/touxiang.png"

Vue.prototype.$http= axios;
Vue.prototype.$qs=qs;

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false

const store =new Vuex.Store({
  state:{
    flag:false,
    myId:0,
    myAvatar:autoAvatar,
    myName:"",
    myData:{}//修改过
  },
  mutations:{
    change(state){
      state.flag=true;
    },
    GetId(state,myData){
      state.myData=myData;
      state.myId=myData.authorId;
      state.myAvatar=myData.avatar;
      state.myName=myData.authorName;
    }
  }
});

new Vue({
  store,
	router,
  render: h => h(App),
}).$mount('#app')
