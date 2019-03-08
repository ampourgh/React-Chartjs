
Vue.component('line-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
          {
              label: "Harpo",
              fillColor: "blue",
              backgroundColor: "yellow",
              data: [4,3,7,4,5,6,8,3,7,2,7,6]
          },
          {
              label: "Chico",
              fillColor: "red",
              backgroundColor: "blue",
              data: [6,8,3,7,2,7,6,4,3,5,7,2]
          },
          {
              label: "Groucho",
              fillColor: "green",
              backgroundColor: "green",
              data: [7,2,6,7,4,5,6,8,3,7,4,5]
          }
      ]
    },
    {responsive: true, maintainAspectRatio: false})
  }

})

var vm = new Vue({
  el: '.app',
  data: {
    message: 'Vue.js render of Graphjs'
  },
  options: {
    title: {
      display: true,
      text: 'something'
    }
  }
})
