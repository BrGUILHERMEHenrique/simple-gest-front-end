import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoFixaComponent } from './dialog-edicao-fixa.component';

describe('DialogEdicaoFixaComponent', () => {
  let component: DialogEdicaoFixaComponent;
  let fixture: ComponentFixture<DialogEdicaoFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdicaoFixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdicaoFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
