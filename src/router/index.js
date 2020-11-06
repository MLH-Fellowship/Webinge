import Vue from "vue";
import Router from "vue-router";

import Prediction from "@/views/Prediction/Prediction.vue";
import PredictionResults from "@/views/Prediction/PredictionResults.vue";

import Recommendation from "@/views/Recommendation/Recommendation.vue";
import RecommendedMovies from "@/views/Recommendation/RecommendedMovies.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "prediction",
      component: Prediction,
      children: [
        {
          path: "results",
          name: "prediction-result",
          component: PredictionResults,
          props: true
        }
      ],
      meta: {
        hideFooter: false,
        hideBrand: false
        // title: "prediction"
      }
    },

    {
      path: "/recommendation",
      name: "recommendation",
      component: Recommendation,
      meta: {
        hideFooter: false,
        hideBrand: false
        // title: "prediction"
      }
    },

    {
      path: "/recommended-movies",
      name: "recommended-movies",
      component: RecommendedMovies,
      props: true,
      meta: {
        hideFooter: false,
        hideBrand: false
        // title: "prediction"
      }
    }
  ]
});
