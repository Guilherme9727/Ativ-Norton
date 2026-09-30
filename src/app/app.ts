import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LojaService } from './services/loja.service';
import { Icon } from './compartilhado/icone';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, Icon],
  templateUrl: './app.html',
})
export class App {
  loja = inject(LojaService);
  router = inject(Router);
  search = '';
  menu = false;
  constructor() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.menu = false;
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.getElementById('main')?.focus({ preventScroll: true });
        }, 0);
      }
    });
  }
  focusContent() {
    document.getElementById('main')?.focus();
  }
  submit() {
    this.router.navigate(['/busca'], { queryParams: { q: this.search.trim() } });
  }
}
