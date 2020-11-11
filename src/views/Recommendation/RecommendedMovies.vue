<template>
  <div class="container hero-text-second">
    <div class="row px-3">
      <div class="col-md-12 mb-5 text-center">
        <h3 class="sub-heading">You Should Checkout These Videos</h3>
      </div>
      <div class="col-md-12" v-for="movie in recommendedMovies" :key="movie.id">
        <Movie
          :title="movie.title"
          :image="movie.backdrop_path"
          :overview="movie.overview"
          :release_date="movie.release_date"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import Movie from "@/components/Recommendation/Movie.vue";
export default {
  name: "recommended-movies",

  components: {
    Movie
  },

  props: {
    recommendedMovies: {
      type: Array,
      required: true
    }
  },
  mounted: function() {
    document.title = "Webinge | Recommended-Movies";
  }
};
</script>
