characters=document.getElementsByTagName('img')
buttons=document.getElementsByTagName('button')
const btn=document.getElementById("button-1")

links= document.getElementsByTagName('a')
for(var key of buttons ){
key.addEventListener("mousemove",add)
key.addEventListener("mouseout",small)
}

for(var key of characters ){
    key.addEventListener("mousemove",large)
    key.addEventListener("mouseout",litel)
    }
    
    
for(var key of links ){
    key.addEventListener("mousemove",add)
    key.addEventListener("mouseout",small)
    }
    


function add(e)
{
    
     e.target.style.padding="2%"
    


}
function small(e)
{
     e.target.style.padding="1%"
}


 
function large(e)
{
    e.target.style.width="300px";
    e.target.style.height="300px"
   

}

function litel(e)
{
    e.target.style.width="200px";
    e.target.style.height="200px"
   

}
console.log("ok");

