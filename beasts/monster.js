class Monster {
    constructor(n, t, h, a) {
        this.name = n;
        this.type = t;
        this.hp = h;
        this.ad = a;
        this.picture = new Image();
        this.picture.src = img[this.name];
    }

    speak() {
        alert(this.name);
    }

    invoke() {
        document.body.appendChild(this.picture);
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong><br>");
        document.write("Type: " + this.type + "<br>");
        document.write("HP: " + this.hp + "<br>");
        document.write("AD: " + this.ad + "<br>");
        document.write("<hr></p>");
    }
}