// to plot sleep duration
async function sleepduration() {
    //canvas.clear();
    const data = await getData();
    //const myChart;
    console.log (data);
/*
    const newLocal = "Calories";
    let caloriesBurnt = data.getColumn(newLocal);
    // the min and max functions tell us what the lowest
    // and highest values of the array are
    let minCal = min(caloriesBurnt);
    let maxCal = max(caloriesBurnt);
    console.log(minCal);
    console.log(maxCal);
*/
    console.log("sleep chart");
    const ctx = document.getElementById('Chart1').getContext('2d');
    //updateConfigAsNewObject(myChart);
     const myChart = new Chart(ctx, {
        
        type: 'bar',
        data: {
            labels: data.xlabels,
            datasets: [{
                                  
                label: 'sleep hrs',
                data: data.sleephrs,
                borderColor: 'rgba(0, 0, 180, 1)',
                backgroundColor: 'rgba(0, 0,180, 0.5)',
                borderWidth: 1
              }
        
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'sleep duration',
                mode: 'index',
                intersect: false,
            },

            scales: {
                xAxes: [{
                    display: true,
                    displayFormats: 'MMM YYYY',
                    scaleLabel: {
                        display: true,
                        labelString: 'Days'
                    },
                    //type: 'time',
                     //   time: {
                      //          displayFormats: {
                        //            quarter: 'MMM YYYY'
                          //      }
                            //}
                        
                       }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'sleep(hrs)'
                    },

                ticks: {
                      min: 0,
                      max: 25,
                      stepSize: 2  

                }    
                }]
            }
        }


    });
    //myChart.destroy();
   
    
    
}
   

function updateConfigAsNewObject(chart) {
    chart.options = {
        responsive: true,
        title: {
            display: true
                      },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true
            }]
        }
    };
    chart.update();
}