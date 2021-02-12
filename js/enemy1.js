
var enemyImage1 = new Image()
enemyImage1.src = './img/__cartoon_fish_06_yellow_swim.png'
// var enemyImage2 = new Image()
// enemyImage2.src = './img/fish_blue.png'
// var enemyImage3 = new Image()
// enemyImage3.src = './img/fish_purpal.png'

class Enemy {
    constructor() {
        this.x = canvas.width + 200
        console.log(canvas.width);
        this.y = Math.random() * (canvas.height - 150) + 200
        this.radius = 60
        this.speed = Math.random() * 2 + 0.5
        this.frame = 0
        this.frameX = 0
        this.frameY = 0
        this.spriteWidth = 500
        this.spriteHeight = 330

    }
    update() {
        this.x -= this.speed
        if (this.x < 0 - this.radius * 2) {
            this.x = canvas.width + 200
            this.y = Math.random() * (canvas.height - 150) + 90
            this.speed = Math.random() * 2 + 2
        }
        if (gameFrame % 5 === 0) {
            this.frame++

            if (this.frame >= 12) this.frame = 0

            if (this.frame == 3 || this.frame == 7 || this.frame == 11) {
                this.frameX = 0
            } else {
                this.frameX++
            }
            if (this.frame < 3) this.frameY = 0
            else if
                (this.frame < 7) this.frameY = 1
            else if
                (this.frame < 11) this.frameY = 2
            else
                this.frameY = 0

        }

        //collision with player
       
        const dx = this.x - player.x
        const dy = this.y - player.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.radius + player.radius) {
            handeleGameOver()
        }
    }


    draw() {
        // ctx.fillStyle = 'red'
        ctx.beginPath()
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.drawImage(enemyImage1, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
            this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 60, this.spriteWidth / 4, this.spriteHeight / 4)


    }

    

}

// function gameOver


var EnemyArray = []

var enemy1 = new Enemy()
function handeleEnemies() {
   

    // enemy1.update()
    // enemy1.draw()

    if (gameFrame % 100 == 0) {

        EnemyArray.push(new Enemy());


    }
    // if(EnemyArray.length>0)
    // {
    //     for (let i = 0; i < 10; i++) {
        
    //         console.log("i=="+i);
    //         if(i%2==0)
    //         {
    //             enemyImage1.src = './img/fish_blue.png'
               
    //         }
    //         else if(i%3==0){
    //             enemyImage1.src = './img/__cartoon_fish_06_yellow_swim.png'
               
    
    //         }
    //         else{
    //             enemyImage1.src = './img/fish_purpal.png'
    
    //         }
    //     }
      
    // }
    
    for (let i = 0; i < EnemyArray.length; i++) {
        if(i%2==0)
        {
            enemyImage1.src = './img/fish_blue.png'
           
        }
        else if(i%3==0){
            enemyImage1.src = './img/__cartoon_fish_06_yellow_swim.png'
           

        }
        else{
            enemyImage1.src = './img/fish_purpal.png'

        }
        
        EnemyArray[i].update();
        EnemyArray[i].draw();
        // if (EnemyArray[i].x < 0 - EnemyArray[i].radius) {
        //     EnemyArray.splice(i, 1);
        //     i--;
        // }
       



    }

}

function handeleGameOver() {
    ctx.fillStyle = 'white'
    ctx.fillText('Game Over , you Reach Score' + score, 130, 250)
    gameOver = true
}


// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     handeleEnemies()
//     // gameFrame++;
//     // handleBackground();
//     // handleBubbles();
//     // player.update();
//     // player.draw();


//     gameFrame++;
//     // ctx.fillText('score:' + score, 50, 100)
//     // ctx.fillStyle = "black";
//     // ctx.font = "50px Arial";
//     requestAnimationFrame(animate);
// }

// animate();


// function animate() {
//     handeleEnemies()
//     gameFrame++;
//     // ctx.fillText('score:'+score,50,100)
//     // if (!gameOver)
//      requestAnimationFrame(animate);
// }

//  animate();

