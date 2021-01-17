import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoVariavelComponent } from './dialog-edicao-variavel.component';

describe('DialogEdicaoVariavelComponent', () => {
  let component: DialogEdicaoVariavelComponent;
  let fixture: ComponentFixture<DialogEdicaoVariavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdicaoVariavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdicaoVariavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
