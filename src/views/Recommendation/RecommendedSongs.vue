<template>
  <div class="container hero-text-second">
    <div class="row px-3">
      <div class="col-md-12 mb-5 text-center">
        <h3 class="sub-heading">You Should Checkout These Songs</h3>
      </div>
    </div>
    <div class="row ">
      <div
        class="col-md-4 col-12 text-left"
        v-for="song in recommendedSongs"
        :key="song.id"
      >
        <Song
          :title="song.title"
          :author="song.subtitle"
          :image="song.images.coverart"
          :url="song.url"
        />
      </div>
    </div>

    <div class="row px-3 hero-text-second">
        <div class="col-12 mb-5 text-center">
            <h3 class="sub-heading text-center">
                Want Some Movies Recommendation Too ?
            </h3>
            <h3 class="sub-heading text-muted text-center">
                click the button below 
            </h3>
            <router-link to="movies-recommendation">
                <button class="btn mt-5 px-4 py-2 cta-btn">
                    <div class="text">
                       Get Started
                    </div>
                </button>
            </router-link>
        </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import Song from "@/components/Recommendation/Song.vue";

export default {
  name: "recommended-songs",

  components: {
    Song
  },

  props: {
    recommendedSongs: {
      type: Array,
      required: true
    }
  },
  mounted: function() {
    document.title = "Webinge | Recommended-Songs";
  }
};
</script>
