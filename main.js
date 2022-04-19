canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="emtty";
var lastpositionofx,lastpositionofy;
color="red";
widthofline=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last position of x and y cordinates=");
        console.log("x="+lastpositionofx+"y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);
        console.log("current position of mouse x and mouse y cordinates=");
        console.log("x="+currentpositionofmousex+"y="+currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();
    }
 lastpositionofx=currentpositionofmousex;
 lastpositionofy=currentpositionofmousey;   
}
function my_touchmove(e){
        current_position_of_touch_x = e.touches[0].clientx-canvas.offsetleft;
        current_position_of_touch_y=e.touches[0].clienty-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle - color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_of_touch_x= current_position_of_touch_x;
        last_position_of_touch_y= current_position_of_touch_y;
}