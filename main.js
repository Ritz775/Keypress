canvas = document.getElementById("myCanvas");
img_width = 600;
img_height = 200;

ctx = canvas.getContext("2d");

var img_image;

img_x = 100;
img_y = 100;

function add() {
  img_imgTag = new Image();
  img_imgTag.onload = uploadimg;
  img_imgTag.src = img_image;
}

function uploadimg() {
  ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);

  if (
    (keyPressed >= 97 && keyPressed <= 122) ||
    (keyPressed >= 65 && keyPressed <= 90)
  ) {
    aplhabetkey();
    document.getElementById("row").innerHTML = "You Pressed an Alphabet Key";
    console.log("aplhabetkey");
  } else if (keyPressed >= 48 && keyPressed <= 57) {
    numberkey();
    document.getElementById("row").innerHTML = "You Pressed a Number Key";
    console.log("numberkey");
  } else if (keyPressed >= 37 && keyPressed <= 40) {
    arrowkey();
    document.getElementById("row").innerHTML = "You Pressed an Arrow Key";
    console.log("arrowkey");
  } else if (keyPressed == 17 || keyPressed == 18 || keyPressed == 27) {
    specialkey();
    document.getElementById("row").innerHTML = "You Pressed CTRL/ALT/ESC Key";
    console.log("speicalkey");
  } else {
    otherkey();
    document.getElementById("row").innerHTML =
      "You Pressed a Symbol or Any Other Key";
    console.log("otherkey");
  }
}

function aplhabetkey(e) {
  img_image = "Alpkey.png";
  add();
}

function numberkey(e) {
  img_image = "numkey.png";
  add();
}
function arrowkey(e) {
  img_image = "Arrkey.png";
  add();
}
function specialkey() {
  img_image = "spkey.png";
  add();
}
function otherkey() {
  img_image = "otherkey.png";
  add();
}
