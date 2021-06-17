<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="cover"></div>
        <img class="responsive" src="@/assets/0.jpg" alt="First slide" />
        <div class="carousel-caption">
          <h5 class="heading">NIT DURGAPUR</h5>
        </div>
      </div>
      <div class="carousel-item">
        <div class="cover"></div>
        <img class="responsive" src="@/assets/ECE Dept.jpeg" alt="Second slide" />
        <div class="carousel-caption">
          <h5 class="heading">ECE Department</h5>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style scoped>
.carousel-item {
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.responsive {
  width: 100%;
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
}

.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: 0.3;
}

.heading {
  font-size: 1.6rem !important;
}

.subheading {
  font-size: 1.4rem;
}

@media only screen and (max-width: 576px) {
.responsive {
  object-fit: cover;
}

  .heading {
    font-size: 1.2rem !important;
  }

  .subheading {
    font-size: 1.0rem;
  }
}
</style>