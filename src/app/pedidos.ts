import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private lista: Pedido[] = [];

  listar() {
    return this.lista;
  }

  adicionar(pedido: Pedido) {
    this.lista.push(pedido);
  }

  remover(index: number) {
    this.lista.splice(index, 1);
  }

  pedidoEmPreparo(index: number) {
    this.lista[index].status = 'preparo';
  }

  pedidoPronto(index: number) {
    this.lista[index].status = 'pronto';
  }

  pedidoSaiuParaEntrega(index: number) {
    this.lista[index].status = 'rota';
  }

  marcarEntregue(index: number) {
    this.lista[index].status = 'entregue';
  }
}
