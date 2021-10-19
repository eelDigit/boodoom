<template>
  <div>
    <h1>AUDIO</h1>
    <div class="container d-flex flex-wrap justify-content-center">
      <div class="row">
        <div class="buttons">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-danger mx-5 my-3">
              Histoire
            </button>
            <button type="button" class="btn btn-warning mx-5 my-3">
              Actualité
            </button>
            <button type="button" class="btn btn-success mx-5 my-3">
              Arts
            </button>
            <button type="button" class="btn btn-danger mx-5 my-3">
              Sport
            </button>
            <button type="button" class="btn btn-warning mx-5 my-3">
              Bizness
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Audio",
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
