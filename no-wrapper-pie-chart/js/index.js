let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var months = ['January', 'February', 'March'];
var colors = ["rgba(51, 51, 153, .65)", "rgba(92, 214, 92, .65)", "rgba(230, 184, 0, .65)"];
var values = [5,20,7];


let massPopChart = new Chart(myChart, {
  type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    datasets: [{
      data: values,
      backgroundColor: colors,
    }],
    labels: months
  },
  options: {
    responsive: true,
    cutoutPercentage: 70,
    legend: {
      display: true,
      labels: {
        padding: 20
      },
    },
    pieceLabel: {

    },
    plugins: {
      labels: {
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        textShadow: true,
        shadowOffsetX: -5,
        render: 'value',
        fontSize: 40,
        position: 'outside',
        outsidePadding: 4,
        textMargin: 15,
        precision: 0
      }
    },
    tooltips: {
      enabled: true,
    }
  }
});
