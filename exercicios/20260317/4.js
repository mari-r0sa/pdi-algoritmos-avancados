// 2 maiores valores
function encontrarDoisMaiores(arr) {
    // inicializamos com o menor valor possível
    let maior = -Infinity;
    let segundoMaior = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const atual = arr[i];

        if (atual > maior) {
            segundoMaior = maior;
            maior = atual;
        } else if (atual > segundoMaior && atual !== maior) {
            segundoMaior = atual;
        }
    }

    return [maior, segundoMaior];
}

const numeros = [2, 6, 5, 8, 1, 50, 96];
console.log(encontrarDoisMaiores(numeros)); // [96, 50]