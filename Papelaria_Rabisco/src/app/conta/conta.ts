import { Component, inject, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LojaService, readStorage } from '../services/loja.service';

import { Icon } from '../compartilhado/icone';
import { validarCpf } from './cpf.validator';

const emailRules = [
  Validators.required,
  Validators.email,
  Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
];
const matchPasswords = (c: AbstractControl) =>
  c.get('password')?.value === c.get('confirm')?.value ? null : { mismatch: true };
// Apenas demonstração: este hash local não substitui autenticação em um servidor.
async function digest(s: string) {
  const data = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(data))
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('');
}

@Component({
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, Icon],
  templateUrl: './conta.html',
})
export class Conta {
  cdr = inject(ChangeDetectorRef);
  route = inject(ActivatedRoute);
  router = inject(Router);
  loja = inject(LojaService);
  fb = inject(FormBuilder);
  mode = 'login';
  submitted = false;
  busy = false;
  error = '';
  success = false;
  showPassword = false;
  form = this.fb.nonNullable.group(
    { name: [''], cpf: [''], email: ['', emailRules], password: [''], confirm: [''] },
    { validators: matchPasswords },
  );
  constructor() {
    this.route.data.subscribe((d) => {
      this.mode = d['mode'];
      this.form.reset();
      this.submitted = false;
      this.error = '';
      this.success = false;
      this.form.controls.name.setValidators(
        this.mode === 'cadastro'
          ? [Validators.required, Validators.pattern(/\S+\s+\S+/), Validators.maxLength(80)]
          : [],
      );
      this.form.controls.cpf.setValidators(
        this.mode === 'cadastro' ? [Validators.required, validarCpf] : [],
      );
      this.form.controls.password.setValidators(
        this.mode === 'recuperar' ? [] : [Validators.required, Validators.minLength(8)],
      );
      this.form.controls.confirm.setValidators(
        this.mode === 'cadastro' ? [Validators.required] : [],
      );
      this.form.setValidators(this.mode === 'cadastro' ? matchPasswords : []);
      Object.values(this.form.controls).forEach((c) => c.updateValueAndValidity());
    });
  }
  formatarCpf(event: Event) {
    const input = event.target as HTMLInputElement;
    const texto = input.value;
    const posicao = input.selectionStart ?? texto.length;
    const numerosAntes = texto.slice(0, posicao).replace(/\D/g, '').length;
    const numeros = texto.replace(/\D/g, '').slice(0, 11);
    const formatado = numeros
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    this.form.controls.cpf.setValue(formatado);
    input.value = formatado;
    let cursor = 0;
    let contagem = 0;
    while (cursor < formatado.length && contagem < numerosAntes) {
      if (/\d/.test(formatado[cursor])) contagem++;
      cursor++;
    }
    input.setSelectionRange(cursor, cursor);
  }
  invalid(n: string) {
    const c = this.form.get(n);
    return !!c?.invalid && (c.touched || this.submitted);
  }
  async submit() {
    this.submitted = true;
    this.error = '';
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.busy = true;
    try {
      const v = this.form.getRawValue();
      const email = v.email.trim().toLowerCase();
      if (this.mode === 'recuperar') {
        this.success = true;
        return;
      }
      const accounts = readStorage('rabisco-accounts', []);
      if (this.mode === 'cadastro') {
        if (accounts.some((u: any) => u.email === email)) {
          this.error = 'Este e-mail já está cadastrado neste navegador. Entre na sua conta.';
          return;
        }
        const salt = crypto.randomUUID();
        accounts.push({
          name: v.name.trim(),
          cpf: v.cpf.replace(/\D/g, ''),
          email,
          salt,
          hash: await digest(salt + v.password),
        });
        localStorage.setItem('rabisco-accounts', JSON.stringify(accounts));
        this.loja.entrar({ name: v.name.trim(), email });
        this.loja.avisar('Cadastro realizado.');
        this.router.navigate(['/']);
      } else {
        const u = accounts.find((a: any) => a.email === email);
        if (!u || u.hash !== (await digest(u.salt + v.password))) {
          this.error =
            'E-mail ou senha incorretos. Se ainda não tem uma conta neste navegador, cadastre-se.';
          return;
        }
        this.loja.entrar({ name: u.name, email: u.email });
        this.loja.avisar('Login realizado.');
        this.router.navigate(['/']);
      }
    } catch {
      this.error =
        'Não foi possível acessar os dados locais. Abra em localhost e permita o armazenamento do navegador.';
    } finally {
      this.busy = false;
      this.cdr.markForCheck();
    }
  }
}
