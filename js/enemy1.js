
var enemyImage1 = new Image()
enemyImage1.src = './img/__cartoon_fish_06_yellow_swim.png'


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

        //collision with player
       
        const dx = this.x - player.x
        const dy = this.y - player.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.radius + player.radius) {
            handeleGameOver()
        }
    }


    update2() {
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
        if(score<50)
        {
            ctx.drawImage(enemyImage1, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 60, this.spriteWidth / 4, this.spriteHeight / 4)
    
        }

        else if(score<150)
        {
            ctx.drawImage(enemyImage1, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 60, this.spriteWidth/1.1 , this.spriteHeight/1.1 )
    
        }

        else {
            ctx.drawImage(enemyImage1, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 60, this.spriteWidth/1.5 , this.spriteHeight/1.5 )

        }
      

    }

    

}

// function gameOver


var EnemyArray = []




var enemy1 = new Enemy()
function handeleEnemies() {
   

    // enemy1.update()
    // enemy1.draw()
    if(score<=50)
    {
        if (gameFrame % 600 == 0) {

            EnemyArray.push(new Enemy());
    
    
        }
    }

    else if(score<150){
        if (gameFrame % 400 == 0) {

            EnemyArray.push(new Enemy());
    
    
        }
    }

    else{
        if (gameFrame % 250 == 0) {

            EnemyArray.push(new Enemy());
    
    
        }
    }
    
  
    
    for (let i = 0; i < EnemyArray.length; i++) {
        if(score<50)
        {
            // EnemyArray.splice(0, EnemyArray.length);
           
          
            
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
        }
        else if(score<=151)
        {
            
        
            if(i%2==0)
            {
                enemyImage1.src = './img/image1.png'
               
            }
            else if(i%3==0){
                enemyImage1.src = './img/image2.png'
               
    
            }
            else{
               
                enemyImage1.src = './img/image3.png'
    
            }
        }

        else{
            if(i%2==0)
        {
           
            enemyImage1.src = './img/enemy11.3.png'
           
        }
        else if(i%3==0){
            
            enemyImage1.src = './img/enemy22.3.png'
           

        }
        else{
           
            enemyImage1.src = './img/enemy33.3.png'

        }
        }
       
        if(score<50)
        {
            EnemyArray[i].update2();
        }
        EnemyArray[i].update();
        EnemyArray[i].draw();
        // if (EnemyArray[i].x < 0 - EnemyArray[i].radius || score==10 ) {
        //     EnemyArray.splice(i, 1);
        //     i--;
        // }
       if(score==50){
        EnemyArray.splice(0, EnemyArray.length);
          
       }

       if(score==151){
        EnemyArray.splice(0, EnemyArray.length);
           
       }




    }

}



function handeleGameOver() {
    // ctx.fillStyle = 'white'
    // ctx.fillText('Game Over , you Reach Score' + score, 130, 250)
    document.getElementById("game-over-div").style.display = "block"
    gameOver = true
}



