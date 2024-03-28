let im = [];
let imBG;
let base;
let z = 0;
let a = 26; 
let extraCanvas;

function preload() {
  for (var i = 0; i < a; i++) {
    im[i] = loadImage('assets/flower-' + i + '.png');
  }
  imBG = loadImage('assets/cover.png');
  base = loadImage('assets/base.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
}

function mouseClicked() {
  extraCanvas.image(im[z], mouseX - (im[z].width / 4), mouseY - (im[z].height / 4), im[z].width / 2, im[z].height / 2);
  if (z < im.length - 1) {
    z++;
  } else {
    z = 0;
  }
}

function draw() {
  background(226,230,211);
  image(base, width/6, width/3.5, width*0.65, width*0.8);
  image(extraCanvas, 0, 0);
  image(im[z], mouseX - (im[z].width / 4), mouseY - (im[z].height / 4), im[z].width / 2, im[z].height / 2);
  image(imBG, -1, -1, windowWidth+2, windowHeight+2);
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('My flower garden', 'png');
    
  } else if (keyCode === RIGHT_ARROW) {
        z++;
        z= z%a    
    
  } else if (keyCode === LEFT_ARROW) {
        z--;
        if(z<0){z=a-1} 
 }
}

//Clear Canvas
function keyTyped() {
  if (key === 'c') {
     extraCanvas.clear();
  } 
}
