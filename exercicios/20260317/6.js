// busca binária números
function buscaBinaria(arr, target) {
    let inicio = 0;
    let fim = arr.length - 1;

    while(inicio <= fim) {
        // Calc meio arredondado
        let meio = Math.floor((inicio + fim)/2);
        let chute = arr[meio];

        if (chute == target)
            return `${target} encontrado em ${meio}`;

        if (chute > target)
            fim = meio - 1;
        else
            inicio = meio + 1;
    }

    return `${target} não encontrado`;
}