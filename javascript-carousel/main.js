var $img = document.querySelector('.image');
var counter = 0;
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $dots = document.querySelectorAll('.dot');
var $leftArrow = document.querySelector('.left');
var $rightArrow = document.querySelector('.right');
var $dotsContainer = document.querySelector('.dots');

function nextImage() {
  counter++;
  var newImage = images[counter];
  if (counter >= 0 && counter < 5) {
    $img.setAttribute('src', newImage);
    $dots[counter].className = 'fa-solid fa-circle dot';
    $dots[counter - 1].className = 'fa-regular fa-circle dot';
  } else {
    counter = 0;
    $img.setAttribute('src', images[0]);
    $dots[4].className = 'fa-regular fa-circle dot';
    $dots[0].className = 'fa-solid fa-circle dot';
  }
}

function handleLeftArrow(event) {
  if (counter > 0) {
    $dots[counter].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', images[counter - 1]);
    counter -= 1;
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else {
    $dots[0].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', images[4]);
    counter = 4;
    $dots[4].className = 'fa-solid fa-circle dot';
  }
}

function handleRightArrow(event) {
  if (counter < 4) {
    $dots[counter].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', images[counter + 1]);
    counter += 1;
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else {
    $dots[4].className = 'fa-regular fa-circle dot';
    $img.setAttribute('src', images[0]);
    counter = 0;
    $dots[0].className = 'fa-solid fa-circle dot';
  }
}

function handleDots(event) {
  if (event.target.id === 'image-zero') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 0;
    $img.setAttribute('src', images[counter]);
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else if (event.target.id === 'image-one') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 1;
    $img.setAttribute('src', images[counter]);
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else if (event.target.id === 'image-two') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 2;
    $img.setAttribute('src', images[counter]);
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else if (event.target.id === 'image-three') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 3;
    $img.setAttribute('src', images[counter]);
    $dots[counter].className = 'fa-solid fa-circle dot';
  } else if (event.target.id === 'image-four') {
    $dots[counter].className = 'fa-regular fa-circle dot';
    counter = 4;
    $img.setAttribute('src', images[counter]);
    $dots[counter].className = 'fa-solid fa-circle dot';
  }
}

setInterval(nextImage, 3000);
$leftArrow.addEventListener('click', handleLeftArrow);
$rightArrow.addEventListener('click', handleRightArrow);
$dotsContainer.addEventListener('click', handleDots);
