// top navigation bar
//version 2


let caloriesMonitorButton;
let stepsMonitorButton;
let heartrateMonitorButton;
let sleeprateMonitorButton;

let data;
let drawbutton;
let canvas;


const xlabels = [];
const yCalories = [];

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}

function setup() {
    canvas=createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    canvas.style('display', 'block');
    // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
    
    caloriesMonitorButton = new calorieButton("calories burnt", 100, 100,"calories");
    stepsMonitorButton = new Button("steps taken", 100, 200,"steps");
    heartrateMonitorButton = new Button("heart rate", 100, 300,"heartrate");
    sleeprateMonitorButton = new Button("sleep hours", 100, 400,"sleephrs");
    background(200);

}


function draw() {

    
    caloriesMonitorButton.show();
    stepsMonitorButton.show();
    heartrateMonitorButton.show();
    sleeprateMonitorButton.show();
    //caloriesMonitorButton.CalChart();
     


}





class Button {

    constructor(name, x, y,chartOp) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.chartOp = chartOp;
        
    }

    show() {
        drawbutton = createButton(this.name);
        drawbutton.position(this.x, this.y);
        drawbutton.size(100,50);
        drawbutton.style('background-color','blue');
        drawbutton.style('font-size', '16px');
        drawbutton.style('color', 'white');
        drawbutton.mousePressed(chartIt);

    }
    
   
    
   
}

function displayChart() {

    console.log("hello");
 
    if (calorieButton.chartOp= "calories"){
        clear();
        console.log("hello");
        chartIt();
    }
    else if (stepsButton.chartOp ="steps"){
        clear();
        console.log("step2");
        steps();
    }
    /*
    else if (drawbutton.chartOp ="heartrate"){
        clear();
        console.log("step3");
        heartrate();
    }
    else if (drawbutton.chartOp = "sleephrs"){
        clear();
        console.log("step4");
        sleepduration();
    }
*/

}
    /*
      // preload table data
        function preload() {
        try{
            data = loadTable( 'activity_generated.csv', 'csv', 'header');
        }
        catch(err){
            console.log(err);
        }
        console.log(data);
       /* const table = data.split('\n').slice(1);
        const rows = table.split('\n');
        table.forEach(row => {
    
            const columns = row.split(',');
            const days = columns[0];
            const tokens = days.split('-');
    
            const yyyy = parseInt(tokens[0]);
            const mm = parseInt(tokens[1] - 1);
            const dd = parseInt(tokens[2]);
            const formatDate = Date.UTC(yyyy, mm, dd);
    
            xlabels.push(mm);
    
            const calburnt = parseFloat(columns[1]);
            yCalories.push(calburnt);
            console.log(days, calburnt);
    
        })
      
    
       }
    
       */
    
    



class calorieButton extends Button {
    
    CalChart() {
     
          chartIt();
      }
    

}


class stepsButton extends Button {
    
    CalChart() {
      {
          steps();
      }
    }

}





async function getData() {

    const response = await fetch('activity_generated.csv');

    const data = await response.text();
    //console.log(data);
        const calburnt = [];
        const stepstaken = [];
        const distscore  = [];
        const heartrate  = [];
        const sleephrs  = [];
   

    const table = data.split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');
        const days = columns[0];
        const tokens = days.split('-');

        const yyyy = parseInt(tokens[0]);
        const mm = parseInt(tokens[1] - 1);
        const dd = parseInt(tokens[2]);
        const formatDate = Date.UTC(yyyy, mm, dd);

        xlabels.push(dd);

        
        calburnt.push(parseFloat(columns[1]));
        stepstaken.push(14 + parseFloat(columns[2]));
        distscore.push(14 + parseFloat(columns[3]));
        heartrate.push(14 + parseFloat(columns[4]));
        sleephrs.push(14 + parseFloat(columns[5]));

    }); 
    
    return {xlabels,calburnt,stepstaken,distscore,heartrate,sleephrs};

}