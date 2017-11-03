var back = false;

function openMenu(){
  toggleDisplay("menu")
}

function toggleDisplay(elmt){

  if(typeof elmt == "string"){
     elmt = document.getElementById(elmt);
   }

   if(elmt.style.display == ""){
      elmt.style.display = "block";
      document.getElementById('menu').style.animation = "open 0.3s linear 1"
    }

   else{
      document.getElementById('menu').style.animation = "close 0.3s linear 1"
      setTimeout(function() {
        elmt.style.display = "";
      }, 300);
    }

}
