import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierContactsListComponent } from './supplier-contacts-list.component';

describe('SupplierContactsListComponent', () => {
  let component: SupplierContactsListComponent;
  let fixture: ComponentFixture<SupplierContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
