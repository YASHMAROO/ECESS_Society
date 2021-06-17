<template>
  <div>
    <HomeCarousel />
    <About />
    <Mission />
    <Contact />
  </div>
</template>
<script>
import HomeCarousel from '../components/HomeCarousel'
import About from '../components/About'
import Mission from '../components/MissionVIsion'
import Contact from '../components/Contact'

export default {
  components : {
     HomeCarousel,
     About,
     Mission,
     Contact
   }
};
</script>

<style scoped>
</style>