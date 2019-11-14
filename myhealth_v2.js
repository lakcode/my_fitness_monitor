// My Health Monitor
//version 2
// Author: Lakshmi Sivaram
// to display the fitness measures over a period of time

let img;                // background image
function preload() {
  img = loadImage('fitness3.jpg');
}

// declare buttons for fitness measures
let caloriesMonitorButton;
let stepsMonitorButton;
let heartrateMonitorButton;
let sleeprateMonitorButton;
let stepVssleepMonitorButton;

let data;
let drawbutton;
let canvas;
let appName;

// initialise variables for charts
const xlabels = [];
const yCalories = [];

// to adjust the window while user resizing
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}

function setup() {
    canvas=createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');       // to make canvas go in the background
    canvas.style('display', 'block');
    canvas.background('light orange');
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    // create buttons as objects of class
    caloriesMonitorButton = new calorieButton("calories burnt", 100, 100);
    stepsMonitorButton = new stepsButton("steps taken", 100, 200);
    heartrateMonitorButton = new heartButton("heart rate", 100, 300);
    sleeprateMonitorButton = new sleepButton("sleep hours", 100, 400);
    stepVssleepMonitorButton = new stepSleepButton("DistScore Vs Sleep", 100, 450);

}


function draw() {
    background(200);
    image(img,0,0);
    appName= createSpan('MY HEALTH MONITOR');
    appName.position(100,50); 
    appName.style('font-size', '24px');
    appName.style('color','blue');
    
    // call functions on class objects
    caloriesMonitorButton.show();
    stepsMonitorButton.show();
    heartrateMonitorButton.show();
    sleeprateMonitorButton.show();
    stepVssleepMonitorButton.show();
    //caloriesMonitorButton.displayCalChart();
 

}

//Button class : Parent

class Button {

    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;

    }

    displayCalChart() {
        drawbutton.mousePressed(chartIt);

    }

}

//Child class : inherit from Button parent
class calorieButton extends Button {
    constructor(name, x, y) {
        super(name, x, y);

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

//Child class : inherit from Button parent

class stepsButton extends Button {
    constructor(name, x, y) {
        super(name, x, y);

    }
    show() {
        drawbutton = createButton(this.name);
        drawbutton.position(this.x, this.y);
        drawbutton.size(100,50);
        drawbutton.style('background-color','blue');
        drawbutton.style('font-size', '16px');
        drawbutton.style('color', 'white');
        drawbutton.mousePressed(steps);

    }

}

//Child class : inherit from Button parent
class heartButton extends Button {
    constructor(name, x, y) {
        super(name, x, y);

    }
    show() {
        drawbutton = createButton(this.name);
        drawbutton.position(this.x, this.y);
        drawbutton.size(100,50);
        drawbutton.style('background-color','blue');
        drawbutton.style('font-size', '16px');
        drawbutton.style('color', 'white');
        drawbutton.mousePressed(heartrate);

    }

}

//Child class : inherit from Button parent
class sleepButton extends Button {
    constructor(name, x, y) {
        super(name, x, y);

    }
    show() {
        drawbutton = createButton(this.name);
        drawbutton.position(this.x, this.y);
        drawbutton.size(100,50);
        drawbutton.style('background-color','blue');
        drawbutton.style('font-size', '16px');
        drawbutton.style('color', 'white');
        drawbutton.mousePressed(sleepduration);

    }

}


//Child class : inherit from Button parent
class stepSleepButton extends Button {
    constructor(name, x, y) {
        super(name, x, y);

    }
    show() {
        drawbutton = createButton(this.name);
        drawbutton.position(this.x, this.y);
        drawbutton.size(100,50);
        drawbutton.style('background-color','green');
        drawbutton.style('font-size', '16px');
        drawbutton.style('color', 'white');
        drawbutton.mousePressed(stepVssleepduration);

    }

}

function greet() {

    canvas.redraw();
    

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


