
 // line chart- another way    

 let button1;

 
 function setup() {
   // put setup code here
   createCanvas(800,600);
 //  background("cyan");
  createSpan('CaloriesMonitor');
  
   button1 = createButton('Calories_yearly');
   button1.position(50,50);
   //button.size(50,50);
   
   // how many rows?
 //console.log(data.getRowCount());
 // what are the columns?
 //console.log(data.columns);
   

 }

 class Rectangle {
    constructor(name, height, width) {
      this.name = name;
      this.height = height;
      this.width = width;
    }
  }
  let square = new Rectangle('square', 1, 1);



function draw(){
       
    button1.mousePressed(chartIt);


}

        const xlabels =[];
        const yCalories=[];
        
       
     // chartIt();
         async  function chartIt(){
            clear();   
          await getData();
       /*   
          .then( response =>{
            console.log('getting data');  
      })
      .catch(error =>{

          console.log('error fetching data');
          console.error(error);
      });
      */
            
             const ctx = document.getElementById('Chart1').getContext('2d');
              const myChart = new Chart(ctx, {
                                    type: 'line',
                                    data: {
                                        labels: xlabels,
                                        datasets: [{
                                            label: 'days of the month',
                                            data: yCalories,
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)'                          
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)'                        
                                            ],
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                        responsive: true,
                                        title: {
                                            display: true,
                                            text: 'Chart.js Line Chart'
                                        },
                                        tooltips: {
                                            mode: 'index',
                                            intersect: false,
                                        },
                                        
                                        scales: {
                                            xAxes: [{
                                                display: true,
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Month'
                                                }
                                            }],
                                            yAxes: [{
                                                display: true,
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Value'
                                                }
                                            }]
                                        }
                                    }    
                                       
                                    
                                });

        }
        async function getData() {
        
         const response =await fetch('activity_generated.csv');
         
         const data = await response.text();
         console.log(data);
         const table= data.split('\n').slice(1);
         const newLocal = table.split('\n');
         const rows = newLocal;
        //console.log(table);
          table.forEach(row => {
            const columns = row.split(',');
            const days = columns[0];
            xlabels.push(days);

            const calburnt = columns[1] ;  
            yCalories.push(calburnt);
             console.log(days,calburnt) ;

          })

     }

    
     
      

       
        
    

  