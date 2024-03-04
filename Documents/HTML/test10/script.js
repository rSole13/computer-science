function showhide(){
    var myDiv = document.getElementById("myDiv");
    if(myDiv.style.visibility == 'visible'){
        myDiv.style.visibility = 'hidden';
    } else {
        myDiv.style.visibility = 'visible';
    }
}

function changecolor(){
    if(myDiv.style.color == "black"){
        myDiv.style.color = "blue";
    } else {
        myDiv.style.color = "black";
    }
}

function defaultset(){
    myDiv.style.visibility = 'visible';
    myDiv.style.color = "black";
}

function changetextstyle(){
    if(myDiv.style.fontWeight != '700'){
        myDiv.style.fontWeight = '700';
    } else {
        myDiv.style.fontWeight = '200';
    }   
}