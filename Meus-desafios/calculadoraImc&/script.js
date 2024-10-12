
document.addEventListener('DOMContentLoaded', () => {
        const calcular = document.querySelector('button')
        const resultado = document.querySelector('.resultImc')
    
        
    calcular.addEventListener('click', () => {
        let nome = document.querySelector('input[name="name"]').value;
        if (nome.trim() == '') {
            nome = 'Fulano'
        }
        let peso = parseFloat(document.querySelector('input[name="weight"]').value)
        console.log(peso)
        let altura = parseFloat(document.querySelector('input[name="height"]').value)
        let classification;
    
    
        if (isNaN(peso) || isNaN(altura)) {
            resultado.innerHTML = 'Por favor, coloque um número válido na altura e peso.'
            return
        }
    
        const imc = peso / (altura ** 2)
        if (imc < 18.5) {
            classification = 'com Magreza'
        }
        else if (imc < 24.9) {
            classification = 'Normal'
        }
        
        else if (imc < 29.9) {
            classification = 'com Sobrepeso'
        }
        
        else if (imc < 39.9) {
            classification = 'com Obesidade'
        }
        else {
            classification = '<br>com Obesidade grave'
        }
    
        resultado.innerHTML = `${nome}, você está ${classification} com ${imc.toFixed(1)} de imc`
    })
    })

        