function createbubble() {
    var section = document.querySelector('section')
    console.log("imherreee")
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

// createbubble()