
const bubbleArray = [];
const bubbleImage = new Image();
bubbleImage.src = "./img/bubble_pop_frame_01.png"

const player = new Player();

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
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy)
    }

    draw() {
        
        ctx.drawImage(bubbleImage, this.x - 39, this.y - 39, this.radius * 2.6, this.radius * 2.6);
    }

}

function handleBubbles() {
    if (gameFrame % 20 == 0) {
        bubbleArray.push(new bubble());

    }
    for (let i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
        bubbleArray[i].draw();
        if (bubbleArray[i].y < 0 - bubbleArray[i].radius * 2) {
            bubbleArray.splice(i, 1);
            i--;
        }

        else if (bubbleArray[i].distance < bubbleArray[i].radius + player.radius) {
            if (!bubbleArray[i].counted) {
                score++;
                

                bubbleArray[i].counted = true;
                
                bubbleArray.splice(i, 1);
                i--;
            }
        }

    }


}
const background = new Image();


function handleBackground() {
    if (score <= 5) {
        background.src = "./img/8.jpg";
    }
    else if(score <=10 ){
        background.src = "./img/2.jpg";
    }
    else{
        background.src = "./img/5.jpg";
    }
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}


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