<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group mt-3">
      <input
        v-model="movieDetailsForm.movieBudget"
        class="form-control"
        placeholder="your budget in dollars"
        type="number"
        required
      />
    </div>
    <div class="form-group mt-3">
      <input
        v-model="movieDetailsForm.movieGenre"
        class="form-control"
        placeholder="your movie's genre here"
        type="text"
        required
      />
    </div>
    <div class="form-group mt-5">
      <label for="release-month">release month</label>
      <select
        class="form-control"
        id="release-month"
        v-model="movieDetailsForm.movieReleaseMonth"
      >
        <option value="jan">
          January
        </option>
        <option value="feb">
          February
        </option>
        <option value="mar">
          March
        </option>
        <option value="apr">
          April
        </option>
        <option value="may">
          May
        </option>
        <option value="jun">
          June
        </option>
        <option value="jul">
          July
        </option>
        <option value="aug">
          August
        </option>
        <option value="sep">
          September
        </option>
        <option value="oct">
          October
        </option>
        <option value="nov">
          November
        </option>
        <option value="dec">
          Decemer
        </option>
      </select>
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
        movieBudget: null,
        movieGenre: null,
        movieReleaseMonth: null
      }
    };
  },

  methods: {
    onSubmit() {
      this.$emit("submitFormData");
    }
  }
};
</script>
