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
        v-else
    >
      <div class="col-md-6 ml-md-auto mr-md-auto col-12 text-center">
        <div class="card movie-info-card">
          <h3 class="sub-heading">
            Tell us about one of your favourite songs
          </h3>
          <div class="card-body mb-5">
            <SongsRecommendationForm @submitSong="onSubmit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    
</style>

<script>
import { shazamApiService } from "@/utils/api.service.js";
import SongsRecommendationForm from "@/components/Recommendation/SongsRecommendationForm.vue";
import Loader from "@/components/Utils/Loader.vue";

export default {
  name: "songs-recommendation",

  data() {
    return {
      error: null,
      isLoading: false,
    };
  },

  components: {
    SongsRecommendationForm,
    Loader
  },

  methods: {
    async onSubmit(song) {
      this.isLoading=true;
      let searchUrl = `search`;
      let params = {
        term: song.title,
        locale: "en-US",
        offset: "0",
        limit: "5"
      };

      try {
        let data = await shazamApiService(searchUrl, params);
        let response = data.tracks.hits;

        for (let index = 0; index < response.length; index++) {
          const element = response[index].track;

          if (
            element.subtitle.toLowerCase().includes(song.author.toLowerCase())
          ) {
                searchUrl = `songs/list-recommendations`;
                params = { key: element.key, locale: "en-US" };
                data = await shazamApiService(searchUrl, params);

                this.isLoading=false;
                await this.$router.push({
                name: "recommended-songs",
                params: {
                    recommendedSongs: data.tracks
                }
                });

                console.log(data.tracks);
          }
        }
      } catch (err) {
            console.log(err);
      }
    },

    close() {
      this.$router.back();
    }
  },

  mounted: function() {
    document.title = "Webinge | Songs Recommendations";
  }
};
</script>
