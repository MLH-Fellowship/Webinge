<template>
  <modal name="my-first-modal" class=" text-center" @click="close">
    <div class="p-5">
      <h1>Estimated Revenue</h1>
      <h3>{{ lowerRange }} - {{ upperRange }}</h3>
      <h3 v-if="isGoodInvestment">Good Investment</h3>
      <h3 v-else>Bad Investment</h3>
      <a class="btn btn-primary">Close</a>
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
    },

    isGoodInvestment: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      upperRange: this.predictedRevenue + 1000,
      lowerRange: this.predictedRevenue + 1000
    };
  },

  methods: {
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
