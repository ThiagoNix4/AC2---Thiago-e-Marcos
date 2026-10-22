import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../pedidos';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-pedidos.html',
  styleUrl: './lista-pedidos.css'
})
export class ListaPedidosComponent {
  pedidos: Pedido[] = [];

  constructor(private service: PedidosService) {
    this.pedidos = this.service.listar();
  }

  aceitar(i: number) {
    this.service.pedidoEmPreparo(i);
  }

  emPreparo(i: number) {
    this.service.pedidoPronto(i);
  }

  emRota(i: number) {
    this.service.pedidoSaiuParaEntrega(i);
  }

  entregue(i: number) {
    this.service.marcarEntregue(i);
  }

  cancelar(i: number) {
    this.service.remover(i);
  }

  get total() {
    return this.pedidos.length;
  }

  get concluidas() {
    return this.pedidos.filter(p => p.status === 'entregue').length;
  }

  get pendentes() {
    return this.pedidos.filter(p => p.status !== 'entregue').length;
  }
}
