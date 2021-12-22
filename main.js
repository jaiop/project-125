difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(550,500);

  canvas = createCanvas(550,450);
  canvas.position(650,100);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x
        rightWristY = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist - "+leftWristX+"right wrist - "+rightWristX );
    }
}
function draw()
{
    background("#dfeff7");
    document.getElementById("text").innerHTML = "font size of the text would be "+difference;
    fill("#aeeb34")
    text("Jai", 50,300);
    textSize(difference)
}
