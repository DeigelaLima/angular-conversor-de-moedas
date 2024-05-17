import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home-page/home-page.component';
import { ListagemDeMoedasComponent } from './components/pages/listagem-de-moedas/listagem-de-moedas.component';
import { ConverterMoedasComponent } from './components/pages/converter-moedas/converter-moedas.component';
// import { HistoricoComponent } from './components/pages/historico/historico.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listagem-de-moedas', component: ListagemDeMoedasComponent},
  {path: 'converter-moedas', component: ConverterMoedasComponent},
  // {path: 'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
