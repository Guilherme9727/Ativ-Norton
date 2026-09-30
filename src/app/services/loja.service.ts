import { Injectable, computed, signal } from '@angular/core';
import { PRODUCTS, CATEGORIES } from '../dados/produtos';
export function readStorage(key: string, fallback: any): any {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback;
  } catch {
    return fallback;
  }
}
@Injectable({ providedIn: 'root' })
export class LojaService {
  readonly produtos = PRODUCTS;
  readonly categorias = CATEGORIES;
  // Signals atualizam a tela quando a cesta ou o usuário mudam.
  readonly cesta = signal<{ id: number; qty: number }[]>(this.carregarCesta());
  readonly aviso = signal('');
  readonly usuario = signal<{ name: string; email: string } | null>(
    readStorage('rabisco-session', null),
  );
  // Computed recalcula os dados que dependem da cesta.
  readonly itens = computed(() =>
    this.cesta().map((x) => ({ ...x, product: PRODUCTS.find((p) => p.id === x.id)! })),
  );
  readonly quantidadeTotal = computed(() => this.cesta().reduce((s, x) => s + x.qty, 0));
  readonly total = computed(() => this.itens().reduce((s, x) => s + x.product.price * x.qty, 0));
  private timer?: ReturnType<typeof setTimeout>;
  private carregarCesta() {
    const raw = readStorage('rabisco-cart', []);
    return Array.isArray(raw)
      ? raw.filter(
          (x) =>
            x &&
            PRODUCTS.some((p) => p.id === x.id) &&
            Number.isInteger(x.qty) &&
            x.qty > 0 &&
            x.qty <= 99,
        )
      : [];
  }
  salvar() {
    try {
      localStorage.setItem('rabisco-cart', JSON.stringify(this.cesta()));
    } catch {
      this.avisar('Seu navegador não permitiu salvar a cesta.');
    }
  }
  adicionar(id: number, qty = 1) {
    if (!PRODUCTS.some((p) => p.id === id) || !Number.isInteger(qty) || qty < 1 || qty > 99) return;
    const old = this.cesta().find((x) => x.id === id);
    if (old && old.qty + qty > 99) {
      this.avisar('Limite de 99 unidades por produto.');
      return;
    }
    // Se o produto já está na cesta, soma as quantidades.
    if (old) {
      this.alterarQuantidade(id, old.qty + qty);
    } else {
      // Cria uma nova lista para o Angular perceber a mudança.
      this.cesta.set([...this.cesta(), { id, qty }]);
    }
    this.salvar();
    this.avisar('Produto adicionado à cesta.');
  }
  alterarQuantidade(id: number, n: number) {
    if (!Number.isInteger(n) || n < 1 || n > 99) return;
    this.cesta.update((a) => a.map((x) => (x.id === id ? { ...x, qty: n } : x)));
    this.salvar();
  }
  remover(id: number) {
    this.cesta.update((a) => a.filter((x) => x.id !== id));
    this.salvar();
    this.avisar('Produto removido da cesta.');
  }
  esvaziar() {
    this.cesta.set([]);
    this.salvar();
  }
  avisar(s: string) {
    this.aviso.set(s);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.aviso.set(''), 4000);
  }
  entrar(u: { name: string; email: string }) {
    this.usuario.set(u);
    try {
      localStorage.setItem('rabisco-session', JSON.stringify(u));
    } catch {}
  }
  sair() {
    this.usuario.set(null);
    localStorage.removeItem('rabisco-session');
    this.avisar('Você saiu da conta.');
  }
}
