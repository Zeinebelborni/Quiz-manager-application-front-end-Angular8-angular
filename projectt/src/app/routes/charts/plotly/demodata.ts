import { Color, colors } from '../../../helpers/colors';
export const demodata =  [
  {
    data: [
      {
        x: [1, 2, 3, 4, 5, 6],
        y: [10, 15, 13, 17, 12, 11],
        width: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        marker: {color: colors['purple'].toString()},
        type: 'scatter'
      },
      {
        x: [1, 2, 3, 4, 5, 6],
        y: [16, 5, 11, 9, 5, 7],
        type: 'scatter',
        marker: {color: colors['orange'].toString()},
      }
    ],
    layout: {
      xaxis: {
        autotick: false,
        tick0: 0,
      },
      yaxis: {
        autotick: false,
        tick0: 0,
      },
    }
  },
  {
    data: [
      {
        x: [1, 2, 3, 4, 5, 6],
        y: [10, 15, 13, 17, 12, 11],
        width: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        marker: {color: colors['blue'].toString()},
        type: 'bar'
      },
      {
        x: [1, 2, 3, 4, 5, 6],
        y: [16, 5, 11, 9, 5, 7],
        width: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        marker: {color: colors['teal'].toString()},
        type: 'bar'
      }
    ],
    layout: {
      xaxis: {
        autotick: false,
        tick0: 0,
      },
      yaxis: {
        autotick: false,
        tick0: 0,
      },
    }
  },
  {
    data: [
      {
        labels: [1, 2, 3, 4, 5, 6],
        values: [10, 15, 13, 17, 12, 11],
        marker: {colors: [
          colors['blue'].toString(),
          colors['green'].toString(),
          colors['red'].toString(),
          colors['purple'].toString(),
          colors['teal'].toString(),
          colors['orange'].toString(),
        ]},
        type: 'pie'
      },
    ]
  },
  {
    data: [
      {
        x: [1, 2, 3, 4, 5, 6],
        y: [10, 15, 13, 17, 12, 11],
        width: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        marker: {color: colors['purple'].toString()},
        type: 'scatter',
        mode: 'markers',
      },
      {
        x: [1, 2, 3, 4, 5, 6],
        y: [16, 5, 11, 9, 5, 7],
        type: 'scatter',
        marker: {color: colors['orange'].toString()},
        mode: 'markers',
      }
    ],
    layout: {
      xaxis: {
        autotick: false,
        tick0: 0,
      },
      yaxis: {
        autotick: false,
        tick0: 0,
      },
    },

  },
  {
    data: [
      {
        y: getBoxData(),
        type: 'box',
        marker: {color: colors['blue'].toString()},
      },
      {
        y: getBoxData(),
        type: 'box',
        marker: {color: colors['cyan'].toString()},
      },
      {
        y: getBoxData(),
        type: 'box',
        marker: {color: colors['teal'].toString()},
      }

    ]
  },
  {
    data: [
      {
        y: [1, 2, 3, 4, 5, 6],
        x: [10, 15, 13, 17, 12, 11],
        width: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        marker: {color: colors['blue'].toString()},
        type: 'bar',
        orientation: 'h'
      },
    ],
  },

]
function getBoxData() {
  let y = [];
  for ( let i = 0; i < 50; i ++)
  {
      y[i] = Math.random();

  }
  return y;
}
