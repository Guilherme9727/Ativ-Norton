#include <stdio.h>

/* 1 - Qual o valor de y no final do programa?
Resposta: y = 4 */

int main()
{
    int y, *p, x;
    y = 0;
    p = &y;       /* aponta para o valor de y (y=0) */
    x = *p;       /* atribui como o conteudo apontado por p (y=0) valor da variavel */
    x = 4;        /* atribui um novo valor da variavel x */
    ++(*p);       /* pre-incrementa o valor associado ao ponteirop (0+1=1) */
    x--;          /* mesmo que -1. Ou seja, 4-1=3 */
    (*p) += x++;  /* mesmo que *p = *p + (x+1) -> 1+3 =4 */
    printf ("y = %d\n", y); 

    return 0;
}


/* 2 - Teste e explique a diferença, caso exista, entre p++; (*p)++; *(++p); 
Resposta: p++ incrementa o endereco na memoria, pulando para o proximo endereco 
(*p)++ incrementa em +1 o conteudo da variavel apontado por p
*(++p) incrementa o ponteiro primeiro e depois acessa o valor armazenado nessa nova posição 

b) O que quer dizer *(p+10)?
Resposta: significa que avança 10 posicoes na memoria.


/* 3 - Quais serão os valores de x, y e p ao final do trecho de código abaixo?
Resposta: y = 4, x = 3, p = 4 */

int main()
{
    int x, y, *p;
    y = 0;
    p = &y;      /* aponta para o valor de y (y=0) */
    x = *p;      /* atribui como o conteudo apontado por p (y=0) valor da variavel */
    x = 4;       /* atribui um novo valor da variavel x */
    (*p)++;      /* incrementa o conteudo da variavel apontado por p (y=0+1 =1) */
    --x;         /* decrementa e depois retorna. X = 3 */
    (*p) += x;   /* *p = *p + x -> 1+3 = 4*/
    printf ("y = %d\n p = %p\n x =%d\n", y, *p, x); 

    return 0;
}


/* 4- Os programas (trechos de código) abaixo possuem erros. Qual(is)?
Como deveriam ser?
a) */
void main() {
    int x, *p;
    x = 100;
    p = x;   /* Erro - deveria ser p = &x para asssociar a variavel como valor do ponteiro */
    printf(“Valor de p: %d.\n”, *p);} 

/* b) */
void troca (int *i, int *j) {
    int *temp;   /* Erro - ponteiro nao esta inicializado */
    *temp = *i;
    *i = *j;
    *j = *temp;}

/* c) */
    char *a, *b;
    a = “abacate”;
    b = “uva”;
    if (a < b)
      printf (“%s vem antes de %s no dicionário”, a, b);
    else
      printf (“%s vem depois de %s no dicionário”, a, b);
/* o erro esta na comparacao, pois esta pegando os espaços da memória e naã a ordem alfabetica. Deve usar strcmp para funcionar
    if (strcmp(a, b) < 0)
      printf (“%s vem antes de %s no dicionário”, a, b);
    else
      printf (“%s vem depois de %s no dicionário”, a, b); */


/* 5 - Escreva uma função chamada troca que troca os valores dos
parâmetros recebidos. Sua assinatura deve ser:void troca(float *a, float *b);*/

void troca(float *a, float *b){
    float x;   /* declarando variavel auxiliar para fazer a troca*/
    x = *a;
    a*= *b;
    b* = x;
}  