import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Header from "@/components/Header";
import Recommend from "@/views/views1/Recommend";
import Release from "@/views/views1/Release";
import Up from "@/views/views1/Up";
import Search from "@/components/Search";
import City from "@/components/City";
import CityCreate from "@/views/views2/CityCreate";
import CityHome from "@/views/views2/CityHome";
import CityLife from "@/views/views2/CityLife";
import CityDesigner from "@/views/views2/CityDesigner";
import Select from "@/views/views3/Select";
import Recent from "@/views/views3/Recent";
import Product from '@/views/public/Product';
import Author from '@/components/Author';
import AuthorDetail from '@/views/views4/AuthorDetail';
import AuthorProduct from '@/views/views4/AuthorProduct';
import AuthorRecomment from '@/views/views4/AuthorRecomment';
import AuthorCollect from '@/views/views4/AuthorCollect';
import AuthorLife from '@/views/views4/AuthorLife';
import Designer from '@/components/Designer';
import List from '@/components/List';
import Create from '@/views/views6/Create';
import Data from '@/views/views6/Data';
import Resume from '@/views/views6/MyResume';
import Login from "@/components/Login";
import MessageLogin from '@/views/views7/MessageLogin';
import PasswdLogin from '@/views/views7/PasswdLogin';
import Activity from "@/components/Activity";
import Design from "@/views/views8/Design";
import Online from "@/views/views8/Online";
import Underline from "@/views/views8/Underline";
import Special from "@/views/views8/Special";
import OnlineAct from "@/views/views9/onlineAct";
import UnderlineAct from "@/views/views9/underlineAct";
import SpecialAct from "@/views/views9/specialAct";
import DesignAct from "@/views/views9/designAct";
import Devise from "@/views/views10/Devise";
import Group from "@/views/views10/Group";
import MyCollect from "@/views/views11/MyCollect";
import MyDetail from "@/views/views11/MyDetail";
import MyLife from "@/views/views11/MyLife";
import MyProduct from "@/views/views11/MyProduct";
import MyRecomment from "@/views/views11/MyRecomment";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "Header",
            component: Header,
            redirect: "/home",
            children: [
                {
                    path: '/home',
                    name: "Home",
                    component: Home,
                    redirect: "/recommend",
                    children: [
                        {
                            path: '/recommend',
                            name: "Recommend",
                            component: Recommend,
                        },
                        {
                            path: '/release',
                            name: "Release",
                            component: Release,
                        },
                        {
                            path: '/up',
                            name: "Up",
                            component: Up,
                        }
                    ]
                },
                {
                    path: '/search',
                    name: "Search",
                    component: Search
                },
                {
                    path: '/product',
                    name: "Product",
                    component: Product
                },
                {
                    path: '/city',
                    name: "City",
                    component: City,
                    redirect: "/cityhome",
                    children: [
                        {
                            path: '/citycreate',
                            name: "CityCreate",
                            component: CityCreate
                        },
                        {
                            path: '/cityhome',
                            name: "CityHome",
                            component: CityHome,
                            redirect: "/select",
                            children: [
                                {
                                    path: '/select',
                                    name: "Select",
                                    component: Select,
                                },
                                {
                                    path: '/recent',
                                    name: "Recent",
                                    component: Recent,
                                }
                            ]
                        },
                        {
                            path: '/citylife',
                            name: "CityLife",
                            component: CityLife
                        },
                        {
                            path: '/citydesigner',
                            name: "CityDesigner",
                            component: CityDesigner
                        }
                    ]
                },
                {
                    path: '/author',
                    name: "Author",
                    component: Author,
                    redirect: '/authorRecomment',
                    children: [
                        {
                            path: '/authorDetail',
                            name: "AuthorDetail",
                            component: AuthorDetail,
                        },
                        {
                            path: '/authorProduct',
                            name: "AuthorProduct",
                            component: AuthorProduct,
                        },
                        {
                            path: '/authorRecomment',
                            name: "AuthorRecomment",
                            component: AuthorRecomment,
                        },
                        {
                            path: '/authorCollect',
                            name: "AuthorCollect",
                            component: AuthorCollect,
                        },
                        {
                            path: '/authorLife',
                            name: "AuthorLife",
                            component: AuthorLife,
                        }
                    ]
                },
                {
                    path: "/create",
                    name: "Create",
                    component: Create
                },
                {
                    path: "/data",
                    name: "Data",
                    component: Data,
                    redirect:"/myrecomment",
                    children: [
                        {
                            path: "/myrecomment",
                            name: "MyRecomment",
                            component: MyRecomment
                        },
                        {
                            path: "/myproduct",
                            name: "MyProduct",
                            component: MyProduct
                        },
                        {
                            path: "/mydetail",
                            name: "MyDetail",
                            component: MyDetail
                        },
                        {
                            path: "/mycollect",
                            name: "MyCollect",
                            component: MyCollect
                        },
                        {
                            path: "/mylife",
                            name: "MyLife",
                            component: MyLife
                        }
                    ]
                },
                {
                    path: "/resume",
                    name: "Resume",
                    component: Resume
                },
                {
                    path: "/list",
                    name: "List",
                    component: List
                },
                {
                    path: '/activity',
                    name: 'Activity',
                    component: Activity,
                    redirect: "/design",
                    children: [
                        {
                            path: '/design',
                            name: 'Design',
                            component: Design
                        },
                        {
                            path: '/online',
                            name: 'Online',
                            component: Online
                        },
                        {
                            path: '/underline',
                            name: 'Underline',
                            component: Underline
                        },
                        {
                            path: '/special',
                            name: 'Special',
                            component: Special
                        }

                    ]
                },
                {
                    path: '/onlineact',
                    name: 'OnlineAct',
                    component: OnlineAct
                },
                {
                    path: '/underlineact',
                    name: 'UnderlineAct',
                    component: UnderlineAct
                },
                {
                    path: '/specialact',
                    name: 'SpecialAct',
                    component: SpecialAct
                },
                {
                    path: '/designact',
                    name: 'DesignAct',
                    component: DesignAct
                },
                {
                    path: '/designer',
                    name: 'Designer',
                    component: Designer,
                    redirect: "/devise",
                    children: [
                        {
                            path: '/devise',
                            name: 'Devise',
                            component: Devise,
                        },
                        {
                            path: '/group',
                            name: 'Group',
                            component: Group,
                        }
                    ]
                }
            ]
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            redirect: "/PasswdLogin",
            children: [
                {
                    path: "/messagelogin",
                    name: "MessageLogin",
                    component: MessageLogin
                },
                {
                    path: "/passwdlogin",
                    name: "PasswdLogin",
                    component: PasswdLogin
                }
            ]
        }
    ]
})