<template>
  <div class="container hero-text-second">
    <div class="row px-3">
      <div class="col-md-12 mb-5 text-center">
        <h3 class="heading">You Should Checkout These Songs</h3>
      </div>
    </div>
    <div class="row px-3">
      <div
        class="col-md-4 col-12 text-left px-2 mx-2"
        v-for="song in recommendedSongs"
        :key="song.id"
      >
        <Song
          :title="song.title"
          :author="song.subtitle"
          :image="song.images.coverart"
        />
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
