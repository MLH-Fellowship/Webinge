<template>
  <div class="container hero-text-second">
    <div 
        class="row px-3 text-center mb-5"
        v-if="isLoading"
    >
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
         <Loader />
      </div>
    </div>
    <div 
        class="row px-3"
        v-else>
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
import Loader from "@/components/Utils/Loader.vue";

export default {
  name: "movies-recommendation",

  data() {
    return {
      error: null,
      isLoading: false,
    };
  },

  components: {
    MoviesRecommendationForm,
    Loader
  },

  methods: {
    async onSubmit(movies) {
      this.isLoading=true
      let recommendationsUrl = `api/movies/recommendations-v2`;

      try {
        const data = await apiService(recommendationsUrl, "POST", movies);

        this.isLoading=false
        await this.$router.push({
          name: "recommended-movies",
          params: {
            recommendedMovies: data.recommendedMovies
          }
        });
        console.log(data);
      } catch (error) {
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
