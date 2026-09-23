import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vitrine } from './vitrine';

describe('Vitrine', () => {
  let component: Vitrine;
  let fixture: ComponentFixture<Vitrine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vitrine],
    }).compileComponents();

    fixture = TestBed.createComponent(Vitrine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds products and increments an existing item using the promotional price', () => {
    localStorage.removeItem('cesta');
    component.adicionarCesta(component.lista[0]);
    component.adicionarCesta(component.lista[0]);
    component.adicionarCesta(component.lista[1]);

    const itens = JSON.parse(localStorage.getItem('cesta')!);
    expect(itens).toHaveLength(2);
    expect(itens[0].quantidade).toBe(2);
    expect(itens[0].valorTotal).toBe(58);
    expect(itens[1].quantidade).toBe(1);
    expect(itens[1].valorTotal).toBe(18.5);
    localStorage.removeItem('cesta');
  });
});
