/* busca binária string

Enquanto uma busca comum (linear) olha item por item, a binária funciona como se você estivesse procurando uma palavra em um dicionário físico: 
você abre no meio e decide se o que procura está para a esquerda ou para a direita.

Para que ela funcione, a arr PRECISA estar ordenada.

A ideia é reduzir o espaço de busca pela metade a cada passo:
1. Definimos um ponteiro no inicio (0) e outro no fim (último índice).
2. Calculamos o meio.
3. Se o nome no meio for o que buscamos, terminamos.
4. Se o nome que buscamos for "menor" (vem antes no alfabeto) que o do meio, descartamos a metade direita.
5. Se for "maior", descartamos a metade esquerda.
6. Repetimos até encontrar ou os ponteiros se cruzarem.
*/

function buscaBinaria(arr, target) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        // Calculamos o meio de forma segura
        let meio = Math.floor((inicio + fim) / 2);
        let chute = arr[meio];

        if (chute === target) {
            return `Encontrado na posição ${meio}`;
        }

        // Em JS, strings podem ser comparadas com > e < (ordem alfabética)
        if (chute > target)
            fim = meio - 1; // O target está na metade da esquerda
        else
            inicio = meio + 1; // O target está na metade da direita
    }

    return "Nome não encontrado na arr.";
}

const nomes = ["Ana", "Bruno", "Carlos", "Daniel", "Erika", "Felipe", "Zeca"];
console.log(buscaBinaria(nomes, "Felipe")); // Saída: Encontrado na posição 5