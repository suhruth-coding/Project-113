function preload(){
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, 400, 400);
    fill(123,23,34)
    rect(5, 5, 55, 55, 20);
    fill(123,23,34)
    rect(340, 5, 55, 55, 20);
    fill(123,23,34)
    rect(5, 340, 55, 55, 20);
    fill(123,23,34)
    rect(340, 340, 55, 55, 20);
    fill(255, 165, 0)
    rect(5, 60, 55, 280);
    fill(255, 165, 0)
    rect(340, 60, 55, 280);
    fill(255, 165, 0)
    rect(60, 5, 280, 55);
    fill(255, 165, 0)
    rect(60, 340, 280, 55);
}

function take_snapshot(){
    save('Mypic.png');
}