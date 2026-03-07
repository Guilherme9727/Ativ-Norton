#include <stdio.h>
#include <stdlib.h>

/*
ATIVIDADE – TIPO ABSTRATO DE DADOS (TAD)

1) O que é um Tipo Abstrato de Dados (TAD) e qual a característica fundamental?

Um Tipo Abstrato de Dados (TAD) é uma forma de organizar dados e as operações
que podem ser feitas sobre eles. O TAD define o que pode ser feito com os dados,
mas não necessariamente mostra como esses dados são implementados internamente.

A principal característica de um TAD é o encapsulamento, ou seja, os dados ficam
protegidos e só podem ser acessados através das funções definidas pelo próprio TAD.
Isso ajuda a evitar erros e facilita a organização do programa.


2) Quais as vantagens de se programar com TADs?

Algumas vantagens são:

- Melhor organização do código
- Reutilização de código em outros programas
- Maior segurança dos dados
- Facilidade de manutenção do programa
- Separação entre implementação e uso da estrutura

Isso faz com que programas maiores fiquem mais fáceis de desenvolver e manter. */


// Definicao da estrutura (TAD)
typedef struct {
    int numero;
    float saldo;
} ContaBancaria;

// Funcao para inicializar a conta
void inicializar(ContaBancaria *c, int numero) {
    c->numero = numero;
    c->saldo = 0.0;
    printf("Conta %d inicializada com sucesso.\n", c->numero);
}

// Funcao para realizar depositos
void depositar(ContaBancaria *c, float valor) {
    if (valor > 0) {
        c->saldo += valor;
        printf("Deposito de R$%.2f realizado.\n", valor);
    } else {
        printf("Valor de deposito invalido.\n");
    }
}

// Funcao para realizar saques
void sacar(ContaBancaria *c, float valor) {
    if (valor > 0 && c->saldo >= valor) {
        c->saldo -= valor;
        printf("Saque de R$%.2f realizado.\n", valor);
    } else {
        printf("Saque invalido ou saldo insuficiente.\n");
    }
}

// Funcao para imprimir o saldo atual
void imprimirSaldo(ContaBancaria *c) {
    printf("=== SALDO: Conta %d | R$%.2f ===\n\n", c->numero, c->saldo);
}

int main() {
    ContaBancaria minhaConta; // Alocacao estatica da variavel

    printf("--- TESTE DA QUESTAO 3 ---\n");

    inicializar(&minhaConta, 1001);
    imprimirSaldo(&minhaConta);

    depositar(&minhaConta, 300.50);
    imprimirSaldo(&minhaConta);

    sacar(&minhaConta, 100.00);
    imprimirSaldo(&minhaConta);

    sacar(&minhaConta, 500.00); // Tentativa de saque maior que o saldo

    return 0;
}