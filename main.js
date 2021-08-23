noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    canvas=createCanvas(500,500)
    canvas.position(800, 200)
    video=createCapture(VIDEO);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){

}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);   
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('#686b6a');
    document.getElementById("square_side").innerHTML="Width and height of the square will be= "+difference+"px";
    fill('#10e689');
    stroke('#f7fffc');
    square(noseX, noseY, difference);
}

