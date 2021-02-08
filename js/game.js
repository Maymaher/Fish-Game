const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("w="+window.innerWidth);
console.log("h+"+window.innerHeight);

let score = 0;
let gameFrame = 0;

let canvasPosition = canvas.getBoundingClientRect();


const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}

// canvas.addEventListener("mousedown", function (e) {
//     mouse.x = e.x - canvasPosition.left;
//     mouse.y = e.y - canvasPosition.top;
// })
// console.log("cnv position==="+canvasPosition);
canvas.addEventListener('mousemove',function(event){
    mouse.click=true;
    mouse.x= event.x - canvasPosition.left;
    mouse.y= event.y - canvasPosition.top;
    // console.log("line 22",mouse.x,mouse.y);
    });
    

canvas.addEventListener('mouseup',function()
{

mouse.click=false;

})

const playerLeft=new Image();
playerLeft.src="./img/imageonline-co-resizedimage (3).png";

playerLeft.setAttribute('bordee-radius','25px')
 const playeRight=new Image();
  playeRight.src="./img/imageonline-co-flipped (8).png"
// const playedown_left=new Image();
// playedown_left.src="./img/imageonline-co-flipped (7).png"
// const playedown_Rigth=new Image();
//  playedown_Rigth.src="./img/imageonline-co-flipped (9).png"