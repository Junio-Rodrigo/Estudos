// Fazer um programa para encontrar todos os pares entre 1 e 100.
pares = []
for (let i = 0; i < 101; i++ ) {
    if (i % 2 == 0) {
        pares.push(i)
    }
}
console.log(pares)