<template>
  <form @submit.prevent="emitEvent">
    <div class="form-group mt-3">
      <input
        v-model="title"
        class="form-control"
        placeholder="the movie title here"
        type="text"
        required
      />
    </div>
    <div class="form-group mt-3">
      <input
        v-model="releaseYear"
        class="form-control"
        placeholder="the year movie was released"
        type="number"
        min="1000"
        required
      />
    </div>
    <button class="btn-block btn" type="submit">
      <div class="text">
        Submit
      </div>
    </button>
  </form>
</template>

<style scoped></style>

<script>
export default {
  name: "movies-recommendation-form",

  data() {
    return {
      title: null,
      releaseYear: null,
      thirdMovie: null
    };
  },

  methods: {
    emitEvent() {
      let movies = {
        movies: [
          {
            title: this.title,
            releaseYear: this.releaseYear
          }
        ]
      };

      this.$emit("submitFormData", movies);
    }
  }
};
</script>
