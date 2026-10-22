import { Routes } from '@angular/router';
import { CadastrarPedidoComponent } from './cadastrar-pedido/cadastrar-pedido';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarPedidoComponent },
  { path: 'lista', component: ListaPedidosComponent }
];
