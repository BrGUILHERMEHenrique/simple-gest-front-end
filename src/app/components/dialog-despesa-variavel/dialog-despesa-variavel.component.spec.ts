import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDespesaVariavelComponent } from './dialog-despesa-variavel.component';

describe('DialogDespesaVariavelComponent', () => {
  let component: DialogDespesaVariavelComponent;
  let fixture: ComponentFixture<DialogDespesaVariavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDespesaVariavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDespesaVariavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
