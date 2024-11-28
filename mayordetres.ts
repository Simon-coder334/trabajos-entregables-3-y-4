function encontrarMayor(a: number = 10 , b: number = 20 , c: number = 15): number {
    if (a >= b) {
        if (a >= c) return a;
    }
    if (b >= c) return b;
    return c;
}

console.log("El mayor es:", encontrarMayor(10, 20, 15));