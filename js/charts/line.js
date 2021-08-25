const labels = [
  '',
  '12.07.21',
  '13.07.21',
  '14.07.21',
  '15.07.21',
  '16.07.21',
  '17.07.21',
  '18.07.21'
];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Все прослушивания',
      backgroundColor: '#4CB7BF',
      borderColor: '#4CB7BF',
      data: [170, 210, 270, 245, 220, 240, 180, 220],
    },
    {
      label: 'Платные прослушивания',
      backgroundColor: '#F78868',
      borderColor: '#F78868',
      data: [55, 80, 150, 120, 100, 110, 70, 90],
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
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            color: '#14121E',
            font: { size: 13, lineHeight: 15 },
            boxWidth: 24,
            boxHeight: 24,
            padding: 20,
            usePointStyle: true,
            pointStyle: 'rectRounded'
          }
        }
      },
      scales: {
        x: {
          grid: { borderColor: '#f0f0f0', color: '#f0f0f0', tickColor: 'transparent' },
          ticks: { color: '#9B9B9B' }
        },
        y: {
          grid: { borderColor: '#f0f0f0', color: '#f0f0f0', tickColor: 'transparent' },
          ticks: { color: '#9B9B9B' }
        }
      }
    }
  }
);