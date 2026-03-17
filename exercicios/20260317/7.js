/* Árvores de Torneio

- O Conceito: "Quem perdeu para o campeão?"
A lógica é: o segundo maior valor obrigatoriamente perdeu um confronto direto contra o campeão em algum momento do torneio.

- Passo 1: Encontrar o Maior (O Torneio)
Montamos uma árvore binária onde os elementos duelam em pares. O vencedor sobe para o próximo nível.
-- Ao final, o topo da árvore é o Maior.

- Passo 2: Encontrar o Segundo Maior (A Repescagem)
Não precisamos olhar para todos os números novamente. Olhamos apenas para os números que foram derrotados diretamente pelo campeão durante a subida da árvore.

- Exemplo Prático (n = 8)
Arr = [10, 2, 8, 15, 20, 3, 5, 7]
-- Primeira rodada: 
    -- (10 vs 2) -> vence o 10
    -- (8 vs 15) -> vence o 15
    -- (20 vs 3) -> vence o 20
    -- (5 vs 7) -> vence o 7
    -- Vencedores: 10, 15, 20, 7
-- Segunda rodada: 
    -- (10 vs 15) -> vence o 15
    -- (20 vs 7) -> vence o 20
    -- Vencedores: 15, 20
-- Final:
    -- (15 vs 20) -> vence o 20
    -- Campeão: 20

Quem perdeu para o 20?
- Na rodada 1: perdeu o 3.
- Na rodada 2: perdeu o 7.
- Na final: perdeu o 15.

Agora, basta comparar [3, 7, 15] para achar o maior entre eles. O 15 ganha com apenas 2 comparações extras.
*/

function encontrarDoisMaioresTorneio(arr) {
    // Transformamos o array de números em um array de objetos c ele, [array, de, derrotados, por, ele]
    let nos = arr.map(valor => ({ valor, derrotados: [] }));

    // Enquanto houver mais de um competidor, torneio continua
    while (nos.length > 1) {
        let proxNvl = [];

        // Percorremos os competidores de 2 em 2 (i += 2).
        for (let i = 0; i < nos.length; i += 2) {
            
            // Verificamos se existe um par para o competidor atual (i + 1)
            if (i + 1 < nos.length) {
                let comp1 = nos[i];     // Primeiro competidor
                let comp2 = nos[i + 1]; // Segundo competidor

                // Compara os valores
                // Quem vence recebe o perdedor no array de derrotados e avança p próxima fase
                if (comp1.valor > comp2.valor) {
                    comp1.derrotados.push(comp2.valor);
                    proxNvl.push(comp1);
                } else {
                    comp2.derrotados.push(comp1.valor);
                    proxNvl.push(comp2);
                }
            } else {
                // CASO ÍMPAR: Se o competidor não tem par, ele sobe para o próximo nível sem precisar duelar
                proxNvl.push(nos[i]);
            }
        }
        // Atualizamos a lista de competidores com os vencedores desta rodada.
        // A árvore vai encolhendo
        nos = proxNvl;
    }

    // Quando o 'while' termina, sobrou apenas um objeto no array: o CAMPEÃO
    const campeao = nos[0];
    let segMaior = -Infinity;

    // Percorremos apenas a lista 'derrotados' do campeão (que é bem pequena).
    for (let valor of campeao.derrotados) {
        // Se este valor for maior que o nosso 'segMaior' atual, atualizamos.
        if (valor > segMaior) {
            segMaior = valor;
        }
    }

    // Retornamos um objeto com os resultados finais.
    return {
        maior: campeao.valor,
        segMaior: segMaior,
        caminhoDoCampeao: campeao.derrotados 
    };
}

// Teste
const numeros = [10, 2, 8, 15, 20, 3, 5, 7];
const resultado = encontrarDoisMaioresTorneio(numeros);

console.log(`Maior: ${resultado.maior}`); // 20
console.log(`Segundo Maior: ${resultado.segMaior}`); // 15
console.log(`Candidatos a 2º (derrotados pelo 20): ${resultado.caminhoDoCampeao}`);