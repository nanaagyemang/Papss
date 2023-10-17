import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosearchresultsComponent } from './demosearchresults.component';

describe('DemosearchresultsComponent', () => {
  let component: DemosearchresultsComponent;
  let fixture: ComponentFixture<DemosearchresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemosearchresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemosearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
