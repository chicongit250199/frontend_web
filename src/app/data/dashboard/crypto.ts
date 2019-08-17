import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

const primary = localStorage.getItem('primary_color') || '#4466f2';
const secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

// Chart 1
export let chart1: Chart = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
      [8, 3, 7.5, 4, 7, 4]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Chart 2
export let chart2: Chart = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
      [8, 3, 7.5, 4, 7, 4]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Chart 3
export let chart3: Chart = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [
      [8, 3, 7.5, 4, 7, 4]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Chart 4
export let chart4: Chart = {
  type: 'Bar',
  data: {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    series: [
      [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
      [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]
    ]
  },
  options: {
    seriesBarDistance: 12,
    chartPadding: {
      left: 0,
      right: 0,
      bottom: 0,
    },
    axisX: {
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  },
  events: {
    created: (data) => {

    }
  }
};

// Sale chart
export let saleChartType = 'line';
export let saleChartLabels: Array<any> = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
export let saleChartData: Array<any> = [
  { data: [1, 2.5, 1.5, 3, 1.3, 2, 4, 4.5] },
  { data: [0, 1, 0.5, 1, 0.3, 1.6, 1.4, 2] }
];
export let saleChartOptions: any = {
  responsive: true,
  animation: false,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: '#fff',
        drawTicks: true,
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        precision: 0
      }
    }]
  }
};
export let saleChartColors: Array<any> = [
  {
    fill: false,
    borderColor: primary,
    borderWidth: 2.5,
    pointBackgroundColor: primary,
    pointBorderColor: primary,
    lineTension: 0
  },
  {
    fill: false,
    borderColor: secondary,
    borderWidth: 2.5,
    pointBackgroundColor: secondary,
    pointBorderColor: secondary,
    lineTension: 0
  },
];
export let saleChartLegend = false;

// Invest Chart data and options
export let dailyChartLabels: string[] = ['Bitcoin', 'Ripple', 'Invest'];
export let dailyChartData: number[] = [40, 8, 10];
export let dailyChartColors: any[] = [{
  backgroundColor: [primary, '#f6f6f6', secondary],
  borderAlign: 'center',
  borderColor: primary,
  weight: 1,
  borderWidth: 2
}];
export let dailyChartType = 'doughnut';
export let dailyChartLegend = true;
export let dailyChartOptions: any = {
  animation: {
    easing: 'easeOutBounce',
  },
  cutoutPercentage: 70,

  tooltips: {
    mode: 'index',
    intersect: true,
  },
  responsive: true,
  height: 500,
  maintainAspectRatio: false,
  legend: {
    display: false,
    fullWidth: true,
    onClick: true,
    position: 'center'
  }
};
