import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobTitlesComponent } from './show-job-titles.component';

describe('ShowJobTitlesComponent', () => {
  let component: ShowJobTitlesComponent;
  let fixture: ComponentFixture<ShowJobTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJobTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJobTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
