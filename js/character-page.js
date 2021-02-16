characters=document.getElementsByTagName('img')
buttons=document.getElementsByTagName('button')
links= document.getElementsByTagName('a')
document.getElementById("backarrow").addEventListener("click",loginn)
function loginn()
{
window.location.replace("./main-page.html");
}
for(var key of buttons ){
key.addEventListener("mousemove",add)
key.addEventListener("mouseout",small)
}

for(var key of characters ){
    key.addEventListener("mousemove",large)
    key.addEventListener("mouseout",litel)
    }
    
    
for(var key of buttons ){
    key.addEventListener("mousemove",add)
    key.addEventListener("mouseout",small)
    }
    


function add(e)
{
    
     e.target.style.padding="1.2%";
     
    


}
function small(e)
{
     e.target.style.padding="1%"
}


 
function large(e)
{
    e.target.style.width="150px";
    e.target.style.height="150px"
   

}

function litel(e)
{
    e.target.style.width="140px";
    e.target.style.height="140px"
   

}
console.log("ok");
