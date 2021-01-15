import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { DialogContaComponent } from './components/dialog-conta/dialog-conta.component';
import { DialogRetiradaComponent } from './components/dialog-retirada/dialog-retirada.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogMontanteComponent } from './components/dialog-montante/dialog-montante.component';
import { DialogEdicaoRetiradaComponent } from './components/dialog-edicao-retirada/dialog-edicao-retirada.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { DespesasComponent } from './views/despesas/despesas.component';
import { InvestimentosComponent } from './views/investimentos/investimentos.component';
import { CotacaoComponent } from './views/cotacao/cotacao.component';
import { RoutesusUsuarioComponent } from './views/routesus-usuario/routesus-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    DialogContaComponent,
    DialogRetiradaComponent,
    DatepickerComponent,
    DialogMontanteComponent,
    DialogEdicaoRetiradaComponent,
    GraficoComponent,
    DespesasComponent,
    InvestimentosComponent,
    CotacaoComponent,
    RoutesusUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
