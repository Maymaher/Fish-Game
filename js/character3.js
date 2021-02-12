
const playerLeft=new Image();
playerLeft.src="./img/char3-preview.png";
 
 const playeRight=new Image();

 playeRight.src="./img/char3-co-flipped.png"
 


class Player3{
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
                this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth*1.5,this.spriteHeight*1.5);
              
          
       }
        else if (this.x<mouse.x){
           
            
            ctx.drawImage( playeRight,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
            this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth*1.5,this.spriteHeight*1.5);


        
    }
//    

        ctx.restore()
       
     

    }
}


 const player=new Player3();
 
 function animate() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
 
     handleBackground();
     if(mouse.click==true)
     {
        handleBubbles();
        handeleEnemies()
     }
     
     player.update();
     player.draw();
 
     gameFrame++;
     ctx.fillText('score:' + score, 50, 100)
     ctx.fillStyle = "black";
     ctx.font = "50px Arial";
     if (!gameOver)
     requestAnimationFrame(animate);
 }
 
 animate();