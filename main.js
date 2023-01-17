noseX="";
noseY="";
GamaStatus=""

function startGame(){
	GameStatus="start";
	document.getElementById("status").innerHTML="El juego esta cargando";
}

function game (){
	console.log("noseX="+noseX+",noseY="+noseY);
}

function changeGameStatus(character){
	if((keyDown(control.up)||keyDown(control.left)||keyDown(control.rigth))&& gameConfig.status==="start"){
		world_start.play();
	}
}

function preload() {
	mario_gameover=loadSound("gameover.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console')

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function manualControl(character)
{
	if (keyDown(control.left)){
		character.velocity.x-=gameConfig.moveSpeed;
		character.changeAnimation('move');
		character.mirrorX(-1)
	}
	if (keyDown(control.rigth)){
		character.velocity.x+=gameConfig.moveSpeed;
		character.changeAnimation('move');
		character.mirrorX(1)
	}
}
function modelLoaded(){
	console.log('Modelo cargado')
}

function gotPoses(results){
	if (results.length>0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}








