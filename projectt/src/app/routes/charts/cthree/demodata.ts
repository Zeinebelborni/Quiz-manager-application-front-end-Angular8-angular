import { Color, colors } from '../../../helpers/colors';
export const demodata= [
  {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    types: {
      'data1': 'line',
      'data2': 'spline'
    },
    colors: {
        'data1': colors['purple'].alpha(0.9),
        'data2': colors['blue'].alpha(0.9),
    },
  },
  {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25],

    ],
    types: {
      'data1': 'bar',
      'data2': 'bar'
    },
    colors: {
        'data1': colors['blue'].alpha(0.9),
        'data2': colors['orange'].alpha(0.9),
    },
  },
  {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25],

    ],
    types: {
      'data1': 'area-spline',
      'data2': 'area'
    },
    colors: {
        'data1': colors['green'].alpha(0.9),
        'data2': colors['blue'].alpha(0.9),
    },
  },
  {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25],

    ],
    types: {
      'data1': 'scatter',
      'data2': 'scatter'
    }
  },
  {
    columns: [
      ['data1', 30],
      ['data2', 40],
      ['data3', 50],
      ['data4', 80],
      ['data5', 10],

    ],
    type: 'pie',
    colors: {
        'data1': colors['purple'].alpha(0.9),
        'data2': colors['blue'].alpha(0.9),
        'data3': colors['green'].alpha(0.9),
        'data4': colors['orange'].alpha(0.9),
        'data5': colors['red'].alpha(0.9),
    },
  },
  {
    columns: [
      ['data1', 30],
      ['data2', 40],
      ['data3', 50],
      ['data4', 80],
      ['data5', 10],

    ],
    type: 'donut'
  }
]
