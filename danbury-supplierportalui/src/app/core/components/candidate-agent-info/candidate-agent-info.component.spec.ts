import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { AgentInformationService } from '../../services/agent-information.service';
import { NotificationsService } from '../../services/notifications.service';
import { CandidateAgentInfoComponent } from './candidate-agent-info.component';

describe('CandidateAgentInfoComponent', () => {
  let component: CandidateAgentInfoComponent;
  let fixture: ComponentFixture<CandidateAgentInfoComponent>;
  beforeEach(() => {
    const matDialogStub = () => ({
      open: (agentInformationComponent, object) => ({})
    });
    const ngxSpinnerServiceStub = () => ({
      show: () => ({}),
      hide: () => ({})
    });
    const agentInformationServiceStub = () => ({
      updateAgentInformation: arrAgentInformation => ({ subscribe: f => f({}) })
    });
    const notificationsServiceStub = () => ({
      flashNotification: (string, string1) => ({})
    });TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CandidateAgentInfoComponent],
      providers: [
        { provide: MatDialog, useFactory: matDialogStub },
        { provide: NgxSpinnerService, useFactory: ngxSpinnerServiceStub },
        {
          provide: AgentInformationService,
          useFactory: agentInformationServiceStub
        },
        { provide: NotificationsService, useFactory: notificationsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CandidateAgentInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('arrAgentInformation defaults to: []', () => {
    expect(component.arrAgentInformation).toEqual([]);
  });
  describe('openAgentDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(component, 'SaveorUpdateAgentDetails').and.callThrough();
      spyOn(matDialogStub, 'open').and.callThrough();
      component.openAgentDialog();
      expect(component.SaveorUpdateAgentDetails).toHaveBeenCalled();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
