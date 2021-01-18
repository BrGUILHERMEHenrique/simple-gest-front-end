import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

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
import { DialogInvestimentoComponent } from './components/dialog-investimento/dialog-investimento.component';
import { DialogDespesaFixaComponent } from './components/dialog-despesa-fixa/dialog-despesa-fixa.component';
import { DialogDespesaVariavelComponent } from './components/dialog-despesa-variavel/dialog-despesa-variavel.component';
import { DialogEdicaoFixaComponent } from './components/dialog-edicao-fixa/dialog-edicao-fixa.component';
import { DialogEdicaoVariavelComponent } from './components/dialog-edicao-variavel/dialog-edicao-variavel.component';
import { DialogEdicaoLucroInvestimentoComponent } from './components/dialog-edicao-lucro-investimento/dialog-edicao-lucro-investimento.component';
import { DialogEdicaoDescricaoInvestimentoComponent } from './components/dialog-edicao-descricao-investimento/dialog-edicao-descricao-investimento.component';
import { DialogPorcentagemComponent } from './components/dialog-porcentagem/dialog-porcentagem.component';
import { AngularToastifyModule } from 'angular-toastify';

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
    RoutesusUsuarioComponent,
    DialogInvestimentoComponent,
    DialogDespesaFixaComponent,
    DialogDespesaVariavelComponent,
    DialogEdicaoFixaComponent,
    DialogEdicaoVariavelComponent,
    DialogEdicaoLucroInvestimentoComponent,
    DialogEdicaoDescricaoInvestimentoComponent,
    DialogPorcentagemComponent
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
    MatSelectModule,
    ChartsModule,
    AngularToastifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
