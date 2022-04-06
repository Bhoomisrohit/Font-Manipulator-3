rightWrist=0;
leftWrist=0;
difference=0;
function setup()
{
   video=createCapture(VIDEO);
   video.size(550,500);

   canvas=createCanvas(550,500);
   canvas.position(560,150);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotposes);
}

function modelLoaded()
{
   console.log("poseNet is initialized");
}

function gotposes(results)
{
  if(results.length>0)
  {
     console.log(results);
     rightWrist=results[0].pose.rightWrist.x; 
     leftWrist=results[0].pose.leftWrist.x;
     difference=floor(leftWrist-rightWrist);
  }
}

function draw()
{
   background("#FFDAB9");
   textsize(difference);
   Fill("#00CED1")
   text("Bhoomi",30,300);
}


