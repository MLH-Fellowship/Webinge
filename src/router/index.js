import Vue from "vue";
import Router from "vue-router";

import Prediction from "@/views/Prediction/Prediction.vue";
import PredictionResults from "@/views/Prediction/PredictionResults.vue";

import MoviesRecommendation from "@/views/Recommendation/MoviesRecommendation.vue";
import RecommendedMovies from "@/views/Recommendation/RecommendedMovies.vue";

import SongsRecommendation from "@/views/Recommendation/SongsRecommendation.vue";
import RecommendedSongs from "@/views/Recommendation/RecommendedSongs.vue";

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
      path: "/movies-recommendation",
      name: "movies-recommendation",
      component: MoviesRecommendation,
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
    },

    {
      path: "/songs-recommendation",
      name: "songs-recommendation",
      component: SongsRecommendation,
      meta: {
        hideFooter: false,
        hideBrand: false
        // title: "prediction"
      }
    },
    {
      path: "/recommended-songs",
      name: "recommended-songs",
      component: RecommendedSongs,
      props: true,
      meta: {
        hideFooter: false,
        hideBrand: false
        // title: "prediction"
      }
    }
  ]
});
