import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoLucroInvestimentoComponent } from './dialog-edicao-lucro-investimento.component';

describe('DialogEdicaoLucroInvestimentoComponent', () => {
  let component: DialogEdicaoLucroInvestimentoComponent;
  let fixture: ComponentFixture<DialogEdicaoLucroInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdicaoLucroInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdicaoLucroInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
