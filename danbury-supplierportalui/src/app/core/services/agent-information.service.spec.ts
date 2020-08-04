import { TestBed } from '@angular/core/testing';

import { AgentInformationService } from './agent-information.service';

describe('AgentInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentInformationService = TestBed.get(AgentInformationService);
    expect(service).toBeTruthy();
  });
});
