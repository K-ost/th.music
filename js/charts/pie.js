const dataPie = {
  labels: [
    'Мобильное устройство',
    'Настольный ПК',
    'Остальное',
    'Планшет'
  ],
  datasets: [{
    data: [59, 34, 6, 1],
    backgroundColor: ['#4CB7BF', '#F78868', '#F7C34C', '#007D86'],
    hoverOffset: 2,
    borderWidth: 0
  }]
};

const options = {
  type: 'pie',
  data: dataPie,
  options: {
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
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
    }
  }
};

let pieDevices = new Chart(document.getElementById('pie-devices'), options)