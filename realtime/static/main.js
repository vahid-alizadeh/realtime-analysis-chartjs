var y_val;
var x_val;
var dummyData = [];

async function getapi_y() {
  const response =  await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5");
  var data = await response.json();
  if(response){
    document.getElementById('loading').style.display = 'none';
  }
  let tab = JSON.stringify(data[0])
  y_val = JSON.stringify(data[0])
  x_val = JSON.stringify(data[1])
  dummyData = [y_val, x_val, y_val]
  document.getElementById('demo').innerHTML = tab;
  document.getElementById('total_agents_online').innerHTML = JSON.stringify(data[1]);
  document.getElementById('total_agents_busy').innerHTML = JSON.stringify(data[2]);
  return(y_val);
};

getapi_y();




// setup block
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
      label: '# of Available Agents',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }]
};

// config block
const config = {
  type: 'line',
  data,
  options: {
      scales: {
        x: {
          type: 'realtime',
          realtime: {
            onRefresh: chart => {
              chart.data.datasets.forEach(dataset => {
                dataset.data.push({
                  x: Date.now(),
                  y: y_val,
                  z: getapi_y()
                });
              });
            }
          }
        },
        y: {
            beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: 'This is Another TEST Title!'
        }
    }
  }
};
// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config,
);

////////////////////////////////////////// PI CHART /////////////////////////
// setup block
const data2 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

// config block
const config2 = {
  type: 'doughnut',
  data: data2,
  options: {
    plugins: {
        title: {
            display: true,
            text: 'This is a TEST Title!'
        }
    }
}
};

// render init block
const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2,
);













