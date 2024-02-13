// Function to set video source for mobile view
function MobVideo() {

  var windowWidth = window.innerWidth;
  if (windowWidth < 481) {
    document.getElementById('mob').src ='Img/MOBILE VIEW.webm';
  }

}

window.onload = MobVideo()

// Function to set image source 1 for mobile view
function MobImg() {

  var windowWidth = window.innerWidth;
  if (windowWidth < 481) {
    document.getElementById('mobimg1').src ='https://images.samsung.com/is/image/samsung/assets/in/eureka2024/HOME_Live-Translate_Main-KV_720x1080_mo.jpg?imwidth=720';
  }

}

// Function to set image source 2 for mobile view
function MobiImg() {

  var windowWidth = window.innerWidth;
  if (windowWidth < 481) {
    document.getElementById('mobimg2').src ='https://images.samsung.com/is/image/samsung/assets/in/home/0208/Combo_720x1080-1.jpg?imwidth=720';
  }

}

window.onload = function() {

  MobImg();
  MobiImg();
  
  // Listen for the resize event and rerun the functions when the resolution changes
  window.addEventListener('resize', function() {

    MobVideo();
    MobImg();
    MobiImg();
  });

};
