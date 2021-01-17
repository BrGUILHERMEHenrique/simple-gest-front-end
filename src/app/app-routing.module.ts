import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthProviderGuard } from 'src/app/shared/auth-provider.guard';

import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { CadastroComponent } from 'src/app/views/cadastro/cadastro.component';
import { RoutesusUsuarioComponent } from './views/routesus-usuario/routesus-usuario.component';
import { DespesasComponent } from './views/despesas/despesas.component';
import { InvestimentosComponent } from './views/investimentos/investimentos.component';
import { CotacaoComponent } from './views/cotacao/cotacao.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesusUsuarioComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'despesas',
        component: DespesasComponent
      }, 
      {
        path: 'investimentos',
        component: InvestimentosComponent
      },
      {
        path: 'cotacao',
        component: CotacaoComponent
      }
    ],
    canActivate: [AuthProviderGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
