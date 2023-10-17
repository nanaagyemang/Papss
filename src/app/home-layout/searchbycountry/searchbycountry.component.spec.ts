import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbycountryComponent } from './searchbycountry.component';

describe('SearchbycountryComponent', () => {
  let component: SearchbycountryComponent;
  let fixture: ComponentFixture<SearchbycountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbycountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbycountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
