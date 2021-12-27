noseX=0;
noseY=0;
function preload()
{
    clown=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function snap()
{
    save('myfilter.png');
}
function draw()
{
    image(video,0,0,300,300);
    image(clown,noseX,noseY,30,30);
}
function modelloaded()
{
    console.log('model is loaded');
}
function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
}