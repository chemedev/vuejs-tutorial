<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Vue.js"/>
    <h1> {{ title }} </h1>
    <Ninjas/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    HelloWorld,
    Ninjas,
  },
  data() {
    return {
      title: 'Mechell App',
    };
  },
};
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
</style>
