<template>
  <form @submit.prevent="emitEvent">
    <div class="form-group mt-3">
      <input
        v-model="song.title"
        class="form-control"
        placeholder="song title here"
        type="text"
        required
      />
    </div>
    <div class="form-group mt-3">
      <input
        v-model="song.author"
        class="form-control"
        placeholder="song author here"
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
  name: "songs-recommendation-form",

  data() {
    return {
      song: {
        title: null,
        author: null
      }
    };
  },

  methods: {
    emitEvent() {
      this.$emit("submitSong", this.song);
    }
  }
};
</script>
