const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
let gameFrame = 0;

let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}

canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
})


const bubbleArray = [];
const bubbleImage=new Image();
bubbleImage.src="./img/bubble_pop_frame_01.png"

class bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 30;
        this.speed = Math.random() * 7 + 1;
        this.distance;
        this.counted = false;
    }
    update() {
        this.y -= this.speed;
        // const dx=this.x-player.x;
        // const dy=this.y-player.y;
        // this.distance = Math.sqrt(dx * dx + dy * dy)
    }

    draw() {
        // ctx.fillStyle = "blue";
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();
        ctx.drawImage(bubbleImage,this.x-39,this.y-39,this.radius*2.6,this.radius*2.6);
    }

}

function handleBubbles() {
    if (gameFrame % 50 == 0) {
        bubbleArray.push(new bubble());

    }
    for (let i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
        bubbleArray[i].draw();
        // if(bubbleArray[i].y<0)
        // {
        //     bubbleArray.splice(i,1);
        // }
        if (bubbleArray[i].y < 0 - bubbleArray[i].radius * 2) {
            bubbleArray.splice(i, 1);
            i--;
        }
       
            // else if(bubbleArray[i].distance<bubbleArray[i].radius+player.radius)
            // {
            //     if(!bubbleArray[i].counted)
            //     {
            //         score++;
            //         bubbleArray[i].counted=true;
            //         bubbleArray.splice(i,1);
                        //    i--;
            //     }
            // }
     
    }

   
}
const background=new Image();
background.src="./img/Download Nature Scene With Coral Reef Underwater for free.jpg";

function handleBackground()
{
   ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleBackground();
    handleBubbles();
   
    gameFrame++;
    ctx.fillText('score:' + score, 50, 100)
    ctx.fillStyle = "black";
    ctx.font = "50px Arial";
    requestAnimationFrame(animate);
}

animate();