<template>
  <div id="app">
    <NavbarComponent
      :hide_nav_brand="hide_nav_brand"
      :force-active="this.$route.name !== 'home'"
      :title="title"
    />

    <router-view />

    <FooterComponent v-if="show_footer"/>
  </div>
</template>

<script>
import NavbarComponent from "@/components/Navigation/Navbar.vue";
import FooterComponent from "@/components/Navigation/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent
  },

  data() {
    return {
      hide_nav_brand: false,
      show_footer: true,
      title: null
    };
  },

  watch: {
    $route: function(value) {
      if (value.meta.hideBrand) {
        this.hide_nav_brand = true;
        this.show_footer = false;
        this.title = value.meta.title;
      } else {
        this.hide_nav_brand = false;
        this.show_footer=true;
        this.title = null;
      }
    }
  }
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
