document.addEventListener('DOMContentLoaded', function(){
  var switchOff = document.querySelector('.switch');
  var shade = document.querySelector('.status')
  var dark = document.querySelector('body')


   switchOff.addEventListener('click',function(){
     switchOff.classList.toggle('on');
     switchOff.classList.toggle('off');
     dark.classList.toggle('dark');
     dark.classList.toggle('light');


     if (switchOff.classList.contains('off')){
             shade.innerHTML = "Hey, who turned off the lights?";
      } else {

        shade.innerHTML = "It's so bright in here!";
      }


 })

});
