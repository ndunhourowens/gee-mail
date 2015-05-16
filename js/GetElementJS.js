for (var i = 0; i < window.geemails.length; i++)
  {
    console.log(window.geemails[i].sender);
    document.getElementById("main").innerHTML = geemails[i].sender;
  }

for (var i = 0; i < window.geemails.length; i++)
  {
    console.log(window.geemails[i].sender);
    document.getElementById("main").innerHTML = geemails[i].subject;
  }

var testing = document.createElement("h1");
var text = document.createTextNode("I doing it");

testing.appendChild(text);

var mainDiv = document.getElementById('main');

mainDiv.appendChild(testing);

 