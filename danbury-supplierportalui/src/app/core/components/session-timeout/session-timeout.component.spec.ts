import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';
import { By } from '@angular/platform-browser';
import { SessionTimeoutComponent } from './session-timeout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CONFIG } from 'src/UnitTest-Support/Mocks/data.mock';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

describe('SessionTimeoutComponent', () => {
  let component: SessionTimeoutComponent;
  let fixture: ComponentFixture<SessionTimeoutComponent>;
  let element: HTMLElement;

  const data = 'You will be logged out in a minute due to inactivity';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionTimeoutComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatSnackBarRef, useValue: { dismissWithAction: () => { } } },
        { provide: MAT_SNACK_BAR_DATA, useValue: data },
        { provide: 'appConfig', useValue: CONFIG },
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        },
        Location,
        CookieService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss the snackbar', () => {
    spyOn(component, 'dismiss').and.callThrough();
    element = fixture.debugElement.query(By.css('#dismiss')).nativeElement;
    element.click();
    expect(component.dismiss).toHaveBeenCalledTimes(1);
  });
});
