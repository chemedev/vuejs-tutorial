<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link :to="`/blog/${blog.id}`">
        <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
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
      .get('https://mechell-blog.firebaseio.com/posts.json')
      .then((res) => res.json())
      .then((data) => {
        const blogsArray = [];
        Object.keys(data).forEach((key) => {
          // eslint-disable-next-line no-param-reassign
          data[key].id = key;
          blogsArray.push(data[key]);
        });
        this.blogs = blogsArray;
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
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type='text'] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
