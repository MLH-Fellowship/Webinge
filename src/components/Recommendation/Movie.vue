<template>
  <div class="card movie-info-card">
    <div class="card-body mb-5">
      <div class="row px-2">
        <div class="col-md-4 col-12 text-left pic-column">
          <img :alt="title" :src="image_url" class="movie-image" />
          <h4 class="mt-4">{{ title }}</h4>
        </div>

        <div class="col-md-8 col-12 text-left px-md-5">
          <div class="mt-3">
            <small class="bold"> Released: {{ release_date }} </small>
          </div>
          <div class="mt-3">
            <small>
              {{ overview }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 200px;
  width: 300px;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.09));
}
</style>

<script>
export default {
  name: "recommended-movies",
  props: {
    title: String,
    image: String,
    overview: String,
    release_date: String
  },

  data() {
    return {
      image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + this.image
    };
  },
  mounted: function() {
    document.title = "Webinge | Recommended-Movies";
  }
};
</script>
