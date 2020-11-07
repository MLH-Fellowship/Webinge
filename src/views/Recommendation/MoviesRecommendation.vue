<template>
  <div class="container">
    <div class="row px-3">
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
        <div class="card movie-info-card">
          <div class="sub-heading text-center">
            Tell us about three movies you've watched
          </div>
          <div class="card-body mb-5">
            <MoviesRecommendationForm @submitFormData="onSubmit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { apiService } from "@/utils/api.service.js";
import MoviesRecommendationForm from "@/components/Recommendation/MoviesRecommendationForm.vue";

export default {
  name: "movies-recommendation",

  data() {
    return {
      error: null
    };
  },

  components: {
    MoviesRecommendationForm
  },

  methods: {
    async onSubmit(movies) {
      let recommendationsUrl = `api/movies/recommendations`;

      try {
        const data = await apiService(recommendationsUrl, "POST", movies);

        await this.$router.push({
          name: "recommended-movies",
          params: {
            recommendedMovies: data.recommendedMovies
          }
        });
        console.log(data);
      } catch {
        console.error("Something bad happened during the API call");
      }
    },

    close() {
      this.$router.back();
    }
  },

  mounted: function() {
    document.title = "Webinge | Movies Recommendations";
  }
};
</script>
