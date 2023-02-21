import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import TestView from "../views/TestView.vue";
import { onlyUser, onlyGuess } from "../middleware/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "DefaultLayout",
        middleware: [onlyUser],
      },
    },
    {
      path: "/test",
      name: "test",
      component: TestView,
      meta: {
        layout: "DefaultLayout",
        middleware: [onlyUser],
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        layout: "AuthLayout",
        middleware: [onlyGuess],
      },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const middleware = to.meta.middleware;
  if (middleware && middleware.constructor === Array) {
    for (const handle of middleware) {
      if (handle.constructor !== Function) continue;
      const res = await handle(to, from);
      if (res !== true) return res;
    }
  }
});

export default router;
