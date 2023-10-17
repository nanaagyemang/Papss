import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepRegisterComponent } from './rep-register.component';

describe('RepRegisterComponent', () => {
  let component: RepRegisterComponent;
  let fixture: ComponentFixture<RepRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
