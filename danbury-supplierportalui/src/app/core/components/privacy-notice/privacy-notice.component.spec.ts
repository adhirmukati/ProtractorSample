import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyNoticeComponent } from './privacy-notice.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrivacyNoticeComponent', () => {
  let component: PrivacyNoticeComponent;
  let fixture: ComponentFixture<PrivacyNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyNoticeComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
