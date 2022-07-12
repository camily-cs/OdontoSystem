import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Atendimentos realizados",
            data: [10, 41, 35, 51, 49, 62]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          /* title: {
            text: 'Atendimentos realizados',
            align: 'left'
          }, */
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
          }
        },
      
      
      };
    }

    render() {
      return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
      );
    }
  }

export default AreaChart;