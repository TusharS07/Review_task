$(document).ready(function() {
  var xValues = ["Sayali", "Ashwini", "Tushar", "Yash", "Ram"];
  var yValues = [55, 49, 44, 24, 80];
  var colors = ["red", "green","blue","orange","brown"];
  

  const pieChart = $('#pieChart');
  const barChart = $('#barCHart');
  const lineChart = $('#lineChart');
  const doughnutChart = $('#doughnutChart');
  
  chartDisplay(pieChart, "pie", xValues, colors, yValues);

  chartDisplay(barChart, "bar", xValues, colors, yValues);

  chartDisplay(lineChart, "line", xValues, colors, yValues);

  chartDisplay(doughnutChart, "doughnut", xValues, colors, yValues);

})


function chartDisplay(htmlId, chartType, xValues, colors, yValues ) {
  new Chart(htmlId, {
    type: chartType,
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: colors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Total Marks"
      }
    }
  })
}


