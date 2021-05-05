import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepartmentsComponent } from './add-edit-departments.component';

describe('AddEditDepartmentsComponent', () => {
  let component: AddEditDepartmentsComponent;
  let fixture: ComponentFixture<AddEditDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
