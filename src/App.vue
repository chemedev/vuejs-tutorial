<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1> {{ title }} </h1>
    <p> {{ greeting() }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: 'Your first Vue file, wooo!',
    };
  },
  methods: {
    greeting() {
      return 'heeeeeeeey cowboy!';
    },
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
