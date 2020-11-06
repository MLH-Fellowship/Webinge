<template>
  <div class="container">
    <div class="row px-3">
      <div class="col-md-6 ml-md-auto mr-md-auto col-12">
        <div class="card movie-info-card">
          <div class="card-body mb-5">
            {{ recommendedMovies }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "recommended-movies",
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
