img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav")
	img = loadImage("mario05.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function draw() {
background("#D3D3D3");
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	if(noseX > 300)
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
		marioY = marioY - 1;
	}

	image(img, marioX, marioY, 40, 70);
	game()
}
function modelLoaded() {
	console.log('Model Loaded!');
}
function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		nose = results[0].pos.noe.x;
		noseY = results[0].pose.nose.y;

	}
}





