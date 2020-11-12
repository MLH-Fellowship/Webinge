<template>
  <div class="container-fluid">
    <div class="row  px-5 hero-text-second ">
      <div class="col-md-6 col-12">
        <h3 class="heading">
          Predict
        </h3>
        <h3 class="sub-heading mt-2">
          Predict The Revenue a Movie Will Generate
        </h3>
        <h3 class="text-muted mt-5">
          Webinge tells you if you are about to make a bad or good investment by
          predicting the revenue a potential movie will generate. Just provide
          us with some information and our AI algorithm will do the magic under
          the hood.
        </h3>
        <router-link to="prediction">
          <button class="btn mt-5 px-4 py-2 cta-btn" type="submit">
            <div class="text">
              Get Started
            </div>
          </button>
        </router-link>
      </div>

      <div class="col-md-6 col-12 text-left text-md-center">
        <img
          src="../../assets/svg/illustrations/projections.svg"
          class="illustration p-0 m-0"
        />
      </div>
    </div>

    <div class="row px-5 hero-text-second">
      <div class="col-md-6 col-12 text-left text-md-center">
        <img
          src="../../assets/svg/illustrations/search.svg"
          class="illustration p-0 m-0"
        />
      </div>

      <div class="col-md-6  col-12">
        <h3 class="heading">
          Recommend
        </h3>
        <h3 class="sub-heading mt-2">
          Discover Movies and Songs you Might Love
        </h3>
        <h3 class="text-muted mt-5">
          Don't know what movie to watch next? Or are you just trying to
          discover new songs?We got you! Webinge could also recommend movies and
          songs based on movies you've watched and songs you've listened to in
          the past.
        </h3>
        <button
          class="btn mt-5 px-4 py-2 cta-btn"
          type="submit"
          @click="showRecommendationsModal"
        >
          <div class="text">
            Get Started
          </div>
        </button>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-6 col-12">
        <modal 
            name="prediction-modal"
            :width="400"
            :height="350"
            :adaptive="true"
        >
          <div class="margin-top px-5 mx-5">
            <div>
              <router-link to="songs-recommendation">
                <button class="btn btn-block mt-5 mb-5" type="submit">
                  <div class="text">
                    Discover Songs
                  </div>
                </button>
              </router-link>
            </div>

            <div>
              <router-link to="movies-recommendation">
                <button class="btn btn-block mb-5 mt-5" type="submit">
                  <div class="text">
                    Discover Movies
                  </div>
                </button>
              </router-link>
            </div>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<style scoped>
.illustration {
  width: 450px;
  height: 450px;
  margin: 5px;
}

@media only screen and (max-width: 600px) {
	.illustration {
        width: 300px;
        height: 300px;
    }
}
</style>

<script>
export default {
  name: "home",

  methods: {
    show() {
      this.$modal.show("prediction-modal");
    },
    hide() {
      this.$modal.hide("prediction-modal");
    },
    showRecommendationsModal() {
      this.show();
    }
  },

  mounted: function() {
    document.title = "Webinge | Home";
  }
};
</script>
