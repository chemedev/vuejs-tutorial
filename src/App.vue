<template>
  <div>
    <show-blogs />
    <list-blogs />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
