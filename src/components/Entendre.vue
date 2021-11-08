<template>
  <div>
    <div class="container d-flex flex-wrap justify-content-center">
      <div class="row">
        <div class="buttons">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <!-- _____[Histoire]_____  -->
            <router-link to="/Histoire">
              <button type="button" class="btn btn-danger mx-5 my-3">
                Histoire
              </button>
            </router-link>
            <!-- _____[Actualité]_____   -->
            <router-link to="/Actualite">
              <button type="button" class="btn btn-warning mx-5 my-3">
                Actualité
              </button>
            </router-link>

            <!-- _____[Art]_____  -->
            <router-link to="/Art">
              <button type="button" class="btn btn-success mx-5 my-3">
                Arts
              </button>
            </router-link>
            <!-- _____[Sport]_____  -->
            <router-link to="/Sport">
              <button type="button" class="btn btn-danger mx-5 my-3">
                Sport
              </button>
            </router-link>
            <!-- _____[Bizness]_____  -->
            <router-link to="/Bizness">
              <button type="button" class="btn btn-warning mx-5 my-3">
                Bizness
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entendre",
  components: {},
};
</script>

<style scoped>
.btn {
  width: 100px !important;
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: contents;
  vertical-align: middle;
}
</style>
