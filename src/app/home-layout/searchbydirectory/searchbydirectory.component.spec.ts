import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbydirectoryComponent } from './searchbydirectory.component';

describe('SearchbydirectoryComponent', () => {
  let component: SearchbydirectoryComponent;
  let fixture: ComponentFixture<SearchbydirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbydirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbydirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
