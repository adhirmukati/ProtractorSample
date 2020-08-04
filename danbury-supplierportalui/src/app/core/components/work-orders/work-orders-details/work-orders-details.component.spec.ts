import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersDetailsComponent } from './work-orders-details.component';

describe('WorkOrdersDetailsComponent', () => {
  let component: WorkOrdersDetailsComponent;
  let fixture: ComponentFixture<WorkOrdersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrdersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check candidateContactInfo data from quote obj', async(() => {
    expect(component.setWorkOrderDetails).toHaveBeenCalled();    
    expect(component.setCandidateContactDetail).toHaveBeenCalled();
    expect(component.candidateContactInfo.emailId).toEqual('vasudev.bhat@mobilitydba.com');
    expect(component.candidateContactInfo.phoneNumber).toEqual(9483186755);
    expect(component.candidateContactInfo.candidateName).toEqual('Mathew,Henry')
  }));

  it('should check ordernumber and company assigned from quote obj',()=>{
    expect(component.setWorkOrderDetails).toHaveBeenCalled();
    expect(component.setCandidateName).toHaveBeenCalled();
    expect(component.candidateInfo.orderNumber).toEqual('MOV-89zk39gj');
    expect(component.candidateInfo.company).toEqual('Oracle Inc.');  
  });

  it('should check move detail assigned from quote obj',()=>{
    expect(component.setWorkOrderDetails).toHaveBeenCalled();
    expect(component.setMoveDetails).toHaveBeenCalled();
    expect(component.candidateMoveInfo.departure.fullAddress).toEqual('Newyork, NC');
    expect(component.candidateMoveInfo.departure.country).toEqual('USA');  
    expect(component.candidateMoveInfo.destination.fullAddress).toEqual('Davis, CA');
    expect(component.candidateMoveInfo.totalNumberOfPeople).toEqual('2');
    expect(component.candidateMoveInfo.estimatedMoveEndDate).toEqual('2020-05-01');
    expect(component.candidateMoveInfo.estimatedMoveStartDate).toEqual('2020-05-15');
  });

  it('should check departureHome details assigned from quote obj',()=>{
    expect(component.setWorkOrderDetails).toHaveBeenCalled();
    expect(component.setDepartureHomeDetails).toHaveBeenCalled();
    expect(component.candidateDepartureInfo.departure.fullAddress).toEqual('Newyork, NC');
    expect(component.candidateDepartureInfo.departure.country).toEqual('USA');  
    expect(component.candidateDepartureInfo.departure.zipcode).toEqual('08922');
    expect(component.candidateDepartureInfo.housingType).toEqual('Apartment/Condo/Co-op');
    expect(component.candidateDepartureInfo.noOfRooms).toEqual('3');
    expect(component.candidateDepartureInfo.ownerStatus).toEqual('own');
  });
});
