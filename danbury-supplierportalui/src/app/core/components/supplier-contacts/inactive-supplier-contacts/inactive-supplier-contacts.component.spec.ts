import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveSupplierContactsComponent } from './inactive-supplier-contacts.component';

describe('InactiveSupplierContactsComponent', () => {
  let component: InactiveSupplierContactsComponent;
  let fixture: ComponentFixture<InactiveSupplierContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveSupplierContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveSupplierContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
