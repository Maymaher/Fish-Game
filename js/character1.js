// // canvas setup
// const canvas=document.getElementById("canvas1")
// const ctx=canvas.getContext('2d')
// var g=document.getElementById("canvas1")
// var canvasRect = canvas.getBoundingClientRect(); 

// canvas.width=window.innerWidth
// canvas.heigth=window.innerHeight
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// let score =0;
// let gameFrame=0;
// ctx.font='50px Georgia';
// let canvasposition=canvas.getBoundingClientRect();


// const mouse={
// x:canvas.width/2,
// y:canvas.heigth/2,
// click:false
// }

//player
const playerLeft=new Image();
playerLeft.src="./img/imageonline-co-resizedimage (3).png";

// //playerLeft.setAttribute('bordee-radius','25px')
 const playeRight=new Image();
  playeRight.src="./img/imageonline-co-flipped (8).png"
// // const playedown_left=new Image();
// // playedown_left.src="./img/imageonline-co-flipped (7).png"
// // const playedown_Rigth=new Image();
// //  playedown_Rigth.src="./img/imageonline-co-flipped (9).png"

const bubble1=new bubble();


class Player{
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


       ctx.save();
     //   ctx.rotate(this.angle)
        ctx.translate(this.x,this.y);
        if(score<5){
            if(this.x>=mouse.x){
                console.log("one");
                
                ctx.drawImage( playerLeft,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                    this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth/2,this.spriteHeight/2);
                  
              
           }
            else if (this.x<mouse.x){
               
                
                ctx.drawImage( playeRight,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth/2,this.spriteHeight/2);
    
    
            }
        }
        else if(score<=10){
            console.log("two");
           
            if(this.x>=mouse.x){
                
                
                ctx.drawImage( playerLeft,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                    this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth,this.spriteHeight);
                  
              
           }
            else if (this.x<mouse.x){
               
                
                ctx.drawImage( playeRight,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth,this.spriteHeight);
    
    
            }
        }
    
    
        else {
            console.log("therd");
            if(this.x>=mouse.x){
                
                
                ctx.drawImage( playerLeft,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                    this.spritewidth,this.spriteHeight,0-52,0-61,this.spritewidth*1.2,this.spriteHeight*1.2);
                  
              
           }
            else if (this.x<mouse.x){
               
                
                ctx.drawImage( playeRight,this.frameX*this.spritewidth,this.frameY*this.spriteHeight,
                this.spritewidth,this.spriteHeight,0-60,0-65,this.spritewidth*1.2,this.spriteHeight*1.2);
    
    
            }
        }
 
        ctx.restore()
       
     

    }
}

const player=new Player();
// var enemy1 = new Enemy()
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



// const player=new Player();
//animate loop

// function animate(){

//     ctx.clearRect(0,0,canvas.width,canvas.heigth)
//     player.update();
//     player.draw();
//    gameFrame++;

//     requestAnimationFrame(animate);
//     //requestAnimationFrame(player.draw);

// }

// animate();