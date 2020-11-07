<template>
  <div class="container">
    <div class="row px-3">
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
        <div class="card movie-info-card">
          <div class="sub-heading text-center">
            Tell us about one of your favourite songs
          </div>
          <div class="card-body mb-5">
            <SongsRecommendationForm @submitSong="onSubmit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { shazamApiService } from "@/utils/api.service.js";
import SongsRecommendationForm from "@/components/Recommendation/SongsRecommendationForm.vue";

export default {
  name: "songs-recommendation",

  data() {
    return {
      error: null
    };
  },

  components: {
    SongsRecommendationForm
  },

  methods: {
    async onSubmit(song) {
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
