import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesusUsuarioComponent } from './routesus-usuario.component';

describe('RoutesusUsuarioComponent', () => {
  let component: RoutesusUsuarioComponent;
  let fixture: ComponentFixture<RoutesusUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesusUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesusUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
