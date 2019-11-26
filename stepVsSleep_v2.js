// to plot Step and sleep correlation charts
async function stepVssleepduration() {
    canvas.clear();
    background(255);
    //createCanvas(400,400); 
    //canvas.position(0,0);
   // const data = await getData();
    
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
    if(!isDataGot)
    {
        myData = await getData();
        isDataGot = true;
    }
   
     
    const ctx = document.getElementById('Chart1').getContext('2d');
      
     const myChart = new Chart(ctx, {
        
        type: 'line',
        data: {
            labels: myData.xlabels,
            datasets: [{
                
                label: 'Distance Walked',
                data: myData.distscore,
                borderColor: 'rgba(0, 20, 0, 1)',
                backgroundColor: 'rgba(0, 20, 0, 0.5)',
                borderWidth: 1,
                fill:false
            },
            {
                                  
                label: 'sleep hrs',
                data: myData.sleephrs,
                borderColor: 'rgba(0, 100, 100, 1)',
                backgroundColor: 'rgba(0,100,100, 0.5)',
                borderWidth: 1,
                fill:false,
                type:'bar'
              }
              
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'distance score(kms) and Sleep(hrs)'
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