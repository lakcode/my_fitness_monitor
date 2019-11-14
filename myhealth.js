// top navigation bar


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
    
    caloriesMonitorButton = new calorieButton("calories burnt", 100, 100);
    stepsMonitorButton = new Button("steps taken", 100, 150);
    heartrateMonitorButton = new Button("heart rate", 100, 200);
    sleeprateMonitorButton = new Button("sleep hours", 100, 250);


}


function draw() {

    background(200);
    caloriesMonitorButton.show();
    stepsMonitorButton.show();
    heartrateMonitorButton.show();
    sleeprateMonitorButton.show();
    //caloriesMonitorButton.displayCalChart();
    


}





class Button {

    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;

    }

    show() {
        drawbutton = createButton(this.name);
        drawbutton.position(this.x, this.y);
        drawbutton.size(100,60);
        drawbutton.style('background-color','blue');
        drawbutton.style('font-size', '18px');
        drawbutton.style('color', 'white');
        drawbutton.mousePressed(chartIt);

    }
    displayCalChart() {
        drawbutton.mousePressed("chartIt");

    }

}

class calorieButton extends Button {

    displayCalChart() {
        drawbutton.mousePressed(chartIt);

    }

}

function greet() {

    console.log("hello");

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







async function getData() {

    const response = await fetch('activity_generated2.csv');

    const data = await response.text();
    //console.log(data);
    
   

    const table = data.split('\n').slice(1);
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
        const stepstaken = parseFloat(columns[2]);
        const distscore  = parseFloat(columns[3]);
        const heartrate  = parseFloat(columns[4]);
        const sleephrs  = parseFloat(columns[5]);

        yCalories.push(calburnt);
        console.log(days, calburnt);

    })
    return {xlabels,yCalories};

}



