import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home-page/home-page.component';
import { ListagemDeMoedasComponent } from './components/pages/listagem-de-moedas/listagem-de-moedas.component';
import { ConverterMoedasComponent } from './components/pages/converter-moedas/converter-moedas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listagem-de-moedas', component: ListagemDeMoedasComponent},
  {path: 'converter-moedas', component: ConverterMoedasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
