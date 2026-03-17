// maior valor

function buscarMaior(arr) {
    let maior = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior)
            maior = arr[i]
    }

    return maior;
}

let arr = [6, 2, 3, 44, 1, 61, 19, 24]
let maior = buscarMaior(arr)
console.log(maior) // Saída = 61