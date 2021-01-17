import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDespesaFixaComponent } from './dialog-despesa-fixa.component';

describe('DialogDespesaFixaComponent', () => {
  let component: DialogDespesaFixaComponent;
  let fixture: ComponentFixture<DialogDespesaFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDespesaFixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDespesaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
