<template>
  <div class="container">
      <br>
      <Carousel />
      <br>
      <br>
      <br>
      <Mission />
      <br>
      <br>
      <br>
      <HOD />
  </div>
</template>

<script>
import Carousel from '../components/ECEcarousel'
import Mission from '../components/ECEMission'
import HOD from '../components/ECEHod'

export default {
    components : {
        Carousel,
        Mission,
        HOD
    }

}
</script>

<style>
.container {
    margin-top: 6rem !important;
    margin-bottom: 6rem !important;
    justify-content: center;
}

.about-heading {
    font-weight: 600;
    font-size: 6vh;
}

</style>