const dataCountries = {
  labels: ['Россия', 'Беларусь', 'Украина', 'Казахстан', 'Киргизия'],
  datasets: [{
    label: 'Страны',
    data: [80, 10, 5, 3, 2],
    backgroundColor: ['#4CB7BF', '#F78868', '#F7C34C', '#007D86', '#BF3913'],
    borderRadius: 10
  }]
};

const configCountries = {
  type: 'bar',
  data: dataCountries,
  options: {
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
        ticks: { color: '#9B9B9B' },
      },
      y: {
        grid: { borderColor: '#f0f0f0', color: '#f0f0f0', tickColor: 'transparent' },
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          color: '#9B9B9B',
          stepSize: 10,
          callback: (value) => `${value}%`
        }
      }
    }
  },
};

let barCountries = new Chart(document.getElementById('bar-countries'), configCountries)
