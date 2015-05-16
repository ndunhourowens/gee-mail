for (var i = 0; i < window.geemails.length; i++)
  {
    console.log(window.geemails[i].sender);
    document.getElementById("sender").innerHTML = geemails[i].sender;
    
    console.log(window.geemails[i].subject);
    document.getElementById("subject").innerHTML = geemails[i].subject;
    
    console.log(window.geemails[i].date);
    document.getElementById("date").innerHTML = geemails[i].date;
    
  }


var testing = document.createElement("h1");
var text = document.createTextNode("I doing it");

testing.appendChild(text);

var mainDiv = document.getElementById('main');

mainDiv.appendChild(testing);

 