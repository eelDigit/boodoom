<template>
  <div>
    <!-- _____[banner pub]_____  -->
    <header
      class="home_header"
      role="banner"
      style="background-image: url('./assets/images/cahier.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="pub">
              <h1>PUB</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- ------------------------------------- -->
    <div class="container d-flex flex-wrap justify-content-center">
      <!-- ====================================== -->
      <div class="row">
        <h1 class="my-5 text-center">{{ msg }}</h1>
        <div class="buttons">
          <router-link to="/Abonne">
            <button type="button" class="btn btn-success1 btn-sm mx-5 my-3">
              Espace abonnées
            </button>
          </router-link>
          <router-link to="/Pro">
            <button type="button" class="btn btn-danger1 btn-sm mx-5 my-3">
              Espace média pro
            </button>
          </router-link>
        </div>
        <div class="container my-5 just">
          <router-link to="/Lire">
            <button type="button" class="btn btn-danger btn-lg mx-5 my-3">
              <div class="img-fluid">
                <img alt="Vue logo" src="../assets/images/cahier.jpg" />
              </div>
              LIRE
            </button>
          </router-link>
          <router-link to="/Entendre">
            <button type="button" class="btn btn-warning btn-lg mx-5 my-3">
              <div class="img-fluid">
                <img src="../assets/images/micro.jpg" alt="pub" />
              </div>
              ENTENDRE
            </button>
          </router-link>
          <router-link to="/Voir">
            <button type="button" class="btn btn-success btn-lg mx-5 my-3">
              <div class="img-fluid">
                <img src="../assets/images/video.jpg" alt="pub" />
              </div>
              VOIR
            </button>
          </router-link>
          <!-- </div> -->
        </div>
        <!-- ================== -->

        <!-- <div class="container d-flex flex-wrap justify-content-center">
          <div class="row w-100">
            <div class="pub_image d-flex">
              <div class="pub_image1">
                <p>
                  <img
                    src="../assets/images/micro.jpg"
                    class="img-fluid"
                    alt="pub bannier"
                  />
                </p>
              </div>
              <div class="pub_image2">
                <p>
                  <img
                    src="../assets/images/cahier.jpg"
                    class="img-fluid"
                    alt="pub bannier"
                  />
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ____[header]  */
.home_header {
  position: relative;
  /* margin-bottom: 3rem; */
  /* padding-top: calc(8rem + 57px); */
  /* padding-bottom: 8rem; */
  background: no-repeat center center;
  background-color: #6c757d;
  background-size: cover;
  background-attachment: scroll;
  background-image: url(../assets/images/cahier.jpg);
}

/* =================== */
/* a {
  color: #1520bd;
} */
/* .button {
  display: flex;
  justify-content: space-around;
} */
.btn-success1 {
  color: #fff;
  background-color: #000000;
  border-color: #198754;
}
.btn-danger1 {
  color: #fff;
  background-color: #000000;
  border-color: #dc3545;
}

/* h1 {
  padding: 10px;
  padding-bottom: 40px;
  font-size: 80px;
} */
</style>
