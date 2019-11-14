// to plot Step and sleep correlation charts
async function stepVssleepduration() {
   // canvas.redraw();
    background(255);
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
    
    console.log("Calories chart");
    const resetCanvas = function(){
        $('#Chart1').remove(); // this is my <canvas> element
        $('#chart-body').append('<canvas id="Chart1"><canvas>');
        canvas = document.querySelector('#Chart1');
        ctx = canvas.getContext('2d');
        
      };
     
    const ctx = document.getElementById('Chart1').getContext('2d');
      
     const myChart = new Chart(ctx, {
        
        type: 'line',
        data: {
            labels: data.xlabels,
            datasets: [{
                
                label: 'Distance Walked',
                data: data.distscore,
                borderColor: 'rgba(100, 199, 0, 1)',
                backgroundColor: 'rgba(100, 199, 0, 0.5)',
                borderWidth: 1,
                fill:false
            },
            {
                                  
                label: 'sleep hrs',
                data: data.sleephrs,
                borderColor: 'rgba(0, 0, 180, 1)',
                backgroundColor: 'rgba(0, 0,180, 0.5)',
                borderWidth: 1,
                fill:false
              }
              
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'dist score and Sleep'
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
                        
                    }
                }]
            }
        }


    });
    
    

}