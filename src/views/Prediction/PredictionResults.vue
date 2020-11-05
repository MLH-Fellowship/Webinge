<template>
  <modal name="my-first-modal" class=" text-center" @click="close">
    <div class="p-5">
      <h3>predicted revenue: {{ predictedRevenue }}</h3>
      <h3>accuracy of prediction: {{ accuracy }}</h3>
      <a class="btn btn-primary" @click="close">Close</a>
    </div>
  </modal>
</template>

<style scoped></style>

<script>
export default {
  name: "prediction-results",
  props: {
    predictedRevenue: {
      required: true,
      type: Number
    },

    accuracy: {
      required: true,
      type: Number
    }
  },

  methods: {
    close() {
      this.$router.back();
    },
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    }
  },
  mounted: function() {
    this.show();
  }
};
</script>
