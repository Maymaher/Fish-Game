const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ok=document.getElementById("ok")


const leve2_div = document.getElementById("level-up2").style.display = "none"
const level2ok = document.getElementById("level2-ok")

const level3ok = document.getElementById("level3-ok")

var gameOver = false

let score = 0;
let stopScore=0;
let gameFrame = 0;

let canvasPosition = canvas.getBoundingClientRect();


const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}


canvas.addEventListener('mousemove',function(event){
    
    if(mouse.click==true)
    {
        mouse.x= event.x - canvasPosition.left;
        mouse.y= event.y - canvasPosition.top;
    }
  
   
    });
    


ok.addEventListener("click",function()
{
    mouse.click=true;
    document.getElementById("start-popup-desc").style.display="none"

})


level2ok.addEventListener("click", function () {
    mouse.click = true;
    document.getElementById("level-up2").style.display = "none"
    console.log("hereeeeeeeeeee");
    score = score + 1;


})


level3ok.addEventListener("click", function () {
    mouse.click = true;
    document.getElementById("level-up3").style.display = "none"
    console.log("hereeeeeeeeeee");
    score = score + 1;


})