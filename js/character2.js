const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gameOver = false

let score = 0;
let gameFrame = 0;

let canvasPosition = canvas.getBoundingClientRect();


const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}


canvas.addEventListener('mousemove',function(event){
 
   mouse.click=true
        mouse.x= event.x - canvasPosition.left;
        mouse.y= event.y - canvasPosition.top;

    
  
    console.log("line 22",mouse.x,mouse.y);
    });
    

canvas.addEventListener('mouseup',function()
{

mouse.click=false;

})

// ok.addEventListener("click",function()
// {
//     mouse.click=true;
//     document.getElementById("start-popup-desc").style.display="none"

// })

// player
const playerLeft=new Image();
playerLeft.src="./img/character2-co-resizedimage.png";
 
 const playeRight=new Image();

 playeRight.src="./img/character2-co-flipped.png"
 


class Player2{
    constructor(){
        this.x=canvas.width/2;
        this.y=canvas.height/2;
        console.log( "xx"+this.x)
        console.log( "yyy"+this.y)

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

        // if(mouse.click)
        // {
        //      console.log("move");
        //     ctx.lineWidth=0.2;
        //     ctx.beginPath();
        //     ctx.moveTo(this.x,this.y);
        //     ctx.lineTo(mouse.x,mouse.y);
        //     ctx.stroke();

        // }
       
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
//     else{
//         console.log(score);
//         playerLeft.src="./img/character2-co-resizedimage.png";
//         playeRight.src="./img/character2-co-flipped.png"
    
//     if(this.x>=mouse.x){
        
        
//         ctx.drawImage( playerLeft,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
//             this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth/1.5,this.spriteHeight/1.5);
          
      
//    }
//     else if (this.x<mouse.x){
       
        
//         ctx.drawImage( playeRight,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
//         this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth/1.5,this.spriteHeight/1.5);


//     }

//     }
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


 const player=new Player2();
 

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    player.update();
    player.draw();

    gameFrame++;
    
    requestAnimationFrame(animate);
}

animate();