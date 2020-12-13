<template>
  <div>
    <HomeCarousel />
    <br>
    <br>
    <br>
    <About />
    <br>
    <br>
    <Mission />
    <br>
    <br>
    <Contact />
    <br>
    <br>
  </div>
</template>
<script>
import HomeCarousel from './HomeCarousel'
import About from './About'
import Mission from './MissionVIsion'
import Contact from './Contact'

export default {
   components : {
     HomeCarousel,
     About,
     Mission,
     Contact
   }
}
</script>

<style scoped>
</style>