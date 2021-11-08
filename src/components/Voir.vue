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
    <!-- -------------------------------------  -->

    <!-- <div class="card" style="width: 18rem">
      <img src="../assets/images/cahier.jpg" class="card-img-left" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->

    <!-- <div class="card mx-5 my-3"> -->
    <div class="d-sm-flex mx-5 my-3">
      <div class="d-flex justify-content-center">
        <div class="flex-shrink-0">
          <img src="../assets/images/cahier.jpg" alt="..." />
        </div>
      </div>
      <div class="card-body">
        <p class="text-white-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo et
          sequi similique quasi neque! Ratione dolorum nihil a veniam quos autem
          nostrum animi odit eos. Perspiciatis aliquid tenetur, quasi, eum
          veritatis obcaecati natus minima accusamus, tempora in magni ratione!
          Autem tempora modi velit error molestias quis similique ad
          consequuntur in.
          <a href="#" class="card-link"> link</a>
        </p>
      </div>
    </div>
    <!-- </div> -->
    <div class="d-sm-flex mx-5 my-3">
      <div class="flex-shrink-0">
        <img
          src="../assets/images/cahier.jpg"
          class="card-img-left"
          alt="..."
        />
      </div>
      <div class="card-body">
        <p class="text-white-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo et
          sequi similique quasi neque! Ratione dolorum nihil a veniam quos autem
          nostrum animi odit eos. Perspiciatis aliquid tenetur, quasi, eum
          veritatis obcaecati natus minima accusamus, tempora in magni ratione!
          Autem tempora modi velit error molestias quis similique ad
          consequuntur in.
          <a href="#" class="card-link"> link</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Voir",
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
.flex-shrink-0 {
  justify-content: center;
  display: flex;
}
.text-white-50 {
  text-align: justify;
}
</style>
