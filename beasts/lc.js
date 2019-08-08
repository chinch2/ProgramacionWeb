var img = [];

img["Cthulhu"] = "cthulhu.png";
img["Nodens"] = "nodens.png";
img["Nyarlathotep"] = "nyarlathotep.png";

var bestiary = [];

bestiary.push(new Monster("Cthulhu", "Almighty God", 50000, 1500));
bestiary.push(new Monster("Nodens", "Powerful God", 30000, 120));
bestiary.push(new Monster("Nyarlathotep", "Dark Demon", 45000, 90));

console.log(bestiary);

for (var b of bestiary) { //contenido
    b.invoke();
}

for (var i in bestiary) { // indice
    console.log(i);
}