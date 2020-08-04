import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { Router, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CONFIG } from 'src/UnitTest-Support/Mocks/data.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  const logoutURL = CONFIG.login + '#/logout';
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  const routes: Routes = [
    { path: 'logout', component: LogoutComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogoutComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: Router, useValue: router
        },
        CookieService,
        { provide: 'appConfig', useValue: CONFIG },
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        },
        Location
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should take user to login', () => {
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['/externalRedirect',
      Object({ externalUrl: logoutURL })], Object({ skipLocationChange: true }));
  });
});
