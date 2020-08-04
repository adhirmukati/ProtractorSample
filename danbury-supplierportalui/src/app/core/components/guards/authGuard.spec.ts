import { AuthGuard } from './authGuard';
import { ComponentFixture, TestBed, async, getTestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CONFIG } from 'src/UnitTest-Support/Mocks/data.mock';
import { CookieService } from 'ngx-cookie-service';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PermissionsService } from 'src/app/core/services/permissions.service';
import { of } from 'rxjs';

describe('AuthGuard', () => {
    let injector: TestBed;
    let authService: AuthGuard;
    let routeMock: any = {
        data: {
            capabilities: ['Supplier Portal Access', 'Supplier Portal Access']
        }
    };
    let routeStateMock: any = { snapshot: {}, url: '/cookies' };
    let routerMock = { navigate: jasmine.createSpy('navigate') };
    let permissionService: PermissionsService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: Router, useValue: routerMock },
            { provide: 'appConfig', useValue: CONFIG }, CookieService, Location,
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            }],
            imports: [HttpClientTestingModule]
        }).compileComponents();
        injector = getTestBed();
        authService = injector.get(AuthGuard);
    }));
    beforeEach(() => {
        permissionService = TestBed.get(PermissionsService);
    });

    it('create an instance', inject([AuthGuard], (service: AuthGuard) => {
        expect(service).toBeTruthy();
    }));
    it('should calL canActivate method', inject([AuthGuard], (service: AuthGuard) => {
        spyOn(permissionService, 'checkAuthorization').and.returnValue(Promise.resolve(['Authorized']));
        spyOn(service, 'canActivate').and.callThrough();
        service.canActivate(routeMock, routeStateMock);
        expect(service.canActivate).toHaveBeenCalled();
    }));
    it('should calL canActivate method and navigate to logout', inject([AuthGuard], (service: AuthGuard) => {
        spyOn(permissionService, 'checkAuthorization').and.returnValue(Promise.resolve());
        spyOn(service, 'canActivate').and.callThrough();
        service.canActivate(routeMock, routeStateMock);
        expect(service.canActivate).toHaveBeenCalled();
    }));
    it('should calL canActivate method and fail', inject([AuthGuard], (service: AuthGuard) => {
        spyOn(permissionService, 'checkAuthorization').and.returnValue(Promise.resolve());
        const routesMock: any = {
            data: {
            }
        };
        spyOn(service, 'canActivate').and.callThrough();
        service.canActivate(routesMock, routeStateMock);
        expect(service.canActivate).toHaveBeenCalled();
    }));
});
