const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext('2d');
canvas.width=1600;
canvas.height=700;

let score=0;
let gameFrame=0;

let canvasPosition=canvas.getBoundingClientRect();

const mouse={
    x:canvas.width/2,
    y:canvas.height/2,
    click: false
}

canvas.addEventListener("mousedown",function(e)
{
    mouse.x=e.x-canvasPosition.left;
    mouse.y=e.y- canvasPosition.top;
})


const bubbleArray=[];

class bubble{
    constructor()
    {
        this.x=Math.random() * canvas.width;
        this.y=canvas.height+100;
        this.radius=30;
        this.speed=Math.random()*6+1;
        this.distance;
    }
    update()
    {
        this.y-=this.speed;
    }

    draw(){
        ctx.fillStyle="blue";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }

}

function handleBubbles()
{
    if(gameFrame%50==0)
    {
        bubbleArray.push(new bubble());

    }
    for(let i=0;i<bubbleArray.length;i++)
    {
        bubbleArray[i].update();
        bubbleArray[i].draw();
        if(bubbleArray[i].y<0)
        {
            bubbleArray.splice(i,1);
        }
    }

    for(let i=0;i<bubbleArray.length;i++)
    {
        if(bubbleArray[i].y<0- bubbleArray[i].radius*2)
        {
            bubbleArray.splice(i,1);
        }
    }
}

function animate()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleBubbles();
    gameFrame++;
    ctx.fillText('score:'+score,50,100)
    requestAnimationFrame(animate);
}

animate();