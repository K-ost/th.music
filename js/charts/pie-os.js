const dataOs = {
  labels: [
    'Android',
    'Веб-браузер',
    'iOS',
    'Остальные',
    'Windows',
    'Linux',
    'MacOS'
  ],
  datasets: [{
    data: [50, 30, 10, 6, 2, 1, 1],
    backgroundColor: ['#4CB7BF', '#F78868', '#F7C34C', '#9B9B9B', '#B7E2E5', '#FCCFC3', '#FCE7B7'],
    hoverOffset: 2,
    borderWidth: 0
  }]
};

const optionsOs = {
  type: 'pie',
  data: dataOs,
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

let pieOs = new Chart(document.getElementById('pie-os'), optionsOs)