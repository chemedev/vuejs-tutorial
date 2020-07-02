new Vue({
  el: '#vue-app',
  data: {
    age: 31,
    x: 0,
    y: 0,
  },
  methods: {
    add: function (value = 1) {
      this.age += value;
    },
    subtract: function (value = 1) {
      this.age -= value;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('You clicked me');
    },
  },
});
