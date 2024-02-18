// Function to set video source for mobile view


function Mob() {

  var windowWidth = window.innerWidth;


  if (windowWidth < 481) {

    document.getElementById('mob').src ='Img/MOBILE VIEW.webm'
    document.getElementById('video').load()
   
  }

}


// Function to set image sources for mobile view

function MobImages() {

  var windowWidth = window.innerWidth;

  if (windowWidth < 481) {
    
    document.getElementById('mobimg1').src ='https://images.samsung.com/is/image/samsung/assets/in/eureka2024/HOME_Live-Translate_Main-KV_720x1080_mo.jpg?imwidth=720';
    document.getElementById('mobimg2').src ='https://images.samsung.com/is/image/samsung/assets/in/home/0208/Combo_720x1080-1.jpg?imwidth=720';
    document.getElementById('mobimg3').src='Img/NEWIMG/MOB-1.avif'
    document.getElementById('mobimg4').src='Img/NEWIMG/MOB-2.avif'
    document.getElementById('mobimg5').src='Img/NEWIMG/MOB-3.avif'
    document.getElementById('mobimg6').src='Img/NEWIMG/MOB-4.avif'
    document.getElementById('mobimg7').src='Img/NEWIMG/MOB-5.avif'
    document.getElementById('mobimg8').src='Img/NEWIMG/HERO-2-2/MOB-1.avif'
    document.getElementById('mobimg9').src='Img/NEWIMG/HERO-2-2/MOB-2.avif'
    document.getElementById('mobimg10').src='Img/NEWIMG/HERO-2-2/MOB-3.avif'
    document.getElementById('mobimg11').src='Img/NEWIMG/HERO-2-2/MOB-4.avif'
    document.getElementById('mobimg12').src='Img/NEWIMG/HERO-2-2/MOB-5.avif'


  }
}

// Function to change on resize

window.onload = function() {

  Mob()
  MobImages();

  
  function handleResize() {
    Mob()
    MobImages();
  }


  window.addEventListener('resize', handleResize);


};



// active Class for slider 

var header = document.getElementById("myDIV");

var btns = header.getElementsByClassName("btn-indi1");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

  var current = document.getElementsByClassName("border-active");

  current[0].className = current[0].className.replace("border-active", "");

  this.className += " border-active";

  });
}

// active slider 2

var header = document.getElementById("myDIV0");

var btns = header.getElementsByClassName("btn-indicators");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

  var current = document.getElementsByClassName("border-active0");

  current[0].className = current[0].className.replace("border-active0", "");

  this.className += " border-active0";

  });
}




// active slider 2

var header = document.getElementById("myDIV1");

var btns = header.getElementsByClassName("btn-indi1");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

  var current = document.getElementsByClassName("border-active1");

  current[0].className = current[0].className.replace("border-active1", "");

  this.className += " border-active1";

  });
}



