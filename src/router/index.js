import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/index";
import Dev from "../views/Login/dev"
import Layout from "../views/Layout/index"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dev",
    hidden: true,
    meta:{
      name:"主页"
    }
  },
  {
    path: "/console",
    name: "Console",
    redirect: "index",
    meta: {
      name: "控制台",
      icon:"console"
    },
    component: Layout,
    children: [
      {
        path: "/index",
        name: "Index",
        meta: {
          name: "首页"
        },
        component: () => import("../views/Console/index.vue")
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      name: "信息管理",
      icon: "info"
    },
    component: Layout,
    children: [
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta: {
          name: "信息列表"
        },
        component: () => import("../views/Info/index.vue")
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        meta: {
          name: "信息分类"
        },
        component: () => import("../views/Info/category.vue")
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta: {
      name: "用户管理",
      icon: "user"
    },
    component: Layout,
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        meta: {
          name: "用户列表"
        },
        component: () => import("../views/User/index.vue")
      }
    ]
  },
  {
    path: "/dev",
    name: "Dev",
    meta: {
      name: "登录"
    },
    hidden: true,
    component: Dev
  },
  {
    path: "/about",
    name: "About",
    meta: {
      name: "关于",
      icon: "about"
    },
    children: [
      {
        path: "/aboutIndex",
        name: "AboutIndex",
        meta: {
          name: "关于"
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // 箭头函数是懒加载
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
