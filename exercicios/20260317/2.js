// busca linear

function buscar (arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == valor.toLowerCase())
            return i;
    }

    return -1;
}

let arr = ["mari", "joao", "carlos"];
let valor = "mari";

let idx = buscar(arr, valor);

if (idx != -1)
    console.log("Valor encontrado no index " + buscar(arr, valor)) // Saída = "Valor encontrado no index 0"
else
    console.log("Valor não encontrado no array")