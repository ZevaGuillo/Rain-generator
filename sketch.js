let drops = [];
const lengthRange = document.getElementById('lengthRange');
const speedRange = document.getElementById('speedRange');
const bulkRange = document.getElementById('bulkRange');
const inputColor = document.getElementById('inputColor');



function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [ 
    parseInt(result[1], 16), 
    parseInt(result[2], 16), 
    parseInt(result[3], 16)
 ] : null;
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  
  for(let i=0; i< 500; i++){
    drops.push(new Drop());
  }
}

function draw() {
  // put drawing code here
  background(50, 50, 50);
  for(let drop of drops){
   
    drop.fall();
    drop.colorGenerate(hexToRgb(inputColor.value));
    drop.init(lengthRange.value,speedRange.value,bulkRange.value);
    drop.show();
    
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}