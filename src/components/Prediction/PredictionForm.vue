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
      <input
        class="form-control"
        placeholder="your movie's genre here"
        type="text"
        required
      />
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

<style scoped>
.search-button {
  font-size: 24px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: lightcoral;
  box-shadow: 0 9px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
  overflow: hidden;
}
</style>

<script>
export default {
  name: "prediction-form",

  data() {
    return {
      movieDetailsForm: {
        budget: null,
        genre_id: 28,
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
