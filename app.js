Vue.component('greeting', {
  template:
    '<p>Hey there, I am {{ name }}. <button @click="changeName">Change name</button></p>',
  data: () => ({ name: 'Yoshi' }),
  methods: {
    changeName: function () {
      this.name === 'Yoshi' ? (this.name = 'Mario') : (this.name = 'Yoshi');
    },
  },
});

new Vue({
  el: '#vue-app-one',
});

new Vue({
  el: '#vue-app-two',
});
