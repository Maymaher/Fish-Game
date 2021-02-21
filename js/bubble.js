
const bubbleArray = [];
const bubbleImage = new Image();
bubbleImage.src = "./img/bubble_pop_frame_01.png"


class bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 30;
        this.speed = Math.random() * 4 + 1;
        this.distance;
        this.counted = false;
        this.sound=Math.random() <= 0.5 ? 'sound1' : 'sound2';
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

const bubblepop1=document.createElement('audio')
bubblepop1.src="./img/Plop.ogg"
function handleBubbles() {
    if (gameFrame % 20 == 0) {
        bubbleArray.push(new bubble());

    }

    for (let i = 0; i < bubbleArray.length; i++) {
        if(score>10)
        {
            console.log(score);
            bubbleArray[i].speed=Math.random() * 7 + 1;
        }
        bubbleArray[i].update();
        bubbleArray[i].draw();
        if (bubbleArray[i].y < 0 - bubbleArray[i].radius * 2) {
            bubbleArray.splice(i, 1);
            i--;
        }

        else if (bubbleArray[i].distance < bubbleArray[i].radius + player.radius) {
            if (!bubbleArray[i].counted) {
                bubblepop1.play();
                score++;
                stopScore++;

                bubbleArray[i].counted = true;
                
                bubbleArray.splice(i, 1);
                i--;
            }
        }

    }


}
const background = new Image();

function handleBackground() {
   
    if (score <50) {
       
        background.src = "./img/8.jpg";
    }
    else if(score <=150 ){
       
        background.src = "./img/2.jpg";
    }
    else{
        background.src = "./img/5.jpg";
    }
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}



