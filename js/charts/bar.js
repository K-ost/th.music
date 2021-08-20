const dataDemography = {
  labels: ['>18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+', 'Неизвестно'],
  datasets: [
    {
      label: 'Мужчины',
      data: [24, 36, 24, 15, 6, 5, 4, 2],
      backgroundColor: '#4CB7BF',
      borderRadius: 5,
      categoryPercentage: 0.7,
      barPercentage: 0.7
    },
    {
      label: 'Женщины',
      data: [4, 9, 2, 4, 2, 4, 1, 2],
      backgroundColor: '#F78868',
      borderRadius: 5,
      categoryPercentage: 0.7,
      barPercentage: 0.7
    },
    {
      label: 'Неизвестно',
      data: [2, 2, 1, 3, 1, 2, 1, 1],
      backgroundColor: '#9B9B9B',
      borderRadius: 5,
      categoryPercentage: 0.7,
      barPercentage: 0.7
    }
  ]
};

const configDemography = {
  type: 'bar',
  data: dataDemography,
  options: {
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
        ticks: { color: '#9B9B9B' },
      },
      y: {
        grid: { borderColor: '#f0f0f0', color: '#f0f0f0', tickColor: 'transparent' },
        min: 0,
        max: 40,
        ticks: {
          color: '#9B9B9B',
          stepSize: 4,
          callback: (value) => `${value}%`
        },
        beginAtZero: true
      }
    }
  },
};

let barDemography = new Chart(document.getElementById('bar-demography'), configDemography)
