import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoDescricaoInvestimentoComponent } from './dialog-edicao-descricao-investimento.component';

describe('DialogEdicaoDescricaoInvestimentoComponent', () => {
  let component: DialogEdicaoDescricaoInvestimentoComponent;
  let fixture: ComponentFixture<DialogEdicaoDescricaoInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdicaoDescricaoInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdicaoDescricaoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
