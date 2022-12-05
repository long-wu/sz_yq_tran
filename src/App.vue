<template>
  <L7-map></L7-map>
</template>

<script>
import L7Map from '@/view/map'
export default {
  name: 'App',
  components: {
    L7Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.l7-control-logo, .amap-copyright, .amap-logo {
  display: none !important;
}
</style>
