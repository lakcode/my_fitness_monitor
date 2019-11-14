// to plot heartrate  charts
async function heartrate() {
    //canvas.clear();
    //createCanvas(400,400); 
    //canvas.position(0,0);
    const data = await getData();
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
    console.log("Heart rate");
/*
    if (
        canvas.myChart !== undefined
        &&
        canvas.myChart !== null
    ) {
        canvas.myChart.destroy();
    }

    */

    const ctx = document.getElementById('Chart1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xlabels,
            datasets: [{
                                  
                label: 'heart rate',
                data: data.heartrate,
                borderColor: 'rgba(200, 0, 0, 1)',
                backgroundColor: 'rgba(200, 0, 0, 0.5)',
                borderWidth: 1,
                fill: false
              }
        
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'heart rate'
            },
            tooltips: {
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
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max:180,
                        stepSize:10
                    }
                }]
            }
        }


    });

}