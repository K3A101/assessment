<template>
<NavigationMenu/>


 <router-view/>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue'

export default {
  components: {
    NavigationMenu
  }
}
</script>


<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

</style>
