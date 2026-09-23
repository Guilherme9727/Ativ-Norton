import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cesta } from './cesta';

describe('Cesta', () => {
  let component: Cesta;
  let fixture: ComponentFixture<Cesta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cesta],
    }).compileComponents();

    fixture = TestBed.createComponent(Cesta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reads the stored items and calculates the cart total', () => {
    localStorage.setItem('cesta', JSON.stringify([
      { produto: { codigo: 1 }, quantidade: 2, valorTotal: 58 },
      { produto: { codigo: 2 }, quantidade: 1, valorTotal: 18.5 },
    ]));
    component.ngOnInit();

    expect(component.itens).toHaveLength(2);
    expect(component.valorCesta).toBe(76.5);
    localStorage.removeItem('cesta');
  });
});
