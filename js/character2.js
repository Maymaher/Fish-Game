

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
                    this.spritewidth, this.spriteHeight, 0 - 52, 0 - 61, this.spritewidth * 1.5, this.spriteHeight * 1.5);


            }
            else if (this.x < mouse.x) {


                ctx.drawImage(playeRight, this.frameX * this.spritewidth, this.frameY * this.spriteHeight,
                    this.spritewidth, this.spriteHeight, 0 - 60, 0 - 65, this.spritewidth * 1.5, this.spriteHeight * 1.5);


            }
        }


        ctx.restore()
       
     

    }
}

const player=new Player2();
// var enemy1 = new Enemy()




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
        console.log(score);
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

