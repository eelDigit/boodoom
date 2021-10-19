<template>
  <div class="container my-5 justify-content-center">
    <div class="img d-flex justify-content-center">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/images/Bdoom-logo.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo",
};
</script>
<style scoped>
.container {
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
}
</style>
