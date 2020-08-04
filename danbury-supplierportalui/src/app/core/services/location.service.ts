// import { BaseClientService } from './base-client.service';
import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Observable, of } from 'rxjs';
import { RemoteLoggingService } from './remote-logging.service';
import { map, catchError } from 'rxjs/operators';
import { Address } from '../models/address.model';
import { locationData, cityData } from '../models/constants';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  /**
   * base constructor
   * @param baseClientService baseclient service
   * @param logService remote logging service
   */
  constructor(
    // private readonly baseClientService: BaseClientService,
    private readonly logService: RemoteLoggingService,
    private readonly customLogger: LoggerService
  ) { }
  /**mock list for location data */
  locationList = locationData;
  /**mock city list */
  cityList = cityData;

  stateList = [
    { 'name': 'Alabama', 'shortName': 'AL' },
    { 'name': 'Alaska', 'shortName': 'AK' },
    { 'name': 'Arizona', 'shortName': 'AZ' },
    { 'name': 'Arkansas', 'shortName': 'AR' },
    { 'name': 'California', 'shortName': 'CA' },
    { 'name': 'Colorado', 'shortName': 'CO' },
    { 'name': 'Connecticut', 'shortName': 'CT' },
    { 'name': 'Delaware', 'shortName': 'DE' },
    { 'name': 'District of Columbia', 'shortName': 'DC' },
    { 'name': 'Florida', 'shortName': 'FL' },
    { 'name': 'Georgia', 'shortName': 'GA' },
    { 'name': 'Hawaii', 'shortName': 'HI' },
    { 'name': 'Idaho', 'shortName': 'ID' },
    { 'name': 'Illinois', 'shortName': 'IL' },
    { 'name': 'Indiana', 'shortName': 'IN' },
    { 'name': 'Iowa', 'shortName': 'IA' },
    { 'name': 'Kansa', 'shortName': 'KS' },
    { 'name': 'Kentucky', 'shortName': 'KY' },
    { 'name': 'Lousiana', 'shortName': 'LA' },
    { 'name': 'Maine', 'shortName': 'ME' },
    { 'name': 'Maryland', 'shortName': 'MD' },
    { 'name': 'Massachusetts', 'shortName': 'MA' },
    { 'name': 'Michigan', 'shortName': 'MI' },
    { 'name': 'Minnesota', 'shortName': 'MN' },
    { 'name': 'Mississippi', 'shortName': 'MS' },
    { 'name': 'Missouri', 'shortName': 'MO' },
    { 'name': 'Montana', 'shortName': 'MT' },
    { 'name': 'Nebraska', 'shortName': 'NE' },
    { 'name': 'Nevada', 'shortName': 'NV' },
    { 'name': 'New Hampshire', 'shortName': 'NH' },
    { 'name': 'New Jersey', 'shortName': 'NJ' },
    { 'name': 'New Mexico', 'shortName': 'NM' },
    { 'name': 'New York', 'shortName': 'NY' },
    { 'name': 'North Carolina', 'shortName': 'NC' },
    { 'name': 'North Dakota', 'shortName': 'ND' },
    { 'name': 'Ohio', 'shortName': 'OH' },
    { 'name': 'Oklahoma', 'shortName': 'OK' },
    { 'name': 'Oregon', 'shortName': 'OR' },
    { 'name': 'Pennsylvania', 'shortName': 'PA' },
    { 'name': 'Rhode Island', 'shortName': 'RI' },
    { 'name': 'South Carolina', 'shortName': 'SC' },
    { 'name': 'South Dakota', 'shortName': 'SD' },
    { 'name': 'Tennessee', 'shortName': 'TN' },
    { 'name': 'Texas', 'shortName': 'TX' },
    { 'name': 'Utah', 'shortName': 'UT' },
    { 'name': 'Vermont', 'shortName': 'VT' },
    { 'name': 'Virginia', 'shortName': 'VA' },
    { 'name': 'Washington', 'shortName': 'WA' },
    { 'name': 'West Virginia', 'shortName': 'WV' },
    { 'name': 'Wisconsin', 'shortName': 'WI' },
    { 'name': 'Wyoming', 'shortName': 'WY' }
  ];

  /** Return the candidate json list and loop to display in the table */
  getCities(): Observable<Array<string>> {
    return of(this.cityList);
    // return this.baseClientService.get<string>('endpoints').pipe(
    //   map(r => r.body),
    //   catchError(err => {
    //     this.logService.logger('', 'Failed to fetch cities', err);
    //     const emptyArray: string[] = [];

    //     return of(emptyArray);
    //   })
    // );
  }

  getStates(): any[] {
    return this.stateList;
  }

  /** Return the candidate json list and loop to display in the table */
  // getLocations(): Observable<Array<Location>> {
  //   return this.baseClientService.get<Location>('/endpoints').pipe(
  //     map(r => r.body),
  //     catchError(err => {
  //       this.customLogger.error('Failed to fetch locations', err);
  //       const emptyArray: Location[] = [];
  //       return of(emptyArray);
  //     })
  //   );
  // }


  /**
   * used to fetch places data
   * @param searchTerm place search term
   */
  // getAddresses(searchTerm: string): Observable<Array<Address>> {
  //   return this.baseClientService.get<Address>(`/candidate/location/domestic/city/${searchTerm}`).pipe(
  //     map(r => r.body),
  //     catchError(err => {
  //       this.customLogger.error('Failed to fetch locations', err);
  //       const emptyArray: Address[] = [];
  //       return of(emptyArray);
  //     })
  //   );
  // }

}
