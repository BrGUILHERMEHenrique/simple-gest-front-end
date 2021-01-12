import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRetiradaComponent } from './dialog-retirada.component';

describe('DialogRetiradaComponent', () => {
  let component: DialogRetiradaComponent;
  let fixture: ComponentFixture<DialogRetiradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRetiradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
