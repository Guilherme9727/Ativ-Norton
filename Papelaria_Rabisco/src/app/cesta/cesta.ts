import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LojaService } from '../services/loja.service';

import { Icon } from '../compartilhado/icone';

@Component({
  standalone: true,
  imports: [RouterLink, CurrencyPipe, FormsModule, Icon],
  templateUrl: './cesta.html',
})
export class Cesta {
  loja = inject(LojaService);
  confirmClear = false;
  change(id: number, event: Event) {
    const el = event.target as HTMLInputElement;
    this.loja.alterarQuantidade(id, Number(el.value));
    el.value = String(this.loja.cesta().find((x) => x.id === id)?.qty || 1);
  }
}
