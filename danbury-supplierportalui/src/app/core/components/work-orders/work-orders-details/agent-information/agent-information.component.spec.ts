import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder } from '@angular/forms';
import { AgentInformationService } from '../../../../services/agent-information.service';
import { NotificationsService } from '../../../../../core/services/notifications.service';
import { AgentInformationComponent } from './agent-information.component';

describe('AgentInformationComponent', () => {
  let component: AgentInformationComponent;
  let fixture: ComponentFixture<AgentInformationComponent>;
  beforeEach(() => {
    const matDialogRefStub = () => ({ close: agentInformation => ({}) });
    const ngxSpinnerServiceStub = () => ({
      show: () => ({}),
      hide: () => ({})
    });
    const formBuilderStub = () => ({ group: object => ({}) });
    const agentInformationServiceStub = () => ({});
    const notificationsServiceStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AgentInformationComponent],
      providers: [
        { provide: MatDialogRef, useFactory: matDialogRefStub },
        { provide: NgxSpinnerService, useFactory: ngxSpinnerServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        {
          provide: AgentInformationService,
          useFactory: agentInformationServiceStub
        },
        { provide: NotificationsService, useFactory: notificationsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AgentInformationComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('arrAgentInformation defaults to: []', () => {
    expect(component.arrAgentInformation).toEqual([]);
  });
  it('isEmptyAgentInfo defaults to: true', () => {
    expect(component.isEmptyAgentInfo).toEqual(true);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
  describe('submitAgentDetails', () => {
    it('makes expected calls', () => {
      const matDialogRefStub: MatDialogRef<any> = fixture.debugElement.injector.get(
        MatDialogRef
      );
      const ngxSpinnerServiceStub: NgxSpinnerService = fixture.debugElement.injector.get(
        NgxSpinnerService
      );
      spyOn(matDialogRefStub, 'close').and.callThrough();
      spyOn(ngxSpinnerServiceStub, 'show').and.callThrough();
      spyOn(ngxSpinnerServiceStub, 'hide').and.callThrough();
      component.submitAgentDetails();
      expect(matDialogRefStub.close).toHaveBeenCalled();
      expect(ngxSpinnerServiceStub.show).toHaveBeenCalled();
      expect(ngxSpinnerServiceStub.hide).toHaveBeenCalled();
    });
  });
  describe('close', () => {
    it('makes expected calls', () => {
      const matDialogRefStub: MatDialogRef<any> = fixture.debugElement.injector.get(
        MatDialogRef
      );
      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.close();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
