var money;
var delivered = [];
var cash = [];
var div;
var bills;
var butt = document.getElementById("withdraw");
var res = document.getElementById("result");

function giveMoney() {

    var mon = document.getElementById("money");
    money = parseInt(mon.value);

    for (var m of cash) {

        if (money > 0) {

            div = Math.floor(money / m.value);

            if (div > m.quantity) {

                bills = m.quantity;

            } else {

                bills = div;

            }

            delivered.push(new Paper(m.value, bills));
            money -= (m.value * bills);
        }
    }

    if (money > 0) {

        res.innerHTML = "No se dispone de billetes para entregar el dinero solicitado. :(";

    } else {

        for (var del of delivered) {

            if (del.quantity > 0) {

                res.innerHTML += del.quantity + " Billetes de " + del.value + "$<br>";

            }
        }

    }
}

cash.push(new Paper(100, 5));
cash.push(new Paper(50, 30));
cash.push(new Paper(20, 5));
cash.push(new Paper(10, 20));
cash.push(new Paper(5, 5));

butt.addEventListener("click", giveMoney);