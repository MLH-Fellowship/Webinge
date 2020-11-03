<template>
  <div class="my-footer text-center mt-5 py-1 shadow">
    <div class="row  m-4">
      <div class="col-12">
        <p>
          Made with
          <i class="fa fa-heart" aria-hidden="true"></i>
          by Team Webinge✨
        </p>
      </div>

      <div class="col-12">
        <p>
          <a
            target="_blank"
            href="https://nyior-clement.netlify.app/"
            class="mr-2"
          >
            Nyior Clement
          </a>

          <a target="_blank" href="" class="ml-2">
            Laurell
          </a>

          <a target="_blank" href="" class="ml-2">
            Kyal
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.my-footer {
  font-size: 1.4rem;
  letter-spacing: 1px;
  width: 100%;
  margin-top: 10rem;
  position: relative;
  bottom: 0;
}

.fa-heart {
  font-size: 1.4rem;
  color: #10d48e;
}
</style>
