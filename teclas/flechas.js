var tecla = {

    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    R: 82,
    B: 66,
    G: 71

};
var d = document.getElementById("drawing");
var canv = d.getContext("2d");
var x = d.width / 2;
var y = d.height / 2;
var clr = "green";
var pxlm = 10;

function drawLineKey(event) {
    console.log(event.keyCode);

    switch (event.keyCode) {

        case tecla.LEFT:
            drawLine(clr, x, y, x - pxlm, y, canv);
            x -= pxlm;
            break;

        case tecla.UP:
            drawLine(clr, x, y, x, y - pxlm, canv);
            y -= pxlm;
            break;

        case tecla.RIGHT:
            drawLine(clr, x, y, x + pxlm, y, canv);
            x += pxlm;
            break;

        case tecla.DOWN:
            drawLine(clr, x, y, x, y + pxlm, canv);
            y += pxlm;
            break;

        case tecla.R:
            clr = "red";
            break;

        case tecla.B:
            clr = "blue";
            break;

        case tecla.G:
            clr = "green";
            break;

        default:
            console.log("Tecla no valida!")
    }

}

function drawLine(color, x0, y0, xf, yf, drawArea) {

    drawArea.beginPath();
    drawArea.strokeStyle = color;
    drawArea.lineWidth = 3;
    drawArea.moveTo(x0, y0);
    drawArea.lineTo(xf, yf);
    drawArea.stroke();
    drawArea.closePath();

}

document.addEventListener("keyup", drawLineKey);
drawLine(clr, x - 1, y - 1, x + 1, y + 1, canv);