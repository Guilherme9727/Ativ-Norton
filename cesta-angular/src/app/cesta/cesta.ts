import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  lista: ItemCesta[] = [
    {
      codigo: 1,
      nome: 'Martelo de Unha 25mm',
      valorUnitario: 29.0,
      quantidade: 2,
    },
    {
      codigo: 3,
      nome: 'Jogo de Chaves Allen',
      valorUnitario: 30.0,
      quantidade: 1,
    },
    {
      codigo: 8,
      nome: 'Furadeira de Impacto 650W',
      valorUnitario: 250.0,
      quantidade: 1,
    },
    {
      codigo: 9,
      nome: 'Extensão Elétrica 10 Metros',
      valorUnitario: 59.9,
      quantidade: 3,
    },
  ];

  subtotal(item: ItemCesta): number {
    return item.valorUnitario * item.quantidade;
  }

  totalGeral(): number {
    let total = 0;

    for (const item of this.lista) {
      total += this.subtotal(item);
    }

    return total;
  }

  aumentarQuantidade(item: ItemCesta): void {
    item.quantidade++;
  }

  diminuirQuantidade(item: ItemCesta): void {
    if (item.quantidade > 1) {
      item.quantidade--;
    }
  }

  removerItem(codigo: number): void {
    this.lista = this.lista.filter((item) => item.codigo !== codigo);
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
