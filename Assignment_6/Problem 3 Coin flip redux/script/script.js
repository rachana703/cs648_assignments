/*eslint-env browser*/
var coinFlip;
for (var i = 0; i < 10; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}