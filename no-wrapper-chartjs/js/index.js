let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var values2016 = [5,6,7,5,5,6,8,5,7,6,7,6];
var values2017 = [6,8,5,7,5,7,6,5,6,5,7,5];
var values2018 = [7,5,6,7,5,7,6,8,5,7,5,5];

let massPopChart = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
labels: months,
datasets: [
  {
    label: "2016",
    backgroundColor: "rgba(51, 51, 153, .65)", //#333399
    data: values2016
  },
  {
    label: "2017",
    backgroundColor: "rgba(92, 214, 92, .65)",  //#5cd65c
    data: values2017
  },
  {
    label: "2018",
    backgroundColor: "rgba(230, 184, 0, .65)", //#e6b800
    data: values2018
  }
]
  },
  options:{
    responsive: true,
    maintainAspectRatio: false,
    scales: {

      xAxes: [{
          stacked: false,
          gridLines: {
            display: false
          }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          fontSize: 14,
          labelString: "y-axis title here",
        },
        gridLines: {
          maxBarThickness: 100
        },
        ticks: {
          fontSize: 14,
          suggestedMin: 4, // Set minimum scale, otherwise it will be the lowest value in data
          suggestedMax: 8,
          maxTicksLimit: 5,
          fixedStepSize: .5
        }
      }]
    },
    title:{
      display: true,
      text: 'Progress Over Time',
      fontSize: 25,
  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    },
    legend:{
      display: true,
      position:'top',
      labels: {
        fontColor:'#000',
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
      }
    },
    layout: {
      padding: {
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips: {
      enabled:true
    }
  }
});
