<template>
  <div class="home">
    <MainPage />
    <Footer />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    MainPage,

    Footer,
  },
};
</script>

<style></style>
