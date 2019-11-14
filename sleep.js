// to plot sleep hrs  charts

async function sleepduration() {
   
    //createCanvas(400,400); 
    //canvas.position(0,0);
    const data = await getData();
    const myChart;
    
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
    console.log("sleep hrs");

    const ctx = document.getElementById('Chart1').getContext('2d');
    //ctx.remove(); 
   // let canvas = document.createElement('canvas'); 
   // canvas.setAttribute('id','Chart1'); 
   // ctx=document.querySelector('card-body').appendChild(canvas);
     myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xlabels,
            datasets: [{
                                  
                label: 'sleep hrs',
                data: data.sleephrs,
                borderColor: 'rgba(0, 0, 100, 1)',
                backgroundColor: 'rgba(0, 0, 100, 0.5)',
                borderWidth: 1,
                fill:false
               
              }
        
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'sleep hrs'
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
                        max:20,
                        stepSize:2
                    }
                }]
            }
        }


    });
   

}