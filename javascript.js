const drawingArea = document.getElementById('drawingArea');

let canvasWidth =  700;
let canvasHeight = 600;

let numDivsX = canvasWidth / 50;
let numDivsY = canvasHeight / 50;
let totalDivs = numDivsX * numDivsY;

for (i = 0; i < totalDivs; i++)
{
    let newDiv = document.createElement('div');
    newDiv.style.width = '50px';
    newDiv.style.height = '50px';
    newDiv.style.backgroundColor = 'black';
    newDiv.style.position = 'relative';
    drawingArea.appendChild(newDiv);
}