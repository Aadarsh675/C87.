canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
blockWidth = 30;
blockHeight = 30;
playerObject = "";
blockObject = "";
function playerUpdate(){
    fabric.Image.fromURL("player.png", function (Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img, function (Img){
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed together");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("currect_width").innerHTML = blockWidth;
        document.getElementById("currect_height").innerHTML = blockHeight;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed together");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(keyPressed == "38"){
        //up();
        console.log("up");
    }
    if(keyPressed == "40"){
        //down();
        console.log("down");
    }
    if(keyPressed == "37"){
        //left();
        console.log("left");
    }
    if(keyPressed == "39"){
        //right();
        console.log("right");
    }
    if(keyPressed == "87"){
        new_img("wall.png");
        console.log("w");
    }
    if(keyPressed == "71"){
        new_img("ground.png");
        console.log("g");
    }
    if(keyPressed == "76"){
        new_img("light_green.png");
        console.log("l");
    }
    if(keyPressed == "84"){
        new_img("trunk.png");
        console.log("t");
    }
    if(keyPressed == "82"){
        new_img("roof.png");
        console.log("r");
    }
    if(keyPressed == "89"){
        new_img("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == "68"){
        new_img("dark_green.png");
        console.log("d");
    }
    if(keyPressed == "85"){
        new_img("different.png");
        console.log("u");
    }
    if(keyPressed == "67"){
        new_img("cloud.png");
        console.log("c");
    }
}