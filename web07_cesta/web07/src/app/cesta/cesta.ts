import { Component } from '@angular/core';
import { ItemCesta } from '../model/item-cesta';
import { CommonModule } from '@angular/common';


@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  mensagem: string = "";
  valorCesta:number = 0;

  itens: ItemCesta[] = [];

  ngOnInit(){
    if (typeof localStorage !== 'undefined') {
      const json = localStorage.getItem('cesta');
      this.itens = json ? JSON.parse(json) : [];
    }
    this.calculaTotal();
  }

  calculaTotal(){
    this.valorCesta = 0;
    for(let obj of this.itens){
      this.valorCesta+=obj.valorTotal;
    }
  }

}
