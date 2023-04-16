var image = document.getElementById("image");
var images = ["1.jpg", "2.jpg", "3.jpg", "4.png"]; // resim dosyalarının isimleri
var currentIndex = 0;

var text = document.getElementById("expSpan");
var texts = [
  "bu 1.resmin açıklamsıdır",
  "bu 2.resmin açıklamsıdır",
  "bu 3.resmin açıklamsıdır",
  "bu 4.resmin açıklamsıdır",
];

var textCurrentIndex = 0;

function changeImage(direction) {
  if (direction == "left") {
    currentIndex--;
    textCurrentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
      textCurrentIndex = images.length - 1;
    }
  } else if (direction == "right") {
    currentIndex++;
    textCurrentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
      textCurrentIndex = 0;
    }
  }
  image.src = images[currentIndex];

  document.getElementById("expSpan").textContent = texts[textCurrentIndex];
}

document.addEventListener("keydown", function (number) {
  if (event.code == "ArrowLeft") {
    changeImage("left");
  } else if (event.code == "ArrowRight") {
    changeImage("right");
  }
});

var leftButton = document.getElementById("leftButton");
leftButton.addEventListener("click", function () {
  changeImage("left");
});

var rightButton = document.getElementById("rightButton");
rightButton.addEventListener("click", function () {
  changeImage("right");
});

function changeBlok(number) {
  if (number == 1) {
    image.src = "1.jpg";
    expSpan.textContent = texts[0];
  } else if (number == 2) {
    image.src = "2.jpg";
    expSpan.textContent = texts[1];
  } else if (number == 3) {
    image.src = "3.jpg";
    expSpan.textContent = texts[2];
  } else if (number == 4) {
    image.src = "4.png";
    expSpan.textContent = texts[3];
  }
}
