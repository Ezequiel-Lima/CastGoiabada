import { ContatosComponent } from './page/contatos/contatos.component';
import { SobrenosComponent } from './page/sobrenos/sobrenos.component';
import { ProdutosComponent } from './page/produtos/produtos.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'contatos', component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
