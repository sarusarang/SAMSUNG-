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

