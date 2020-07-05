<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    propTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: this.propTitle,
    };
  },
  methods: {
    changeTitle() {
      this.title = 'Vue Wizards';
      bus.$emit('changeTitle', 'Vue Wizards');
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
