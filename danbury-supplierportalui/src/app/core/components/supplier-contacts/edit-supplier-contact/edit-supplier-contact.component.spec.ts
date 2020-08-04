import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierContactComponent } from './edit-supplier-contact.component';

describe('EditSupplierContactComponent', () => {
  let component: EditSupplierContactComponent;
  let fixture: ComponentFixture<EditSupplierContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupplierContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupplierContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
