//images
//backdrop of the first few scenes
let backdrop;
//straight face duck
/*
let duck1;
//happy duck
let duck2;
//sad duck
let duck3;
//straight face dog
let dog1;
//happy dog
let dog2;
//sad dog
let dog3;
*/
//array for the emotions of each animal
let duck = new Array(3);
let dog = new Array(3);
//variables
var duckMove;
var scene;


function setup() {
  createCanvas(1000, 1000);
  backdrop = loadImage("backgroundone.jpg");
	/*
	duck1 = loadImage("duck1.png");
	duck2 = loadImage("duck2.png");
	duck3 = loadImage("duck3.png");
	dog1 = loadImage("dog1.png");
	dog2 = loadImage("dog2.png");
	dog3 = loadImage("dog3.png");
	*/
	//create arrays of images with dog and duck emotions
	for(int i = 0; i < 3; i++) {
		duck[i] = loadImage("duck" + (i + 1) + ".png");
		dog[i] = loadImage("dog" + (i + 1) + ".png");
	}
	
	//original position of the duck
	duckMove = 150;
	scene = 1;
}

function draw() {
	//change scenes
	//scene = 1;
	if(scene == 1) {
		sceneOne();
	}
	
	//if(scene == 2) {
	//	sceneTwo();
	//}
	
}


function duck(float xDuck) {
	//display duck
	image(duck[1], xDuck, 400, 240, 400);
}

function dog(float xDog) {
	//display dog
	image(dog[1], xDog, 400, 325, 400);
}

function dialogueOne() {
	fill(0);
	textSize(18);
	text("Hey, are you able to talk right now?", 630, 350);
}

function responseOne() {
	fill(0);
	textSize(18);
	text("1 - Of course!", 350, 330);
	text("2 - Um...okay...", 350, 350);
	text("(Press or 1 or 2 keys to select)", 350, 370);
}

function dialogueTwo() {
	fill(0);
	textSize(18);
	text("Great! I'm new to this area and I'm ", 630, 350);
	text("looking for someone to hang with.", 630, 370);
}

function responseTwo() {
	fill(0);
	textSize(18);
	text("1 - Nice to meet you!", 350, 330);
	text("2 - Cool.", 350, 350);
	text("(Press or 1 or 2 keys to select)", 350, 370);
}

function keyPressed() {
	
	if(key == 100) {
		duckMove += 5;
	}
	
	if(key == 97) {
		duckMove -= 5;
	}
	
	//if(key == 49) {
	//	scene = 2;
	//}
}



function sceneOne() {
	
	//display the background of the first scenes
  image(backdrop, 0, 0, width, height);
	//display the duck character and use a + d keys to move left and right
	duck(duckMove);
	//display the dog character
	dog(600);
	dialogueOne();
	//show available responses to the dog after moving towards the dog
	if(duckMove < 330 && duckMove > 280) {
	responseOne();
	}
}

/*
void sceneTwo() {
	//display the background of the first scenes
  image(backdrop, 0, 0, width, height);
	//display the duck character and use a + d keys to move left and right
	duck(1, duckMove);
	//display the dog character
	dog(1, 600);
	dialogueTwo();
	//show available responses to the dog after moving towards the dog
	if(duckMove < 330 && duckMove > 280) {
	responseTwo();
	}
}
*/
	

