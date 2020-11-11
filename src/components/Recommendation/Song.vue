<template>
  <div class="card movie-info-card">
    <div class="card-body mb-5">
      <img :alt="title" :src="image_url" class="song-image" />
      <h4 class="mt-4">{{ title }}</h4>
      <small class="mt-2"> {{ author }} </small>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 200px;
  width: 300px;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.09));
}

.card {
  max-height: 400px;
}
</style>

<script>
export default {
  name: "recommended-movies",
  props: {
    title: String,
    author: String,
    image: String
  },

  data() {
    return {
      image_url: this.image
    };
  },

  mounted: function() {
    document.title = "Webinge | Recommended-Movies";
  }
};
</script>
