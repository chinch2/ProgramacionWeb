var d = document.getElementById("drawing");
var ln = document.getElementById("linenum");
var btln = document.getElementById("buttonline");
var canv = d.getContext("2d");
var w = d.width;
var clr = "purple";

function drawline(color, x0, y0, xf, yf) {

    canv.beginPath();
    canv.strokeStyle = color;
    canv.moveTo(x0, y0);
    canv.lineTo(xf, yf);
    canv.stroke();
    canv.closePath();

}

function clickevent() {

    var z = parseInt(ln.value);

    drawline(clr, 1, 1, w - 1, 1);
    drawline(clr, w - 1, 1, w - 1, w - 1);

    for (var l = 0; l < z; l++) {

        drawline(clr, w, w - ((w / z) * l), w - ((w / z) * (l + 1)), 0);
        console.log("l: " + l);

    }

}

btln.addEventListener("click", clickevent);

