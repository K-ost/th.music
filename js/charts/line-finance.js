const labelsFinance = [
  '',
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль'
];
const data = {
  labels: labelsFinance,
  datasets: [
    {
      label: 'Все прослушивания',
      backgroundColor: '#F78868',
      borderColor: '#F78868',
      data: [20000, 32000, 26000, 20000, 25000, 15000, 24000, 16000],
    }
  ]
};
let myChart = new Chart(
  document.getElementById('myChart'),
  {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: false
      },
      scales: {
        x: {
          grid: { borderColor: '#f0f0f0', color: '#f0f0f0', tickColor: 'transparent' },
          ticks: { color: '#9B9B9B' }
        },
        y: {
          grid: { borderColor: '#f0f0f0', color: '#f0f0f0', tickColor: 'transparent' },
          min: 0,
          max: 60000,
          ticks: { color: '#9B9B9B' }
        }
      }
    }
  }
);