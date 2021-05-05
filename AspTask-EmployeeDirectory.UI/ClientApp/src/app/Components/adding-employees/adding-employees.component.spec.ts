import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEmployeesComponent } from './adding-employees.component';

describe('AddingEmployeesComponent', () => {
  let component: AddingEmployeesComponent;
  let fixture: ComponentFixture<AddingEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
