import * as Chartist from 'chartist';
export const demodata = [
  {
    // Bar Chart 1
    data: {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
      [5, 2, 4, 2, 1],
      [3, 5, 1, 3, 4],

      ]
    }

  },
  {
    // Area Chart 1
    data: {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
      [5, 2, 4, 2, 1],
      [3, 5, 1, 3, 4],

      ]
    },
    options: {
      lineSmooth: Chartist.Interpolation.none(),
      high: 6,
      low: 0
    }

  },
  {
    data: {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    }

  },
  {
    data: {
      // A labels array that can contain any sort of values
      labels: ['L1', 'L2', 'L3', 'L4', 'L5'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
      [15, 17, 17, 12, 11],
      [3, 5, 1, 3, 4],
      [15, 12, 14, 12, 11],
      [23, 25, 22, 13, 14],
      [5, 12, 14, 8, 21],
      [7, 9, 8, 19, 26],

      ]
    }

  },
  {
    data: {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
      [5, 2, 4, 2, 1],
      [-3, -5, -1, -3, -4],

      ]
    }

  },
  {
    data: {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
      [5, 2, 4, 2, 1],
      [-3, -1, -4, -1, -5],

      ]
    }

  },

];
