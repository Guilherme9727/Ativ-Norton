import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LojaService } from '../services/loja.service';
import { Produto } from '../model/produto';
import { Icon } from './icone';
@Component({
  selector: 'r-product',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, Icon],
  templateUrl: './cartao-produto.html',
})
export class ProductCard {
  @Input({ required: true }) product!: Produto;
  constructor(public loja: LojaService) {}
}
