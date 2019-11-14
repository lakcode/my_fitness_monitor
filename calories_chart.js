// to plot Calorie charts
async function chartIt() {
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
        
    const ctx = document.getElementById('Chart1').getContext('2d');
      
     const myChart = new Chart(ctx, {
        
        type: 'line',
        data: {
            labels: data.xlabels,
            datasets: [{
                label: 'days of the month',
                data: data.calburnt,
                backgroundColor: [
                    'rgba(0, 99, 132, 0.2)'],
                borderColor: [
                    'rgba(0, 99, 132, 1)'],
                borderWidth: 1
                
            }                
        ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Calories burnt'
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
                        min: 5
                    }
                }]
            }
        }


    });
     

}