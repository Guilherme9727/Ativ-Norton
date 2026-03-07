/* exercicio 04
    Criar uma função que utilize alocação dinâmica de memória
    para criar uma nova conta bancária.
*/


// Definição da estrutura do TAD Conta Bancária
typedef struct {
    int numero;
    float saldo;
} ContaBancaria;


/*
    Função: criarConta
    Objetivo: criar uma nova conta utilizando alocação dinâmica
*/
ContaBancaria* criarConta(int numero)
{
    // 1 - solicitar espaço na memória
    ContaBancaria *novaConta = (ContaBancaria*) malloc(sizeof(ContaBancaria));

    // 2 - verificar se a memória foi alocada corretamente
    if(novaConta != NULL)
    {
        novaConta->numero = numero;
        novaConta->saldo = 0.0;

        printf("Conta %d criada com sucesso na memoria.\n", numero);
    }
    else
    {
        printf("Erro: nao foi possivel alocar memoria.\n");
    }

    // 3 - retornar o ponteiro para a conta criada
    return novaConta;
}


int main()
{
    printf("=== TESTE DA CRIACAO DINAMICA DE CONTA ===\n\n");

    // ponteiro que receberá o endereço da conta criada
    ContaBancaria *contaDinamica;

    // criação da conta
    contaDinamica = criarConta(2024);

    // verificar se a conta foi criada corretamente
    if(contaDinamica != NULL)
    {
        printf("Numero da conta: %d\n", contaDinamica->numero);
        printf("Saldo inicial: R$ %.2f\n\n", contaDinamica->saldo);

        // liberar memória (boa prática obrigatória em C)
        free(contaDinamica);

        printf("Memoria liberada com sucesso.\n");
    }

    return 0;
}