<template>
  <div>
    <HomeCarousel />
    <About />
    <Mission />
    <Contact />
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
};
</script>

<style scoped>
</style>