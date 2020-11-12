<template>
  <div class="container-fluid">
    <div class="row  px-5 hero-text-second ">
      <div class="col-md-6 col-12">
        <h3 class="sub-heading">
          The Webing Team
        </h3>

        <h3 class="text-muted mt-5">
          Nyior Clement
        </h3>
        <h3 class="text-muted mt-2">
          Laurell Seville
        </h3>
        <h3 class="text-muted mt-2">
          Kyle Pullido
        </h3>
        <h3 class="text-muted mt-5">
            Webinge is currently open sourced on Github. Check it out 
            <a href="https://github.com/MLH-Fellowship/webinge" target="_blank" rel="noopener noreferrer">here</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "about",

  mounted: function() {
    document.title = "Webinge | About";
  }
};
</script>
