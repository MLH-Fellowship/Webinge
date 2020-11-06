<template>
  <form @submit.prevent="emitEvent">
    <div class="form-group mt-3">
      <input
        v-model="firstMovie"
        class="form-control"
        placeholder="title of first movie here"
        type="text"
        required
      />
    </div>
    <div class="form-group mt-3">
      <input
        v-model="secondMovie"
        class="form-control"
        placeholder="title of second movie here"
        type="text"
        required
      />
    </div>
    <div class="form-group mt-3">
      <input
        v-model="thirdMovie"
        class="form-control"
        placeholder="title of third movie here"
        type="text"
        required
      />
    </div>
    <button class="btn-block search-button" type="submit">
      <div class="text">
        Submit
      </div>
    </button>
  </form>
</template>

<style scoped></style>

<script>
export default {
  name: "recommendation-form",

  data() {
    return {
      firstMovie: null,
      secondMovie: null,
      thirdMovie: null
    };
  },

  methods: {
    emitEvent() {
      let movies = {
        movieTitles: [this.firstMovie, this.secondMovie, this.thirdMovie]
      };
      this.$emit("submitFormData", movies);
    }
  }
};
</script>
