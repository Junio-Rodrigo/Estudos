class avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
    apresentar() {
        return `Olá, eu sou da familia ${this.sobrenome} e eu sou ${this.profissão}`
    }
}
class pai extends avo {
    constructor (sobrenome, profissão = 'Professor') {
        super(sobrenome) 
        this.profissão = profissão
    }
}
class filho extends pai {
    constructor () {
        super('Silva', 'Engenheiro')
    }
}

const filho1 = new filho
console.log(filho1.apresentar())