let myForm;
// let myAnxiety;
// let myContentment;
// let myStress;
// let myProductivity;
// let mySelfWorth;


let data = {
	anxiety: 5,
  contentment: 5,
  stress: 5,
  productivity:5,
  selfWorth:5
}
let starWidth=80;

function setup() {
  createCanvas(400, 400).parent("#myCanvas");
  myForm = select("#myForm");
  
  myForm.changed(updateData);
}
    
function updateData(e){
  let form = new FormData(e.currentTarget);
  
  data.anxiety = form.get('anxietyInput');
  data.contentment = form.get('contentmentInput');
  data.stress = form.get('stressInput');
  data.productivity = form.get('productivityInput');
  data.selfWorth = form.get('swInput');
}

function draw() {
  background(220);
  
  push();
  translate(width/2, height/2);
  beginShape();
  
  vertex(
  	cos( radians(0)) * map(data.anxiety, 1, 10, 1, starWidth),
    sin( radians(0)) * map(data.anxiety, 1, 10, 1, starWidth)
  )

  vertex(
  	cos( radians(360/5)) * map(data.contentment, 1, 10, 1, starWidth),
    sin( radians(360/5)) * map(data.contentment, 1, 10, 1, starWidth)
  )
  
  vertex(
  	cos( radians(2* 360/5 )) * map(data.stress, 1, 10, 1, starWidth),
    sin( radians(2* 360/5 )) * map(data.stress, 1, 10, 1, starWidth)
  )
  
  vertex(
  	cos( radians(3* 360/5)) * map(data.productivity, 1, 10, 1, starWidth),
    sin( radians(3* 360/5)) * map(data.productivity, 1, 10, 1, starWidth)
  )
  
  vertex(
  	cos( radians(4* 360/5)) * map(data.selfWorth, 1, 10, 1, starWidth),
    sin( radians(4* 360/5)) * map(data.selfWorth, 1, 10, 1, starWidth)
  )
  
  endShape(CLOSE);
  pop();
  
}