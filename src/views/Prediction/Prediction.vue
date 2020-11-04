<template>
  <div class="container">
    <div class="row px-3">
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
        <div class="card movie-info-card">
          <div class="sub-heading text-center">
            Tell us about your next movie
          </div>
          <div class="card-body mb-5">
            <PredictionForm @submitFormData="onSubmit" />
          </div>
        </div>
      </div>
    </div>
    <div class="row px-3">
      <div class="col-md">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card.movie-info-card {
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  padding: 30px 20px;
}

.card.movie-info-card .sub-heading {
  font-size: 26px;
}

.col-md {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import { apiService } from "@/utils/api.service.js";
import PredictionForm from "@/components/Prediction/PredictionForm.vue";

export default {
  name: "prediction",

  data() {
    return {
      error: null
    };
  },

  components: {
    PredictionForm
  },

  methods: {
    async onSubmit(movieDetailsForm) {
      let budgetUrl = `api/movies/revenue-prediction/`;

      let movieDetails = {
                        budget: parseFloat(movieDetailsForm.budget),
                        genre_id: 28,
                        runtime: parseFloat(movieDetailsForm.runtime)
                    }

      try {
        const data = await apiService(budgetUrl, "POST", movieDetails);

        await this.$router.push({
          name: "prediction-result"
        });

        console.log(data);
      } catch {
        console.error("Something bad happened during the API call");
      }
    }
  },

  mounted: function() {
    document.title = "Webinge | Search";
  }
};
</script>
