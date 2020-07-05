<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="(blog, i) in filteredBlogs" :key="i" class="single-blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: '',
    };
  },
  methods: {},
  created() {
    this.$http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {},
  filters: {
    // Filters
    toUppercase: (value) => value.toUpperCase(),
    snippet: (value) => `${value.slice(0, 100)}...`,
  },
  directives: {
    rainbow: {
      // eslint-disable-next-line no-unused-vars
      bind: (el, binding, vnode) => {
        // eslint-disable-next-line no-param-reassign
        el.style.color = `#${Math.random()
          .toString()
          .slice(2, 8)}`;
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}
</style>
