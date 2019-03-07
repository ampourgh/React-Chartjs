import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App2 extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5', 'DAY 6', 'DAY 7', 'DAY 8', 'DAY 9', 'DAY 10'],
        datasets:[
          {
            label:'clicks',
            data:[
              5,
              5,
              3,
              4,
              5,
              6,
              12,
              11,
              4,
              6
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} location="ANALYTICS" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App2;
