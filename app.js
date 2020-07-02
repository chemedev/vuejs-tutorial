new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: '',
  },
  methods: {
    logName: function (e) {
      console.log('you entered your name');
    },
    logAge: function (e) {
      console.log('you entered your age');
    },
  },
});
