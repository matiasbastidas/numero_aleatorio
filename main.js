var random = 0;
function onClick () {
    var random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numerorandom").innerHTML = random;
    console.log(random);
}