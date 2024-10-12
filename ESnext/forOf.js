for (let letra of 'Junio') {
    console.log(letra)
}

const assuntosECMa = [ 'set', 'Map', 'promise' ]

for (let i in assuntosECMa) {
    console.log(i)
}

for (let assunto of assuntosECMa) {
    console.log(assunto)
}

const assuntosMap = new Map( [ 
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])
for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap) {
    console.log(chave, valor)
}

const set = new Set( [ 'a', 'b', 'c' ] )
for (let letra of set) {
    console.log(letra)
}