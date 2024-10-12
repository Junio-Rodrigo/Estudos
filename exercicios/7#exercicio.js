const bhaskara = function(ax2, bx, c) {
    let delta =(bx ** 2 - 4 * ax2 * c);
    if (delta < 0) {
        console.log('Delta Negativo!!!!')
    }
    else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        console.log(`x1 = ${x1.toFixed(2)}`);
        console.log(`x2 = ${x2.toFixed(2)}`);
    }  
}

bhaskara(1, 3, 2)
bhaskara(3, 1 ,2)