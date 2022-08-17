const onClick = (random = 0) => {
    random = Math.floor(Math.random() * 100) + 1
    
    document.getElementById("numerorandom").innerHTML = random
    return random
}

