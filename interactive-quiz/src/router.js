import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./views/HomePage.vue";
import QuizPage from "./views/QuizPage.vue";
import ResultPage from "./views/ResultPage.vue";

// Gestione rotte delle views
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: Homepage,
    },
    {
      path: "/quiz-page",
      name: "QuizPage",
      component: QuizPage,
    },
    {
      path: "/result-page",
      name: "ResultPage",
      component: ResultPage,
    },
  ],
});

export { router };
