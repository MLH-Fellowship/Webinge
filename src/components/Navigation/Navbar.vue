<template>
  <nav class="navbar navbar-expand-lg py-3 fixed px-5 shadow" id="header">
    <a href="#" @click="back" v-if="hide_nav_brand">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </a>

    <h4 v-if="hide_nav_brand" class="mt-3 title">
      {{ title }}
    </h4>

    <router-link
      :to="{ name: 'home' }"
      class="dynamic-brand navbar-brand"
      v-if="!hide_nav_brand"
    >
      Webinge
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  props: {
    hide_nav_brand: {
      type: Boolean,
      required: true
    },

    title: {
      type: String,
      required: false
    }
  },

  data() {
    return {};
  },

  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.navbar-brand {
  font-weight: bold;
  font-size: 3rem;
  color: #007f37;
}

.fa-arrow-left {
  font-size: 2.5rem;
  color: #007f37;
  margin-top: 0.5rem;
}

#header {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  will-change: background-color, box-shadow;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  justify-content: flex-start;
}
#header.is-active,
#header.force-active {
  animation: topFixate 0.4s ease;
  position: fixed;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: rgba(108, 99, 255, 0.9);
  backdrop-filter: blur(8px);
  /* #10d48e; */
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.title {
  margin-left: 40%;
}
@media screen and (max-width: 600px) {
  .title {
    margin-left: 25%;
    font-size: 2rem;
  }
}
</style>
