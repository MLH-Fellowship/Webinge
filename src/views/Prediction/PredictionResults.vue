<template>
  <modal name="my-first-modal" class=" text-center" @click="close">
    <a href="javascript:void(0)" class="closebtn mb-5" @click="close">
      &times;
    </a>
    <div class="p-5 mt-5">
      <h3 class="sub-heading text-muted">Estimated Revenue Range</h3>
      <h4 class="bold">
        <span class="mr-5 red-txt"> ${{ lowerRange }} </span>
        -
        <span class="ml-5 green-txt"> ${{ upperRange }} </span>
      </h4>

      <div v-if="isGoodInvestment" class="text-center mt-5">
        <h3 class="heading">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
        </h3>
        <h3 class="sub-heading text-muted">Good Investment</h3>
      </div>
      <div v-else class="mt-5">
        <h3 class="heading">
          <i class="fa fa-ban" aria-hidden="true"></i>
        </h3>
        <h3 class="sub-heading text-muted">Bad Investment</h3>
      </div>
    </div>
  </modal>
</template>

<style scoped>
.fa-check-circle {
  color: #007f37;
}

.fa-ban {
  color: #e00029;
}

.closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 3rem;
  color: black;
}
</style>

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
    },
    close() {
      this.$router.back();
    }
  },
  mounted: function() {
    this.show();
  }
};
</script>
