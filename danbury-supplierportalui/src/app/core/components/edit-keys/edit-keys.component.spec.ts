import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKeysComponent } from './edit-keys.component';

describe('EditKeysComponent', () => {
  let component: EditKeysComponent;
  let fixture: ComponentFixture<EditKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
