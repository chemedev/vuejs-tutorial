<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author {{ blog.author }}</p>
    <ul>
      <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get(`https://mechell-blog.firebaseio.com/posts/${this.id}.json`)
      .then((res) => res.json())
      .then((data) => {
        this.blog = data;
      });
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
