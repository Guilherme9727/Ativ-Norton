import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Detalhe } from './detalhe/detalhe';
import { Cesta } from './cesta/cesta';
import { Conta } from './conta/conta';
import { Finalizar } from './finalizar/finalizar';
import { Pedido } from './pedido/pedido';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';
export const routes: Routes = [
  { path: '', component: Vitrine, title: 'Rabisco — Ideias começam no papel.' },
  { path: 'busca', component: Vitrine, title: 'Encontre sua ideia | Rabisco' },
  { path: 'produto/:id', component: Detalhe, title: 'Detalhes do produto | Rabisco' },
  { path: 'cesta', component: Cesta, title: 'Sua cesta | Rabisco' },
  {
    path: 'login',
    component: Conta,
    title: 'Entre no seu cantinho | Rabisco',
    data: { mode: 'login' },
  },
  {
    path: 'cadastro',
    component: Conta,
    title: 'Crie sua conta | Rabisco',
    data: { mode: 'cadastro' },
  },
  {
    path: 'recuperar-senha',
    component: Conta,
    title: 'Recuperar senha | Rabisco',
    data: { mode: 'recuperar' },
  },
  { path: 'finalizar', component: Finalizar, title: 'Finalizar compra | Rabisco' },
  { path: 'pedido', component: Pedido, title: 'Meu pedido | Rabisco' },
  { path: 'vitrine', redirectTo: '', pathMatch: 'full' },
  { path: 'reenvio', redirectTo: 'recuperar-senha', pathMatch: 'full' },
  { path: 'resultado-busca', redirectTo: 'busca', pathMatch: 'full' },
  { path: '**', component: NaoEncontrado, title: 'Página não encontrada | Rabisco' },
];
