const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var con;
var con2;
function setup() {
	createCanvas(800, 600);
	
    
	var bopts = {
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
    }
	
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    

	bob1 = Bodies.circle(320,380,20,bopts)
	World.add(world,bob1)
	bob2 = Bodies.circle(360,400,20,bopts)
	World.add(world,bob2)
	bob3 = Bodies.circle(420,400,20,bopts)
	World.add(world,bob3)
	bob4 = Bodies.circle(470,400,20,bopts)
	World.add(world,bob4)
	Engine.run(engine);

	con = Matter.Constraint.create({
		pointA:{x:320, y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:350,
		stiffness:0.1
	  });
    World.add(world,con)
		
	
	con2 = Matter.Constraint.create({
		pointA:{x:360, y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:350,
		stiffness:0.1
	  });
    World.add(world,con2)


bob1.debug=true
	
  rectMode(CENTER)	
  ellipseMode(RADIUS)	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob1.position.x,bob1.position.y,20,20)
  ellipse(bob2.position.x,bob2.position.y,20,20)
  //ellipse(bob3.position.x,bob3.position.y,30)
  //ellipse(bob4.position.x,bob4.position.y,30)
  //call display() to show ropes here
  push();
 
  strokeWeight(2);
  stroke(255);                         
  line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
  line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
         
  pop();
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
