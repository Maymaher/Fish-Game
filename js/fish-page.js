//canvas setup
const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext('2d')
var g=document.getElementById("canvas1")
var canvasRect = canvas.getBoundingClientRect(); 


canvas.width=window.innerWidth
canvas.heigth=window.innerHeight
console.log(window.innerWidth);
console.log(window.innerHeight);

let score =0;
let gameFrame=0;
ctx.font='50px Georgia';
let canvasposition=canvas.getBoundingClientRect();


const mouse={
x:canvas.width/2,
y:canvas.heigth/2,
click:false
}
canvas.addEventListener('mousemove',function(event){
mouse.click=true;
mouse.x= event.x -canvasposition.left;
mouse.y= event.y - canvasposition.top;
//console.log("line 22",mouse.x,mouse.y);
});
console.log(canvasposition);
canvas.addEventListener('mouseup',function()
{

mouse.click=false;

})
//player
const playerLeft=new Image();
playerLeft.src="img/imageonline-co-resizedimage (3).png";

// //playerLeft.setAttribute('bordee-radius','25px')
 const playeRight=new Image();
  playeRight.src="img/imageonline-co-flipped (8).png"
const playedown_left=new Image();
playedown_left.src="img/imageonline-co-flipped (7).png"
const playedown_Rigth=new Image();
 playedown_Rigth.src="img/imageonline-co-flipped (9).png"

class Player{
    constructor(){
        this.x=canvas.width/2;
        this.y=canvas.heigth/2;
        this.radius=10;
        this.angle=0;
        this.frameX=0;
        this.frameY=0;
        this.frame=0;
        this.spritewidth=498;
        this.spriteHeight=327;
    }
    update(){

        const dx=this.x - mouse.x;
        const dy=this.y - mouse.y;
        //let theta=Math.atan2(dy,dx);
        //console.log(theta);
       // this.angle=theta;
        if(mouse.x!=this.x)
        {
            this.x -= dx/30;
        }

        if(mouse.y!=this.y)
        {
            this.y -= dy*2/30;
        }

    }
    draw(){

        if(mouse.click)
        { console.log("move");
            ctx.lineWidth=0.2;
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();

        }
       
        //ctx.fillStyle='red';
        //ctx.beginPath();
        //ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
       // ctx.fill();
        //ctx.closePath()
       // ctx.fillRect(this.x,this.y,this.radius,2);
       ctx.save();
     //   ctx.rotate(this.angle)
        ctx.translate(this.x,this.y);
        if(this.x>=mouse.x){
            
            
            ctx.drawImage( playerLeft,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth,this.spriteHeight);
              
          
       }
        else if (this.x<mouse.x){
           
            
            ctx.drawImage( playeRight,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
            this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth,this.spriteHeight);


        }
//          if(this.y<mouse.y && this.x>=mouse.x) 
//         { 
//             //    context.clearRect(0, 0, canvas.width, canvas.height);

//             playeRight.width=30
//             playeRight.height=20
            

//             console.log("enter");
//             ctx.drawImage(playedown_left,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
//                 this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth,this.spriteHeight);

//         }
//         else if(this.y<mouse.y && this.x<mouse.x) 
              
// {      
//          ctx.drawImage(playedown_Rigth,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
//                     this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth,this.spriteHeight);
    
            
//         }


        ctx.restore()
       
     

    }
}
const player=new Player();

//animate loop

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.heigth)
    player.update();
    player.draw();
   gameFrame++;

    requestAnimationFrame(animate);
    //requestAnimationFrame(player.draw);

}

animate();