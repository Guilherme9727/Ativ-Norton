import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { LojaService } from '../services/loja.service';
import { PRODUCTS } from '../dados/produtos';
import { Produto } from '../model/produto';
import { Icon } from '../compartilhado/icone';
import { ProductCard } from '../compartilhado/cartao-produto';

@Component({
  standalone: true,
  imports: [RouterLink, CurrencyPipe, ProductCard, Icon],
  templateUrl: './detalhe.html',
})
export class Detalhe implements OnInit {
  cdr = inject(ChangeDetectorRef);
  loja = inject(LojaService);
  route = inject(ActivatedRoute);
  product?: Produto;
  qty = 1;
  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.product = PRODUCTS.find((x) => x.id === Number(p.get('id')));
      this.qty = 1;
      this.cdr.markForCheck();
    });
  }
  get related() {
    return PRODUCTS.filter(
      (p) => p.category === this.product?.category && p.id !== this.product.id,
    );
  }
}
