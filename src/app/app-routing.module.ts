import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthProviderGuard } from 'src/app/shared/auth-provider.guard';

import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { CadastroComponent } from 'src/app/views/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
