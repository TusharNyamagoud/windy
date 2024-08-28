var xyValues = [
   { x:50, y:7},
    {x:40, y:8},
    {x:45, y:8},
    {x:23, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:120, y:10},
    {x:120, y:11},
    {x:90, y:14},
    {x:89, y:14},
    {x:100, y:15}
  ];

  var xyValues2 = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("Chart1", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        data: xyValues
        
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });

  const xValues = [100,200,300,400,500,600,700,800,900,1000];

  new Chart("Chart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
        borderColor: "red",
        fill: false
      },{
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        borderColor: "green",
        fill: false
      },{
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      legend: {display: false},
      plugins: {
        title: {
          display: true,
          text: 'Chart Title',
          font: {
            size: 20,
            color: 'white',
          },
          padding: {
            top: 10,
            bottom: 30
          }
        }
      }
    }
  });