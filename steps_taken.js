// to plot Steps  charts

//let isDataGot = false;
//let myData = null;
async function steps() {
   
    canvas.clear();
   // const myData = await getdata();
    console.log (myData);
/*
    const newLocal = "Calories";
    let caloriesBurnt = myData.getColumn(newLocal);
    // the min and max functions tell us what the lowest
    // and highest values of the array are
    let minCal = min(caloriesBurnt);
    let maxCal = max(caloriesBurnt);
    console.log(minCal);
    console.log(maxCal);
*/
    if(!isDataGot)
    {
        myData = await getData();
        isDataGot = true;
    }

    console.log("steps taken");
    const ctx = document.getElementById('Chart1').getContext('2d');
   
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myData.xlabels,
            datasets: [{
                                  
                label: 'steps taken',
                data: myData.stepstaken,
                borderColor: 'rgba(100, 199, 0, 1)',
                backgroundColor: 'rgba(100, 199, 0, 0.5)',
                borderWidth: 1
              }
        
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Steps taken'
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
                        min:200
                    }
                }]
            }
        }


    });

}