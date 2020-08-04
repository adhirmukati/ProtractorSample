import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {AgentInformation} from '../models/agent-information.model';
import { BaseClientService } from './base-client.service';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { urlType } from '../models/urlType';
 arrAgentInformation: [];

@Injectable({
  providedIn: 'root'
})
export class AgentInformationService {
  private agentInfoSource = new BehaviorSubject<any>({});
  currentAgentInfo=this.agentInfoSource.asObservable();

  private isAgentInfoSource = new BehaviorSubject<boolean>(false);
  currentIsAgentInfo = this.isAgentInfoSource.asObservable();

  constructor(private http:HttpClient,private readonly customLogger: LoggerService, private baseClientService:BaseClientService) { }

  updateAgentInfo(agentInfo:any){
    this.agentInfoSource.next(agentInfo);
  }

  updateIsAgentInfo(isAgentInfo:boolean){
    this.isAgentInfoSource.next(isAgentInfo);
  }
  ngOnInit()
  {
    
  }
  /**
   * To update agent information
   * @param quoteResponse agentInformation object
   */
  updateAgentInformation(agentInformation: AgentInformation[]): Observable<any> {
   
    
    console.log("in service");
    return this.baseClientService
      .patch<any>(`/vendor/move-response`, agentInformation, '', urlType.processAPI)
      .pipe(
        map( response => response.body),
        catchError((err) => {
          return this.catchBlock('sending agent information Failed', err, 'string');
        })
      );
  }

  catchBlock(message: string, error: any, dataType: string) {
    let empty: any = null;
    switch (dataType) {
      case 'string': {
        empty = null;
        break;
      }
      case 'object': {
        empty = {};
        break;
      }
      case 'array': {
        empty = [];
        break;
      }
    }
    this.customLogger.error(message, error);
    return of(empty);
  }
}
