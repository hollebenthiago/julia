function mult([a,b],[c,d]) {
    return [a *c - b * d, a * d + b * c]
}

function m(n, a, b) {
    prods = [a,b]
    while (n > 1) {
        prods = mult([a, b], prods)
        n--
    }
    return prods
}