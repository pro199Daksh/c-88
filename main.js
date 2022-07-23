var canvas = new fabric.Canvas("myCanvas")

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;


        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object);
    })
}
function block_update(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        block_object = Img;


        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_object);
    })
}
window.addEventListener("keydown", myKeydown)
function myKeydown(e) {
    var key_press = e.keyCode;
    if (e.shiftKey == true && key_press == "80") {
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (e.shiftKey == true && key_press == "77") {
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (key_press == "40") {
        console.log("down")
        down()
    }
    if (key_press == "38") {
        console.log("up")
        up()
    }
    if (key_press == "37") {
        console.log("left")
        left()
    }
    if (key_press == "39") {
        console.log("right")
        right()
    }
    if(key_press=="67"){
        block_update("cloud.jpg")
        console.log("c")
    }
    if(key_press=="68"){
        block_update("dark_green.png")
        console.log("d")
    }
    if(key_press=="71"){
        block_update("ground.png")
        console.log("g")
    }
    if(key_press=="76"){
        block_update("light_green.png")
        console.log("l")
    }
    if(key_press=="82"){
        block_update("roof.jpg")
        console.log("r")
    }
    if(key_press=="84"){
        block_update("trunk.jpg")
        console.log("t")
    }
    if(key_press=="85"){
        block_update("unique.png")
        console.log("u")
    }
    if(key_press=="87"){
        block_update("wall.jpg")
        console.log("w")
    }
    if(key_press=="89"){
        block_update("yellow_wall.png")
        console.log("y")
    }
}
function up(){
    if(player_y > 0){
     player_y= player_y- block_height;
     console.log(player_y)
     canvas.remove(player_object)
     player_update()   
    }
}
function down(){
    if(player_y < 700){
     player_y= player_y+ block_height;
     console.log(player_y)
     canvas.remove(player_object)
     player_update()   
    }
}
function left(){
    if(player_x > 0){
     player_x= player_x- block_width;
     console.log(player_x)
     canvas.remove(player_object)
     player_update()   
    }
}
function right(){
    if(player_x < 900){
     player_x= player_x+ block_width;
     console.log(player_x)
     canvas.remove(player_object)
     player_update()   
    }
}