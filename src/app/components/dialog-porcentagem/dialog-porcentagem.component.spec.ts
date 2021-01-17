import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPorcentagemComponent } from './dialog-porcentagem.component';

describe('DialogPorcentagemComponent', () => {
  let component: DialogPorcentagemComponent;
  let fixture: ComponentFixture<DialogPorcentagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPorcentagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPorcentagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
