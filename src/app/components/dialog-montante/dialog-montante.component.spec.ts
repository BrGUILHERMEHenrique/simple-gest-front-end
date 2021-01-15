import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMontanteComponent } from './dialog-montante.component';

describe('DialogMontanteComponent', () => {
  let component: DialogMontanteComponent;
  let fixture: ComponentFixture<DialogMontanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMontanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMontanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
