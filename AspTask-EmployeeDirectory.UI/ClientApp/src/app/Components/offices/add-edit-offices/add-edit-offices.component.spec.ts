import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOfficesComponent } from './add-edit-offices.component';

describe('AddEditOfficesComponent', () => {
  let component: AddEditOfficesComponent;
  let fixture: ComponentFixture<AddEditOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
