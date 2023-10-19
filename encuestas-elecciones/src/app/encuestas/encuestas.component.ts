import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import ApexCharts from 'apexcharts';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css'],
})
export class EncuestasComponent implements AfterViewInit {
  mostrarFormulario = false; 


  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario; 
  }
  submitForm(form: any) {
    console.log(form.value);
  }


  ngAfterViewInit() {

    const siglaColores = {
      "Sergio Massa": "#5194c3", 
      "Javier Milei":"#7c4ea5", 
      "Juan Schiaretti":"#808080",
      "Patricia Bullrich":"#f8c153",
      "Myriam Bregman":"#ff0000"
    };

    
    var options = {
      series: [
        {
          name: 'Votos segun encuesta',
          data: [35.3, 30, 25.9, 3.4, 2.6],
        },
      ],
      chart: {

        type: 'bar',
             },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
          colors: {
            ranges: [
              {
                from: 35,
                to: 40,
                color: siglaColores['Javier Milei'],
              },
              {
                from: 29,
                to: 30,
                color: siglaColores['Sergio Massa'],
              },
              {
                from: 25,
                to: 26,
                color: siglaColores['Patricia Bullrich'],
              },
              {
                from: 3,
                to: 4,
                color: siglaColores['Juan Schiaretti'],
              },
              {
                from: 0,
                to: 3,
                color: siglaColores['Myriam Bregman'],
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: [
          'Javier Milei',
          'Sergio Massa',
          'Patricia Bullrich',
          'Juan Schiaretti',
          'Myriam Bregman',
        ],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + '%';
          },
        },
      },
 
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }

}
