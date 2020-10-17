var loop = prompt("Which loop? ");

if (loop) {
    var x = 0;
    while (x < 5) {
        console.log("Hello");
        x++;
    }
}
else {
    for (var x = 0; x < 5; x++)
        console.log("Hello");
}

if (loop) {
    var x = 1;
    while (x < 26) {
        if (x % 2 != 0)
            console.log(x);
        x++;
    }
}
else {
    for (var x = 1; x < 26; x++) {
        if (x % 2 != 0)
            console.log(x);
    }
}