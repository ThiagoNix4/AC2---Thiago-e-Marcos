import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../pedidos';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-cadastrar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastrar-pedido.html',
  styleUrl: './cadastrar-pedido.css'
})
export class CadastrarPedidoComponent {
  bulbasaur = '';
  charmander = '';
  squirtle = '';
  pikachu = '';
  mewtwo = '';

  constructor(private service: PedidosService) {}

  cadastrar() {
    const pedido: Pedido = {
      bulbasaur: this.bulbasaur,
      charmander: this.charmander,
      squirtle: this.squirtle,
      pikachu: this.pikachu,
      mewtwo: this.mewtwo,
      status: 'branco'
    };
    this.service.adicionar(pedido);
    this.bulbasaur = '';
    this.charmander = '';
    this.squirtle = '';
    this.pikachu = '';
    this.mewtwo = '';
  }
}
