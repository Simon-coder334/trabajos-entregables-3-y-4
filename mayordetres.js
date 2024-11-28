function encontrarMayor(a, b, c) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    if (c === void 0) { c = 15; }
    if (a >= b) {
        if (a >= c)
            return a;
    }
    if (b >= c)
        return b;
    return c;
}
console.log("El mayor es:", encontrarMayor(10, 20, 15));
