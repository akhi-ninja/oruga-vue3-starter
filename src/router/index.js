import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
  path: "/:catchAll(.*)",
  component: NotFound,
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;