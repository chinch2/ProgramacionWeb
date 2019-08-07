var d = document.getElementById("drawing");
var canv = d.getContext("2d");
var background = {
  url: "tile.png",
  loadOK: false
};
var cow = {
  url: "vaca.png",
  loadOK: false
};
var chicken = {
  url: "pollo.png",
  loadOK: false
};
var pig = {
  url: "cerdo.png",
  loadOK: false
};

function randomNumber(min, max) {
  var result;
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function mapLoad() {
  background.loadOK = true;
  draw();

}

function cowLoad() {
  cow.loadOK = true;
  draw();

}

function chickenLoad() {
  chicken.loadOK = true;
  draw();

}

function pigLoad() {
  pig.loadOK = true;
  draw();

}

function draw() {
  var x, y;
  if (background.loadOK) {
    canv.drawImage(background.file, 0, 0);
  }
  if (cow.loadOK) {
    for (var v = 0; v < randomNumber(0, 30); v++) {
      x = randomNumber(0, 420);
      y = randomNumber(0, 420);
      canv.drawImage(cow.file, x, y);
    }
  }
  if (chicken.loadOK) {
    for (var p = 0; p < randomNumber(0, 30); p++) {
      x = randomNumber(0, 420);
      y = randomNumber(0, 420);
      canv.drawImage(chicken.file, x, y);
    }
  }
  if (pig.loadOK) {
    for (var c = 0; c < randomNumber(0, 30); c++) {
      x = randomNumber(0, 420);
      y = randomNumber(0, 420);
      canv.drawImage(pig.file, x, y);
    }
  }
}

background.file = new Image();
background.file.src = background.url;
background.file.addEventListener("load", mapLoad);
cow.file = new Image();
cow.file.src = cow.url;
cow.file.addEventListener("load", cowLoad);
chicken.file = new Image();
chicken.file.src = chicken.url;
chicken.file.addEventListener("load", chickenLoad);
pig.file = new Image();
pig.file.src = pig.url;
pig.file.addEventListener("load", pigLoad);

