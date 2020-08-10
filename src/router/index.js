import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/index";
import Dev from "../views/Login/dev"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dev"
  },
  {
    path: "/console",
    name: "Console",
    component: () =>
        import("../views/Layout/index.vue"),
    children: [
      {
        path: "/console",
        name: "Console",
        component: () => import("../views/Console/index.vue")
      }
    ]
  }
  ,
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dev",
    name: "Dev",
    component: Dev
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 箭头函数是懒加载
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
