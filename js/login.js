// var connection = new ActiveXObject("ADODB.Connection") ;

// var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

// connection.Open(connectionstring);
// var rs = new ActiveXObject("ADODB.Recordset");

// rs.Open("SELECT * FROM table", connection);
// rs.MoveFirst
// while(!rs.eof)
// {
//    document.write(rs.fields(1));
//    rs.movenext;
// }

// rs.close;
// connection.close;



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
 var input_name=document.getElementsByTagName("input")[0]
var submit_button=document.getElementsByTagName("button")
submit_button[0].addEventListener("click",mainn)
// var arr=[]
function mainn(){

 
if(input_name.value)
{
  

//     arr.push( localStorage.getItem("name"))
  
//     arr.push(input_name.value)
    
//     console.log(input_name.value);
       window.location.replace("./index.html");
//    window.location.href = "./index.html";
 
 localStorage.setItem("name",input_name.value );
 
}
else{
    alert("please enter Youre name to enter")
}
}



setInterval(createbubble,50)
 