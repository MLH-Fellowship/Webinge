import Vue from "vue";
import Router from "vue-router";

import Prediction from "@/views/Prediction/Prediction.vue";
import PredictionResults from "@/views/Prediction/PredictionResults.vue";

import MoviesRecommendation from "@/views/Recommendation/MoviesRecommendation.vue";
import RecommendedMovies from "@/views/Recommendation/RecommendedMovies.vue";

import SongsRecommendation from "@/views/Recommendation/SongsRecommendation.vue";
import RecommendedSongs from "@/views/Recommendation/RecommendedSongs.vue";

import Home from "@/views/Home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/prediction",
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
        hideBrand: true,
        title: "revenue prediction"
      }
    },

    {
      path: "/movies-recommendation",
      name: "movies-recommendation",
      component: MoviesRecommendation,
      meta: {
        hideBrand: true,
        title: "search movies"
      }
    },
    {
      path: "/recommended-movies",
      name: "recommended-movies",
      component: RecommendedMovies,
      props: true,
      meta: {
        hideBrand: true,
        title: "recommended movies"
      }
    },

    {
      path: "/songs-recommendation",
      name: "songs-recommendation",
      component: SongsRecommendation,
      meta: {
        hideBrand: true,
        title: "search songs"
      }
    },
    {
      path: "/recommended-songs",
      name: "recommended-songs",
      component: RecommendedSongs,
      props: true,
      meta: {
        hideBrand: true,
        title: "recommended songs"
      }
    }
  ]
});
