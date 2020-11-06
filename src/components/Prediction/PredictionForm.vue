<template>
  <form @submit.prevent="emitEvent">
    <div class="form-group mt-3">
      <input
        v-model="movieDetailsForm.budget"
        class="form-control"
        placeholder="your budget in dollars"
        type="number"
        min="1"
        step="0.01"
        required
      />
    </div>
    <div class="form-group mt-3">
      <select class="form-control" v-model="movieDetailsForm.genre_id">
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="14">Fantasy</option>
        <option value="16">Animation</option>
        <option value="87">Science Fiction</option>
        <option value="18">Drama</option>
        <option value="53">AnimationThriller</option>
        <option value="10">Family</option>
      </select>
    </div>
    <div class="form-group mt-5">
      <div class="form-group mt-3">
        <input
          v-model="movieDetailsForm.runtime"
          class="form-control"
          placeholder="movie length. e.g 0.5 for 30mins movie and 1.20 for a 1hour 20mins movie"
          type="number"
          min="0.5"
          step="0.01"
          required
        />
      </div>
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
  name: "prediction-form",

  data() {
    return {
      movieDetailsForm: {
        budget: null,
        genre_id: "pick a movie genre",
        runtime: null
      }
    };
  },

  methods: {
    emitEvent() {
      this.$emit("submitFormData", this.movieDetailsForm);
    }
  }
};
</script>
