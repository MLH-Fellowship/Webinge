import Vue from "vue";
import Router from "vue-router";
import Prediction from "@/views/Prediction/Prediction.vue";
import PredictionResults from "@/views/Prediction/PredictionResults.vue";

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
    }
  ]
});
