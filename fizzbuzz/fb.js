function module(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}

for (var i = 1; i <= 100; i++) {
    if (module(i, 3)) {
        document.write("fizz");
    }

    if (module(i, 5)) {
        document.write("buzz");
    }

    if (!module(i, 3) && !module(i, 5)) {

        document.write(i);
    }
    document.write("<br>");
}