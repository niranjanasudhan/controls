import { Component, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chartdemo',
  templateUrl: './chartdemo.component.html',
  styleUrls: ['./chartdemo.component.css']
})
export class ChartdemoComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  chartOptions2!: Highcharts.Options; // Second chart options
  columnData = [
    { count: 100, arrow: '↑', percentage: 5, arrowColor: 'red' },
    { count: 200, arrow: '↓', percentage: 3, arrowColor: 'green' },
    { count: 150, arrow: '↑', percentage: 10, arrowColor: 'red' },
    { count: 120, arrow: '↓', percentage: 2, arrowColor: 'green' },
    { count: 180, arrow: '↑', percentage: 8, arrowColor: 'red' },
    { count: 90, arrow: '↓', percentage: 1, arrowColor: 'green' },
    { count: 110, arrow: '↑', percentage: 7, arrowColor: 'red' },
    { count: 130, arrow: '↓', percentage: 4, arrowColor: 'green' },
  ];
  columnData1= [
    { count: 100, arrow: '↑', percentage: 5, arrowColor: 'red' },
    { count: 200, arrow: '↓', percentage: 3, arrowColor: 'green' },
    { count: 150, arrow: '↑', percentage: 10, arrowColor: 'red' },
  ];
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        // events: {
        //   load: () => {
        //     this.addCustomElements();
        //   },
          // disableContextMenu: true
        // }
      
      },
      navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    legend: {
      enabled: false // Disable the legend
    },
      title: { text: '' }, 
      xAxis: {
        categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      yAxis: {
        min: 0,  
        max: 20, 
        title: {
          text: 'Values'
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' units'
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series:  [
        {
          name: 'Series 1',
          data: [5, 3, 4, 7, 3, 2]
        } as Highcharts.SeriesAreaOptions,
        {
          name: 'Series 2',
          data: [2, 2, 3, 2, 3, 2]
        } as Highcharts.SeriesAreaOptions,
        {
          name: 'Series 3',
          data: [3, 4, 4, 2, 3, 2]
        } as Highcharts.SeriesAreaOptions,
        {
          name: 'Series 4',
          data: [4, 2, 5, 3, 3, 2]
        } as Highcharts.SeriesAreaOptions,
        {
          name: 'Series 5',
          data: [3, 5, 2, 4, 3, 2]
        } as Highcharts.SeriesAreaOptions
      ]
    };


    this.chartOptions2 = {
      chart: {
        type: 'column' // Use 'column' for vertical bars
      },
      title: {
        text: ''
      },
      navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    legend: {
      enabled: false // Disable the legend
    },
      xAxis: {
        categories: ['A', 'B', 'C'],
        title: {
          text: 'Categories'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Values'
        }
      },
      series: [
        {
          type: 'column', // Specify type
          name: 'Bars',
          color: '#5a97be', // Bar color
          data: [20, 40, 30] // Bar values
        },
        {
          type: 'line', // Specify type
          name: 'Line',
          color: 'red', // Line color
          data: [20, 35, 20], // Line data
          marker: {
            enabled: true // Show markers on the line
          }
        }
      ],
      plotOptions: {
        column: {
          pointPadding: 0.2, // Space between bars
          borderWidth: 0,
        },
        line: {
          dataLabels: {
            enabled: true // Show data labels on the line
          }
        },
        
      }
    };
  }


  private addCustomElements() {
    const chart = this.el.nativeElement.querySelector('.highcharts-container');
    const customDiv = document.createElement('div');
    customDiv.className = 'custom-row';

    // Populate the custom row with column data
    this.columnData.forEach(data => {
      const columnDiv = document.createElement('div');
      columnDiv.className = 'column';
      columnDiv.innerHTML = `
        <div class="count">${data.count}</div>
        <div class="arrow" style="color: ${data.arrowColor}">${data.arrow}</div>
        <div class="percentage">${data.percentage}%</div>
        <div class="engine-room">Engine Room</div>
      `;
      customDiv.appendChild(columnDiv);
    });

    // Append the custom row to the chart
    chart.appendChild(customDiv);
  }
}

