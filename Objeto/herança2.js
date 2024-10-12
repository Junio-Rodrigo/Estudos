// cadeia de protótipos (prototype chain)

Object.prototype = {atr0: '0'} // não faça isso em casa!
const avo = { atr1: 'A'}
const pai = {__proto__: avo, atr2: 'B', atr: '3'}
const filho = {__proto__: pai, atr3: 'C'}
console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(vel) {
        if (vel <= this.velMax) {
            this.velAtual += vel
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {return `${this.velAtual}Km/h por ${this.velMax}Km/h`}
}

carro.acelerar(0)
console.log(carro.status())

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(140)
console.log(ferrari.status())

volvo.acelerar(20)
console.log(volvo.status())