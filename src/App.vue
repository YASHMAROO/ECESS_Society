<template>
  <div id="app">
    <NavBar />
    <router-view class="top"/>
    <Footer />
  </div>
</template>

<script>
import NavBar from './views/NavBar'
import Footer from './views/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }

}
</script>

<style>
router-view{
  position: absolute;
}
</style>
