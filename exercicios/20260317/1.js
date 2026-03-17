// bubbleSort
function bubbleSort(arr) {
    let i, j, temp, trocou

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                trocou = true
            }
        }

        // Se não trocou nenhum no outro loop, para exec
        if (!trocou)
            break;
    }
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
    }
}

let livros = [1, 45, 2, 34, 22, 12, 43]

bubbleSort(livros);

printArray(livros); 
/* Saída =
    1
    2
    12
    22
    34
    43
    45 */