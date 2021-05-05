import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeCardsComponent } from './all-employee-cards.component';

describe('AllEmployeeCardsComponent', () => {
  let component: AllEmployeeCardsComponent;
  let fixture: ComponentFixture<AllEmployeeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
