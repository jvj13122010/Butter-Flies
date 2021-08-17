canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

roverWidth=100;
roverHeight=90;
rover_x=10;
rover_y=10;

backgroundImg="Fairy Fattt.jpg";
roverImg="butter Eating Honey.png";

function add() {
    backgroundTag=new Image();
    backgroundTag.onload=uploadBackground;
    backgroundTag.src=backgroundImg;

    roverTag=new Image();
    roverTag.onload=uploadRover;
    roverTag.src=roverImg;
}

function uploadBackground(){
    ctx.drawImage(backgroundTag,0,0,canvas.width,canvas.height);

}

function uploadRover(){
    ctx.drawImage(roverTag,rover_x,rover_y,roverWidth,roverHeight);

}



window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        console.log("movieHallUp");
        up();
        

    }
    if (keyPressed=='40'){
        down();
        console.log("movieHallDown");
    }
    // if(keyPressed>=65 && keyPressed<=90){
    //     console.log("alpha");
    // }
    if (keyPressed=='37'){
        left();
        console.log("movieHallLeft");

    }
    if (keyPressed=='39'){
        right();
        console.log("MovieHallRight");
    }
}
function up() {
if (rover_y>= 0){
    rover_y=rover_y-10;
    console.log("Moving Up");
    uploadBackground();
    uploadRover();
}

}
function down() {
    if (rover_y<= 500){
        rover_y=rover_y+10;
        console.log("Moving Down");
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (rover_x>= 0){
        rover_x=rover_x-10;
        console.log("Moving Left");
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x<= 700){
        rover_x=rover_x+10;
        console.log("Moving Right");
        uploadBackground();
        uploadRover();
    }
}