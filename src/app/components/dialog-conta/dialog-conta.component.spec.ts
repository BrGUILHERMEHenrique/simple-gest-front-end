import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContaComponent } from './dialog-conta.component';

describe('DialogContaComponent', () => {
  let component: DialogContaComponent;
  let fixture: ComponentFixture<DialogContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
