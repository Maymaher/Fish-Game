
const playerLeft=new Image();
playerLeft.src="./img/imageonline-co-resizedimage__4_-removebg-preview__1_-removebg-preview.png"
 const playeRight=new Image();

 playeRight.src="./img/char3-right2-removebg-preview (1).png"
 
//  const leve2_div = document.getElementById("level-up2").style.display = "none"
// const level2ok = document.getElementById("level2-ok")
document.getElementById("back").addEventListener("click",back)
function back()
{
window.location.replace("./character-page.html");
}

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
        
            
        if (score < 50) {
            if (this.x >= mouse.x) {
                console.log("one");

                ctx.drawImage(playerLeft, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 52, 0 - 61, this.spritewidth / 1.5, this.spriteHeight / 1.5);


            }
            else if (this.x < mouse.x) {


                ctx.drawImage(playeRight, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 60, 0 - 65, this.spritewidth / 1.5, this.spriteHeight / 1.5);


            }
        }
        else if (score <=151) {
            console.log("two");

            if (this.x >= mouse.x) {


                ctx.drawImage(playerLeft, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 52, 0 - 61, this.spritewidth, this.spriteHeight);


            }
            else if (this.x < mouse.x) {


                ctx.drawImage(playeRight, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 60, 0 - 65, this.spritewidth, this.spriteHeight);


            }
        }


        else {
            console.log("therd");
            if (this.x >= mouse.x) {


                ctx.drawImage(playerLeft, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 52, 0 - 61, this.spritewidth * 1.3, this.spriteHeight * 1.3);


            }
            else if (this.x < mouse.x) {


                ctx.drawImage(playeRight, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 60, 0 - 65, this.spritewidth * 1.3, this.spriteHeight * 1.3);


            }
        }


        ctx.restore()
       
     

    }
}


 const player=new Player3();





function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // document.getElementById("level-up2").style.display = "none"
    if (score == 50) {
        mouse.click = false
        document.getElementById("level-up2").style.display = "block"
        console.log(score);


    }
    else if (score == 151) {
        mouse.click = false
        document.getElementById("level-up3").style.display = "block"
        
    }
    handleBackground();
    if (mouse.click == true) {

        handleBubbles();
        handeleEnemies()
    }


    player.update();
    player.draw();

    gameFrame++;
if(stopScore<50)
    ctx.fillText( stopScore +"/ 50", 50, 60)
    else if(stopScore<150)
    ctx.fillText( stopScore +"/ 150", 30, 60)
    else
    ctx.fillText( stopScore +"/ 250", 30, 60)
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    if (!gameOver)
    {
        if(score==250)
        {
            document.getElementById("win-div").style.display = "block"
        }
        else
        requestAnimationFrame(animate);
    }
       
    }





animate();
 
