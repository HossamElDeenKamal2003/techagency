import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/aboutView/AboutView.vue"),
  },
  {
    path: "/service",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/servicesView/serviceView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/registeration/signUpView.vue"),
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/registeration/logIn.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
