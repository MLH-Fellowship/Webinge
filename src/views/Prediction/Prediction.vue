<template>
  <div class="container hero-text-second">
    <div class="row px-3 text-center mb-5" v-if="isLoading">
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
        <Loader />
      </div>
    </div>
    <div class="row px-3" v-else>
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
        <div class="card movie-info-card">
          <h3 class="sub-heading text-center">
            Tell us About Your Next Movie
          </h3>
          <div class="card-body mb-5">
            <PredictionForm @submitFormData="onSubmit" />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 text-center">
      <div class="col-md">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { apiService } from "@/utils/api.service.js";
import PredictionForm from "@/components/Prediction/PredictionForm.vue";
import Loader from "@/components/Utils/Loader.vue";

export default {
  name: "prediction",

  data() {
    return {
      error: null,
      isLoading: false
    };
  },

  components: {
    PredictionForm,
    Loader
  },

  methods: {
    async onSubmit(movieDetailsForm) {
      this.isLoading = true;
      let budgetUrl = `api/movies/revenue-prediction/`;
      let runtimeInMinutes = parseFloat(movieDetailsForm.runtime) * 60;

      let movieDetails = {
        budget: parseFloat(movieDetailsForm.budget),
        genre_id: parseInt(movieDetailsForm.genre_id),
        runtime: runtimeInMinutes
      };

      try {
        const data = await apiService(budgetUrl, "POST", movieDetails);

        this.isLoading = false;
        await this.$router.push({
          name: "prediction-result",
          params: {
            predictedRevenue: data.predictedRevenue,
            accuracy: data.accuracy,
            isGoodInvestment:
              movieDetails.budget < data.predictedRevenue ? true : false
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted: function() {
    document.title = "Webinge | Search";
  }
};
</script>
