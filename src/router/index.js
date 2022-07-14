import Vue from "vue";
import VueRouter from "vue-router";
import Shift from "../views/Shift.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Shift",
    component: Shift,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
