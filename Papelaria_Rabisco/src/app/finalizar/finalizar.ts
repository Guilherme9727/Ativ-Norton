import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LojaService } from '../services/loja.service';

import { Icon } from '../compartilhado/icone';

const emailRules = [
  Validators.required,
  Validators.email,
  Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
];

@Component({
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CurrencyPipe, Icon],
  templateUrl: './finalizar.html',
})
export class Finalizar {
  loja = inject(LojaService);
  router = inject(Router);
  fb = inject(FormBuilder);
  submitted = false;
  error = '';
  form = this.fb.nonNullable.group({
    name: [this.loja.usuario()?.name || '', [Validators.required, Validators.pattern(/\S+\s+\S+/)]],
    email: [this.loja.usuario()?.email || '', emailRules],
    cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
    address: ['', [Validators.required, Validators.pattern(/\S.{3,}/)]],
    number: ['', [Validators.required, Validators.pattern(/^\d+[A-Za-z]?$/)]],
    city: ['', [Validators.required, Validators.pattern(/\S.{1,}/)]],
    state: ['', [Validators.required]],
    accept: [false, Validators.requiredTrue],
  });
  states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  invalid(n: string) {
    const c = this.form.get(n);
    return !!c?.invalid && (c.touched || this.submitted);
  }
  finish() {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid || !this.loja.quantidadeTotal()) return;
    try {
      const order = {
        id: 'RB-' + Date.now().toString().slice(-8),
        name: this.form.controls.name.value,
        lines: this.loja.itens(),
        total: this.loja.total(),
      };
      sessionStorage.setItem('rabisco-order', JSON.stringify(order));
      this.loja.esvaziar();
      this.router.navigate(['/pedido']);
    } catch {
      this.error = 'Não foi possível salvar o pedido neste navegador. Sua cesta foi mantida.';
    }
  }
}
