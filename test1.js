let table=document.getElementById("table1");
let index=0;
let counter=0;

function function1(){
      
     row=tbody1.rows[index];
    row.cells[1].innerHTML='';
    index++;counter++;

var button1=document.createElement("button");
let text1=document.createElement("input");
    text1.setAttribute("id","t"+counter);
    button1.setAttribute("id","a"+counter)
    button1.innerHTML=" + "
var button2=document.createElement("button");
button2.setAttribute("id","s"+counter);
button2.innerHTML=" - "

button2.onclick=function(){
    function2(this);
}
var trow=document.createElement("tr");
var tdata1=document.createElement("td");
var tdata2=document.createElement("td");
var tdata3=document.createElement("td");
tdata1.appendChild(text1);
tdata2.appendChild(button1);
tdata3.appendChild(button2);
trow.appendChild(tdata1);
trow.appendChild(tdata2);
trow.appendChild(tdata3);
tbody1.appendChild(trow);
button1.onclick=function(){
    function1();
}

}

function function2(e){

    var str=e.id;

    let tbody1=document.getElementById("tbody1");
    let elem=document.getElementById(str);
    
   
if(tbody1.rows.length==1){
    alert("can't delete");
}else{
    let changeId=tbody1.rows[index-1].firstElementChild.children[0].id.substring(1);
    let i='a'+changeId;
    if(tbody1.rows[index].childNodes[2].childNodes[0]==elem ){
        
    
        row1=tbody1.rows[index-1];
        
        row1.cells[1].innerHTML=`<button id=${i} onclick='function1()'> + </button>`;
      tbody1.deleteRow(index);
      index--;
      
    
    
     }
    else{ 
        tbody1.deleteRow(elem.parentNode.parentNode.rowIndex);
        
        index--;
        
    }
    }
}
 



