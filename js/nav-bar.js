var music=document.getElementById("music")
var audio=document.querySelector("audio");
var reset=document.getElementsByTagName("button")[0]
var p=document.getElementsByTagName("p")[0]

console.log(p.textContent);
music.addEventListener("click",playamusic)
flag=true;

function playamusic(){

if(flag){
   audio.play();
   music.className="fa fa-volume-up"
    flag=false
    score++;
  

 
}

else if(!flag){
  audio.pause();
    music.className="fa fa-volume-off"
    flag=true
}
console.log(flag);
    
}
var reset_flag=true
reset.addEventListener("click",function()
{
   
    score=0;
   
  
    window.location.reload(true); 
}
)
console.log(score);
 

