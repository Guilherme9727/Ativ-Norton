import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LojaService } from '../services/loja.service';
import { PRODUCTS } from '../dados/produtos';

import { Icon } from '../compartilhado/icone';
import { ProductCard } from '../compartilhado/cartao-produto';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, ProductCard, Icon],
  templateUrl: './vitrine.html',
})
export class Vitrine implements OnInit {
  cdr = inject(ChangeDetectorRef);
  loja = inject(LojaService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  q = '';
  category = '';
  order = 'selection';
  isHome = true;
  ngOnInit() {
    this.isHome = this.route.snapshot.routeConfig?.path === '';
    this.route.queryParamMap.subscribe((p) => {
      this.q = p.get('q') || '';
      this.category = p.get('categoria') || '';
      this.cdr.markForCheck();
    });
  }
  normalize(s: string) {
    return s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
  get filtered() {
    let items = PRODUCTS.filter(
      (p) =>
        (!this.category || p.category === this.category) &&
        this.normalize(p.name + ' ' + p.brand + ' ' + p.category).includes(this.normalize(this.q)),
    );
    if (this.order === 'low') items.sort((a, b) => a.price - b.price);
    if (this.order === 'high') items.sort((a, b) => b.price - a.price);
    if (this.order === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }
  select(cat: string) {
    this.router.navigate([this.isHome ? '/' : '/busca'], {
      queryParams: { q: this.q || null, categoria: cat || null },
    });
  }
}
