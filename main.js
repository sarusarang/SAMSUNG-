// Function to set video source for mobile view


function Mob() {

  var windowWidth = window.innerWidth;


  if (windowWidth < 481) {

    document.getElementById('mob').src = 'Img/MOBILE VIEW.webm'
    document.getElementById('video').load()

  }

}


// Function to set image sources for mobile view

function MobImages() {

  var windowWidth = window.innerWidth;

  if (windowWidth < 481) {

    document.getElementById('mobimg1').src = 'https://images.samsung.com/is/image/samsung/assets/in/eureka2024/HOME_Live-Translate_Main-KV_720x1080_mo.jpg?imwidth=720';
    document.getElementById('mobimg2').src = 'Img/MOB-SLIDER-NEO.jpg';
    document.getElementById('mobimg3').src = 'Img/NEWIMG/MOB-1.avif'
    document.getElementById('mobimg4').src = 'Img/NEWIMG/MOB-2.avif'
    document.getElementById('mobimg5').src = 'Img/NEWIMG/MOB-3.avif'
    document.getElementById('mobimg6').src = 'Img/NEWIMG/MOB-4.avif'
    document.getElementById('mobimg7').src = 'Img/NEWIMG/MOB-5.avif'
    document.getElementById('mobimg8').src = 'Img/NEWIMG/HERO-2-2/MOB-1.avif'
    document.getElementById('mobimg9').src = 'Img/NEWIMG/HERO-2-2/MOB-2.avif'
    document.getElementById('mobimg10').src = 'Img/NEWIMG/HERO-2-2/MOB-3.avif'
    document.getElementById('mobimg11').src = 'Img/NEWIMG/HERO-2-2/MOB-4.avif'
    document.getElementById('mobimg12').src = 'Img/NEWIMG/HERO-2-2/MOB-5.avif'
    document.getElementById('mobimg13').src = 'Img/NEWIMG/HERO-2-3/MOB-1.avif'
    document.getElementById('mobimg14').src = 'Img/NEWIMG/HERO-2-3/MOB-2.avif'
    document.getElementById('mobimg15').src = 'Img/NEWIMG/HERO-2-3/MOB-3.avif'
    document.getElementById('mobimg16').src = 'Img/NEWIMG/HERO-2-3/MOB-4.avif'
    document.getElementById('mobimg17').src = 'Img/NEWIMG/HERO-2-3/MOB-5.avif'



  }
}

// Function to change on resize

window.onload = function () {

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

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("border-active");

    current[0].className = current[0].className.replace("border-active", "");

    this.className += " border-active";

  });
}

// active slider 2

var header = document.getElementById("myDIV0");

var btns = header.getElementsByClassName("btn-indicators");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("border-active0");

    current[0].className = current[0].className.replace("border-active0", "");

    this.className += " border-active0";

  });
}




// active slider 2

var header = document.getElementById("myDIV1");

var btns = header.getElementsByClassName("btn-indi1");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("border-active1");

    current[0].className = current[0].className.replace("border-active1", "");

    this.className += " border-active1";

  });
}



// active slider 3

var header = document.getElementById("myDIV2");

var btns = header.getElementsByClassName("btn-indi1");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("border-active2");

    current[0].className = current[0].className.replace("border-active2", "");

    this.className += " border-active2";

  });
}


// PRODUCT-SLIDER

$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  center: false ,


  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1400: {
      items: 4
    }
  }
})



// active storage btn

var header = document.getElementById("strg");

var btns = header.getElementsByClassName("Product-btn2");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("strg-active");

    current[0].className = current[0].className.replace("strg-active", "");

    this.className += " strg-active";

  });
}



// 2

var header = document.getElementById("strg1");

var btns = header.getElementsByClassName("Product-btn2");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("strg-active2");

    current[0].className = current[0].className.replace("strg-active2", "");

    this.className += " strg-active2";

  });
}


// 3

var header = document.getElementById("strg4");

var btns = header.getElementsByClassName("Product-btn2");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("strg-active4");

    current[0].className = current[0].className.replace("strg-active4", "");

    this.className += " strg-active4";

  });
}

// 4

// 3

var header = document.getElementById("strg6");

var btns = header.getElementsByClassName("Product-btn2");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("strg-active3");

    current[0].className = current[0].className.replace("strg-active3", "");

    this.className += " strg-active3";

  });
}




// product color name  and img change on click

function btn1() {

  document.getElementById("color").innerHTML = ":Titanium Gray"
  document.getElementById("img1").src = "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztwins-thumb-539573385?$216_216_PNG$"

}

function btn2() {

  document.getElementById("color").innerHTML = ":Titanium Violet"
  document.getElementById("img1").src = "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzvqins-thumb-539573464?$216_216_PNG$"


}

function btn3() {

  document.getElementById("color").innerHTML = ":Titanium Black"
  document.getElementById("img1").src = "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-thumb-539573274?$216_216_PNG$"

}


function btn4() {

  document.getElementById("color1").innerHTML = ":Dark Gray"
  document.getElementById("img2").src = "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-thumb-538070793?$216_216_PNG$"

}


function btn5() {

  document.getElementById("color1").innerHTML = ":Black Caviar"
  document.getElementById("img2").src = "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dab-tl/gallery/in-front-loading-washer-ww10t534daws1-374541-ww80t504dab-tl-thumb-383418965?$216_216_PNG$"

}

function btn6() {

  document.getElementById("color2").innerHTML =":Broapurple"
  document.getElementById("img3").src ="Img/PRODUCT-SLIDER/in-galaxy-buds2-pro-r510-sm-r510nlvainu-thumb-533192231.avif"

}

function btn7() {

  document.getElementById("color2").innerHTML =":Graphite"
  document.getElementById("img3").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nzaainu-thumb-533192317?$216_216_PNG$"

}

function btn8() {

  document.getElementById("color2").innerHTML =":White"
  document.getElementById("img3").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nzwainu-thumb-533192412?$216_216_PNG$"

}


function btn9() {

  document.getElementById("color3").innerHTML =":Blue"
  document.getElementById("img4").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-z-flip5-f731-467157-sm-f731bzbeins-thumb-537252965?$216_216_PNG$"

}

function btn10() {

  document.getElementById("color3").innerHTML =":Green"
  document.getElementById("img4").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-z-flip5-f731-467157-sm-f731bzgeins-thumb-537253007?$216_216_PNG$"

}

function btn11() {

  document.getElementById("color3").innerHTML =":Yellow"
  document.getElementById("img4").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-z-flip5-f731-467157-sm-f731bzyeins-thumb-537253167?$216_216_PNG$"

}

function btn12() {

  document.getElementById("color4").innerHTML =":Graphite"
  document.getElementById("img5").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-buds2-r177-sm-r177nzkainu-thumb-481740607?$216_216_PNG$"

}


function btn13() {

  document.getElementById("color4").innerHTML =":Onxy"
  document.getElementById("img5").src ="https://images.samsung.com/is/image/samsung/p6pim/in/sm-r177nztainu/gallery/in-galaxy-buds2-r177-399963-sm-r177nztainu-thumb-533256909?$216_216_PNG$"

}

function btn14() {

  document.getElementById("color4").innerHTML =":Olive"
  document.getElementById("img5").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-buds2-r177-sm-r177nzgainu-thumb-481740586?$216_216_PNG$"

}



function btn15() {

  document.getElementById("color5").innerHTML =":Black"
  document.getElementById("img6").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-classic-399208-sm-r890nzkainu-thumb-481180997?$216_216_PNG$"

}
function btn16() {

  document.getElementById("color5").innerHTML =":Sliver"
  document.getElementById("img6").src ="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-classic-399208-sm-r890nzsainu-thumb-481181010?$216_216_PNG$"

}


function btn17() {

  document.getElementById("color6").innerHTML =":Dark Blue"
  document.getElementById("img7").src ="https://images.samsung.com/is/image/samsung/p6pim/in/sm-x210ndbeins/gallery/in-galaxy-tab-a9-plus-sm-x210-sm-x210ndbeins-thumb-538733692?$216_216_PNG$"

}

function btn18() {

  document.getElementById("color6").innerHTML =":Gray"
  document.getElementById("img7").src ="https://images.samsung.com/is/image/samsung/p6pim/in/sm-x210nzaeins/gallery/in-galaxy-tab-a9-plus-sm-x210-sm-x210nzaeins-thumb-538733708?$216_216_PNG$"

}

function btn19() {

  document.getElementById("color6").innerHTML =":Sliver"
  document.getElementById("img7").src ="https://images.samsung.com/is/image/samsung/p6pim/in/sm-x210nzseins/gallery/in-galaxy-tab-a9-plus-sm-x210-sm-x210nzseins-thumb-538733724?$216_216_PNG$"

}