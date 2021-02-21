

function createbubble() {
    var section = document.querySelector('section')
    //  console.log("imherreee")
    const createspan = document.createElement('span')
    var size = Math.random() * 60;
    createspan.style.width = 20 + size + 'px';
    createspan.style.height = 20 + size + 'px';
    createspan.style.left = Math.random() * innerWidth + "px";
    section.appendChild(createspan);
    setTimeout(() => {
        createspan.remove()
    }, 4000)

    
}
 var input_name=document.getElementsByTagName("input")[0]
var submit_button=document.getElementsByTagName("button")
submit_button[0].addEventListener("click",mainn)

function mainn(){

 
if(input_name.value)
{
  

       window.location.replace("./main-page.html");

 
 localStorage.setItem("name",input_name.value );
 
}
else{
    alert("please enter Youre name to enter")
}
}



setInterval(createbubble,50)

 