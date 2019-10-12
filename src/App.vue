<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Navbar';

  export default {
    components: {
      Navbar
    }
  }
</script>


<style lang="scss">

@import './styles/global';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
