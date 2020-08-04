import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDepartureHomeDetailComponent } from './candidate-departure-home-detail.component';
import { MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { departureDetailsMock } from 'src/UnitTest-Support/Mocks/data.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('CandidateDepartureHomeDetailComponent', () => {
  let component: CandidateDepartureHomeDetailComponent;
  let fixture: ComponentFixture<CandidateDepartureHomeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateDepartureHomeDetailComponent],
      imports: [MatIconModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDepartureHomeDetailComponent);
    component = fixture.componentInstance;
    component.candidateDepartureInfo = departureDetailsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the values are loaded from input decorator', () => {
    expect(component.ownerType).toBe('Owns');
    expect(component.housingType).toBe('House');
    expect(component.departureAddress).toBe(departureDetailsMock.departure);
    expect(component.noOfRooms).toBe('3');
  });
  it('check whether the values are loaded in UI', () => {
    const ownType = fixture.debugElement.query(By.css('.own-rent'));
    expect(ownType.nativeElement.innerHTML).toBe('Owns');
    const houseType = fixture.debugElement.query(By.css('.type'));
    expect(houseType.nativeElement.innerHTML).toBe('House');
    const streetAdd = fixture.debugElement.query(By.css('.street-address'));
    expect(streetAdd.nativeElement.innerHTML).toBe('8 Passiac Ave');
    const city = fixture.debugElement.query(By.css('.city-zip'));
    expect(city.nativeElement.innerHTML).toBe('Boston, MA 01234 USA');
    const noOfPeople = fixture.debugElement.query(By.css('.totalPeopleCount'));
    expect(noOfPeople.nativeElement.value).toBe('3');
  });
  it('should check correct icons are loaded for house type and info', () => {
    const houseIcon = fixture.debugElement.query(By.css('.cartus-icon'));
    expect(houseIcon.nativeElement.attributes.svgIcon.value).toBe('house');
    const infoIcon = fixture.debugElement.queryAll(By.css('.cartus-icon'));
    expect(infoIcon[1].nativeElement.attributes.svgIcon.value).toBe('baseline-info');
  });
  it('should set ownertype as rented if house is rented', () => {
    component.candidateDepartureInfo.ownerStatus = 'Rent';
    component.ngOnInit();
  });
});
