 var position;
 var velocity;
 var diameter;

function setup() {
  createCanvas(300, 300);
  background(255);
  position = createVector(100,100);
  velocity = createVector(2.5,5);
  diameter = 16;
}

function draw() {
	background(255);
	position.add(velocity);

	if((position.x>width-diameter) || (position.x <0 + diameter)){
		velocity.x = velocity.x * -1;
	}

	if((position.y>height - diameter) || (position.y <0 + diameter)){
		velocity.y = velocity.y * -1;
	}

	stroke(0);
	strokeWeight(2);
	fill(175);
	ellipse(position.x, position.y, diameter,diameter);

}

