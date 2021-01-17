import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInvestimentoComponent } from './dialog-investimento.component';

describe('DialogInvestimentoComponent', () => {
  let component: DialogInvestimentoComponent;
  let fixture: ComponentFixture<DialogInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
