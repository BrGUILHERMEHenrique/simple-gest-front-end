import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoRetiradaComponent } from './dialog-edicao-retirada.component';

describe('DialogEdicaoRetiradaComponent', () => {
  let component: DialogEdicaoRetiradaComponent;
  let fixture: ComponentFixture<DialogEdicaoRetiradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdicaoRetiradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdicaoRetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
