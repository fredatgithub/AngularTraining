var input = document.getElementById('moninput');
var button = document.getElementById('monbutton');
button.addEventListener('click', function(evt){
  evt.preventDefault();
  var val=input.value;
  //console.log(val);
  if ( val!== "") {    
    var liste = document.getElementsByTagName('ul')[0];
    var li = document.createElement('li');
    li.innerHTML = val;
    liste.appendChild(li);
  }
});
