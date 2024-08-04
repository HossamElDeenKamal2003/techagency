<template>
  <header-page />
  <router-view /> 
</template>
<script>
  import headerPage from '@/components/headerPage.vue';
  export default{
    name:'App',
    components:{
      headerPage,
    },
    
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  animation-name: headerani;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes headerani {
  0% {
      opacity: 0;
      transform: translateY(0);
  }

  100% {
      opacity: 1;
      transform: translateY(0);
  }
}
h1{
  animation-name: desani;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes desani {
  0% {
      opacity: 0;
      transform: translateY(0);
  }

  100% {
      opacity: 1;
      transform: translateY(0);
  }
}
body{
  background-color: black;
}
</style>
