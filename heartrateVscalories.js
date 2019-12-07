// to plot Calories and heartrate correlation charts
async function heartrateVscalories() {
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
    
    //console.log("Calories chart");
    if(!isDataGot)
    {
        myData = await getData();
        isDataGot = true;
    }
   
     
    const ctx = document.getElementById('Chart1').getContext('2d');
      
     const myChart = new Chart(ctx, {
        
        type: 'bar',
        data: {
            labels: myData.xlabels,
            datasets: [{
                
                label: 'calories',
                data: myData.calburnt,
                borderColor: 'rgba(0, 20, 0, 1)',
                backgroundColor: 'rgba(0, 20, 0, 0.5)',
                borderWidth: 1,
                fill:false
            },
            {
                                  
                label: 'heartrate',
                data: myData.heartrate,
                borderColor: 'rgba(200, 0, 0, 1)',
                backgroundColor: 'rgba(0,100,100, 0.5)',
                borderWidth: 1,
                fill:false,
                type:'line'
              }
              
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Heart rate and Calories burnt',
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
                        beginAtZero: false,
                        min:0,
                        max:1800,
                        stepSize:20
                    }
                }]
            }
        }


    });
    
    

}