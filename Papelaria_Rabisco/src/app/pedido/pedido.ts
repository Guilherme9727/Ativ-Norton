import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Icon } from '../compartilhado/icone';

@Component({
  standalone: true,
  imports: [RouterLink, CurrencyPipe, Icon],
  templateUrl: './pedido.html',
})
export class Pedido {
  order = readOrder();
}
function readOrder() {
  try {
    return JSON.parse(sessionStorage.getItem('rabisco-order') || 'null');
  } catch {
    return null;
  }
}
