document.getElementById("add").onclick  = function() {

    var node = document.createElement("li");
    var text = document.getElementById("myInput").value; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);

    document.getElementById( 
        'myInput').value = '' ;  
    document.getElementById(function(removeList){
        return document.querySelector('list').remove();
    });    

  }

//The following snip of codes wil execute the del event function

  var items = document.querySelectorAll("#list li"),
          tab = [], liIndex;//list of list index

  //populate tab with li data
  for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
  }

  //get li index using tab array on li click event
  for(var i =0; i < items.length; i++){
    items[i].onclick = function(){
      liIndex =  tab.indexOf(this.innerHTML);
      console.log(this.innerHTML + "INDEX = " + liIndex);
    };
  }

  function removeLI(){
    items[liIndex].parantNode.removeChild(items[liIndex]);
  }

