
// console.log( document.getElementById("ahln").textContent);
buttons=document.getElementsByTagName("button")
buttons[0].addEventListener("click",back)
function back()
{
window.location.replace("./character-page.html");
}
buttons[1].addEventListener("click",about)
function about()
{
window.location.replace("./about.html");
}
buttons[1].addEventListener("click",Howtoplay)
function Howtoplay()
{
window.location.replace("./aboutGame.html");
}


function createbubble() {
    var section = document.querySelector('section')
    // console.log("imherreee")
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
setInterval(createbubble,50)
document.getElementById("ahln").textContent="Welcome "+localStorage.getItem("name");


// createbubble()
document.getElementById("backarrow").addEventListener("click",loginn)
function loginn()
{
window.location.replace("./index.html");
}