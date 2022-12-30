const drawingArea = document.getElementById('drawingArea');
const resetBtn = document.getElementById('reset');
const randomColorBtn = document.getElementById('randomColor');
const rainbowColorBtn = document.getElementById('rainbowColor');
const blackColorBtn = document.getElementById('blackColor'); 
const redBtn = document.getElementById('redDiv');
const greenBtn = document.getElementById('greenDiv');
const blueBtn = document.getElementById('blueDiv');
const smallRadio = document.getElementById('smallRadio');
const mediumRadio = document.getElementById('mediumRadio');
const largeRadio = document.getElementById('largeRadio');

let canvasWidth =  650;
let canvasHeight = 600;
let boxSize = 50;
let numDivsX = canvasWidth / boxSize;
let numDivsY = canvasHeight / boxSize;
let totalDivs = numDivsX * numDivsY;
let divList = []

function getCanvasSize()
{
    if (smallRadio.checked)
    {
        boxSize = 5;
    } else if (mediumRadio.checked) {
        boxSize = 25;
    } else if (largeRadio.checked) {
        boxSize = 50;
    }
}
//Draw new divs to drawingArea container
function drawCanvas()
{
    numDivsX = canvasWidth / boxSize;
    numDivsY = canvasHeight / boxSize; 

    for (i = 0; i < numDivsY; i++)
    {
        const divRow = document.createElement('div');
        divRow.style.width = `${canvasWidth}px`;
        divRow.style.height = `${boxSize}px`;
        divRow.style.display = "flex";
        
        for (x = 0; x < numDivsX; x++)
        {
            const divColumn = document.createElement('div');
            divColumn.style.width = `${boxSize}px`;
            divColumn.style.height = `${boxSize}px`;
            divRow.appendChild(divColumn);
            divList.push(divColumn);
        }

        drawingArea.appendChild(divRow);
    }
}


function draw(divList)
{
    divList.forEach((e) =>{
        e.addEventListener('mouseover', function(){
            e.style.backgroundColor = drawColor();
        })
    
    })
}

function drawRandom()
{
    rValue = Math.floor(Math.random() * 255);
    gValue = Math.floor(Math.random() * 255);
    bValue = Math.floor(Math.random() * 255);

    return `rgb(${rValue}, ${gValue}, ${bValue})`
}

let colorCount = 0;
function drawRainbow()
{
    //RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET
    const red = "rgb(255,0,0)";
    const orange = "rgb(255,172, 28)";
    const yellow = "rgb(255,255,0)";
    const green = "rgb(0,255,0)";
    const blue = "rgb(0,0,255)";
    const indigo = "rgb(75,0,130)";
    const violet = "rgb(127,0,255)";

    const colorList = [red, orange, yellow, green, blue, indigo, violet];

    if (colorCount < 6){
        colorCount++;
    } else {
        colorCount = 0;
    }
    return colorList[colorCount];

}

let currentColor = "";

function checkColor(b)
{
    currentColor = b.id;
}

function addButtonEvents()
{
    let btnList = [rainbowColorBtn, randomColorBtn, blackColorBtn, redBtn, greenBtn, blueBtn];

    btnList.forEach((b) => {
        b.addEventListener('click', function(){
            checkColor(b);
        })
    })
}

addButtonEvents();

function drawColor()
{
    if (currentColor === "rainbowColor")
    {
        return drawRainbow();
    } else if (currentColor === "randomColor") {
        return drawRandom();
    } else if (currentColor === "blackColor") {
        return "rgb(0,0,0)";
    } else if (currentColor === "redDiv") {
        return "rgb(255,0,0)";
    } else if (currentColor === "greenDiv") {
        return "rgb(0,255,0)";
    } else if (currentColor === "blueDiv") {
        return "rgb(0,0,255)";
    }
}

//RESET CANVAS
resetBtn.addEventListener('click', function(){
    divList.forEach((e) =>{
        e.remove();
        divList = [];
    })
    getCanvasSize();
    drawCanvas();
    draw(divList);
    console.log('clicking');
})

getCanvasSize();
drawCanvas();
draw(divList);
