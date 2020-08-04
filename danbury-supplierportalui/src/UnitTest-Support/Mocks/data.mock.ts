import { Location } from './../../app/core/models/location';
// import { CostModel } from './../../app/core/models/cost-model';
import { Level } from './../../app/core/models/level';
// import { CostModelEstimate } from './../../app/core/models/cost-model-estimate';
import { CandidateNeedsAssessment } from './../../app/core/models/candidateneeds-assessment.model';
import { Candidate, CandidateProfiles } from './../../app/core/models/candidate';
import { APIResponse, APIResponseDuplicate } from './../../app/core/models/response.model';
import { Address } from './../../app/core/models/address.model';
import { CandidateMoveInfo } from './../../app/core/models/candidate-move-info.model';
import { DepatureHomeDetails } from './../../app/core/models/depature-home-details.models';
import { CandidateContactInfo } from './../../app/core/models/candidate-contact-info.model';
import { CandidateBudgetDetails } from './../../app/core/models/candidate-budget-details.model';
import { CandidateCoreBenefits } from './../../app/core/models/candidate-core-benifits.models';
import { CandidateFlexSpend } from './../../app/core/models/candidate-flex-spend.model';
import { CandidateInfo } from './../../app/core/models/candidate-info.models';
import { ApprovedMove } from './../../app/core/models/approved-move';
// import { LinkedListData } from './../../app/core/models/linked-list-data.model';
import { MovePhase } from './../../app/core/models/move-phase';
import { Timeline } from './../../app/core/models/timeline-service.model';
import { RelocationOfferInfo } from './../../app/core/models/relo-offer.model';
// import { CostEstimate } from './../../app/core/models/cost-estimate';
// import { AccountManagerClients } from './../../app/core/models/account-manager-clients.model';
// import { ClientContact } from 'src/app/core/models/client-contact';
// import { Extension } from 'src/app/core/models/extension.model';

//Constant for Mock data for quote request data list
export const QUOTE_REQUEST_DATA_LIST = [
    {
        "applicationSource": "ALPHA",
        "orderRequestId": "5e57b8becea80500088b3abd",
        "quoteRequestId": "5e57be808a8262000888b73a",
        "orderDate": "2020-02-27T12:40:30.410Z",
        "quoteRequestDate": "2020-02-27T13:05:04.778Z",
        "requestedBy": {
            "names": [
                "kalyani",
                "kannaninitiator"
            ]
        },
        "forDeliveryTo": {
            "names": [
                "SelfReg",
                "Test"
            ]
        },
        "departureAddress": "South Avenue",
        "departureCity": "Danbury",
        "departureState": "CT",
        "departurePostalCode": "1003",
        "destinationaddress": "",
        "destinationCity": "Chicago",
        "destinationState": "IL",
        "destinationPostalCode": "",
        "numberOfPeopleMoving": "3",
        "numberRooms": 2,
        "propertyType": "Apartment/Condo/Co-op",
        "ownRent": "own",
        "preferredEmailAddress": "anandhi.nagarajan@mobilitydba.com",
        "preferredPhoneNumber": "9677367512",
        "estMoveStartDate": "2020-03-12",
        "estMoveEndDate": "2020-03-26"
    },
    {
        "applicationSource": "ALPHA",
        "orderRequestId": "5e58d9a923b87900085619c1",
        "quoteRequestId": "5e58e4808811dc0007ead664",
        "orderDate": "2020-02-28T09:13:13.729Z",
        "quoteRequestDate": "2020-02-28T09:59:28.464Z",
        "requestedBy": {
            "names": [
                "Nivedhitha",
                "Dhanasekaran"
            ]
        },
        "forDeliveryTo": {
            "names": [
                "vinothini",
                "Raj"
            ]
        },
        "departureAddress": "street",
        "departureCity": "Miami",
        "departureState": "FL",
        "departurePostalCode": "12345",
        "destinationaddress": "",
        "destinationCity": "Tampa",
        "destinationState": "FL",
        "destinationPostalCode": "",
        "numberOfPeopleMoving": "3",
        "numberRooms": 1,
        "propertyType": "Apartment/Condo/Co-op",
        "ownRent": "own",
        "preferredEmailAddress": "vino@cartus.com",
        "preferredPhoneNumber": "9789508229",
        "estMoveStartDate": "2020-03-13",
        "estMoveEndDate": "2020-03-27"
    }
];

export const QUOTE_REQUEST_DETAIL = {
    "onBehalfOf": { 
        "partyType": "organization", 
        "entityName": "Mindtree Ltd.", 
        "organizationKind": "legal", 
        "legalType": "parent" 
    }, 
    "applicationSource": "ALPHA", 
    "orderRequestId": "5ea67aab0dc65300085359a6", 
    "quoteRequestId": "5ea67cfffe1c9d0007e68e9b", 
    "orderDate": "2020-04-27T06:24:40.267Z", 
    "quoteRequestDate": "2020-04-27T06:34:39.232Z", 
    "requestedBy": { 
        "names": ["arjun", "chandra"] 
    }, 
    "forDeliveryTo": { 
        "names": ["ABC89", "Brillio90"] 
    }, 
    "departureAddress": "BB", 
    "departureCity": "Danbury", 
    "departureState": "CT", 
    "departurePostalCode": "08112", 
    "destinationaddress": "", 
    "destinationCity": "Navy Yard City", 
    "destinationState": "WA", 
    "destinationPostalCode": "", 
    "numberOfPeopleMoving": "3", 
    "numberRooms": 1, 
    "propertyType": "House", 
    "ownRent": "own", 
    "preferredEmailAddress": "vasudev.bhat@mobilitydba.com", 
    "preferredPhoneNumber": "9483186755", 
    "estMoveStartDate": "2020-05-11", 
    "estMoveEndDate": "2020-05-25", 
    "orderReference": "MOV-vwe2abyg", 
    "quoteResponses": [], 
    "departureCountry": "USA", 
    "quoteStatus": "Quote Pending", 
    "quoteStatusDate": "2020-04-27T06:34:39.232Z", 
    "fullName": "ABC89, Brillio90", 
    "departure": "Danbury, CT", 
    "destination": "Navy Yard City, WA", 
    "company": "Mindtree Ltd."
};
/** stores location mock data */
export const LocationInfo: Location[] = [
    {
        id: 'destination1',
        name: 'Atlanta, GA'
    },
    {
        id: 'destination1',
        name: 'New York, NY'
    }
];
/** stores app config mock data */
export const CONFIG = {
    'environment': 'developer',
    'api': {
        'host': 'localhost',
        'port': '4000',
        'protocol': 'http',
        'base_url': '/api/'
    },
    'costModel': {
        'host': 'localhost',
        'port': '4000',
        'protocol': 'http',
        'base_url': '/api/'
    },
    'accessManagement': {
        'host': 'localhost',
        'port': '4000',
        'protocol': 'http',
        'base_url': '/api/'
    },
    'processAPI': {
        'host': 'localhost',
        'port': '4000',
        'protocol': 'http',
        'base_url': '/api/',
        'from_date': '2019-12-02T09:43:34.211Z'
    },
    'workOrderAPI': {
        'host': 'localhost',
        'port': '4000',
        'protocol': 'http',
        'base_url': '/api/'
    },
    'keyDatesAPI': {
        'host': 'localhost',
        'port': '4000',
        'protocol': 'http',
        'base_url': '/api/'
    },
    'login': 'http://localhost:4200/',
    'byPassLogin': 'true',
    'byPassAuthorization': false
};
// export const COST_MODEL: CostModel = {
//     'costModelId': '7867877',
//     'costModelName': 'Mid-Level Manager',
//     'clientContactId': '5d8b16401c9d440000f9bdec',
//     'costEstimates': [
//         {
//             'familySize': 1,
//             'estimatedTotalMaximumCost': 30400,
//             'estimatedTotalMinimumCost': 20400,
//             'coreServices': {
//                 'estimatedSubTotalMaximumCost': 16400,
//                 'estimatedSubTotalMinimumCost': 14600,
//             },
//             'flexServices': {
//                 'estimatedSubTotalMaximumCost': 14000,
//                 'estimatedSubTotalMinimumCost': 5800,
//             }
//         },
//         {
//             'familySize': 2,
//             'estimatedTotalMaximumCost': 45000,
//             'estimatedTotalMinimumCost': 25900,
//             'coreServices': {
//                 'estimatedSubTotalMaximumCost': 20400,
//                 'estimatedSubTotalMinimumCost': 14800,
//             },
//             'flexServices': {
//                 'estimatedSubTotalMaximumCost': 24600,
//                 'estimatedSubTotalMinimumCost': 11100,
//             }
//         },
//         {
//             'familySize': 4,
//             'estimatedTotalMaximumCost': 52300,
//             'estimatedTotalMinimumCost': 31800,
//             'coreServices': {
//                 'estimatedSubTotalMaximumCost': 25800,
//                 'estimatedSubTotalMinimumCost': 19600,
//             },
//             'flexServices': {
//                 'estimatedSubTotalMaximumCost': 26500,
//                 'estimatedSubTotalMinimumCost': 12200,
//             }
//         }
//     ],
//     'taxGrossRate': '15500',
//     'destState': 'TX',
//     'destCity': 'Houston',
//     'deptState': 'NJ',
//     'deptCity': 'Nutley',
//     'level': 'Level 1 (Over 150,000 USD)',
//     'createdDate': '2019-05-20',
//     'updatedDate': '2019-05-27',
//     'expiryDate': '2019-06-26'
// };
/** stores cost model mock list */
export const COST_MODEL_LIST = {
    status: 200,
    statusText: 'OK',
    url: 'https://costmodeltst01.cartus.com/costmodel?clientContactId=5de2cd7d65236577b9223541&sortField=updatedDate&sortDir=DESC&limit=20',
    ok: true,
    type: 4,
    body: {
        totalCostModel: 20,
        costmodels: [
            {
                'costModelId': '7867877',
                'costModelName': 'Mid-Level Manager',
                'clientContactId': '5d8b16401c9d440000f9bdec',
                'costEstimates': [
                    {
                        'familySize': 1,
                        'estimatedTotalMaximumCost': 30400,
                        'estimatedTotalMinimumCost': 20400,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 16400,
                            'estimatedSubTotalMinimumCost': 14600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 14000,
                            'estimatedSubTotalMinimumCost': 5800,
                        }
                    },
                    {
                        'familySize': 2,
                        'estimatedTotalMaximumCost': 45000,
                        'estimatedTotalMinimumCost': 25900,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 20400,
                            'estimatedSubTotalMinimumCost': 14800,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 24600,
                            'estimatedSubTotalMinimumCost': 11100,
                        }
                    },
                    {
                        'familySize': 3,
                        'estimatedTotalMaximumCost': 52300,
                        'estimatedTotalMinimumCost': 31800,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 25800,
                            'estimatedSubTotalMinimumCost': 19600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 26500,
                            'estimatedSubTotalMinimumCost': 12200,
                        }
                    }
                ],
                'taxGrossRate': '0.64',
                'destState': 'TX',
                'destCity': 'Houston',
                'deptState': 'NJ',
                'deptCity': 'Nutley',
                'level': 'Level 1 (Over 150,000 USD)',
                'createdDate': '2019-05-20',
                'updatedDate': '2019-05-27',
                'expiryDate': '2019-06-26'
            },
            {
                'costModelId': '45434',
                'costModelName': 'Group Move to LA',
                'clientContactId': '5d8b16401c9d440000f9bdec',
                'costEstimates': [
                    {
                        'familySize': 4,
                        'estimatedTotalMaximumCost': 30400,
                        'estimatedTotalMinimumCost': 20400,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 16400,
                            'estimatedSubTotalMinimumCost': 14600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 14000,
                            'estimatedSubTotalMinimumCost': 5800,
                        }
                    },
                    {
                        'familySize': 2,
                        'estimatedTotalMaximumCost': 45000,
                        'estimatedTotalMinimumCost': 25900,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 20400,
                            'estimatedSubTotalMinimumCost': 14800,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 24600,
                            'estimatedSubTotalMinimumCost': 11100,
                        }
                    },
                    {
                        'familySize': 3,
                        'estimatedTotalMaximumCost': 52300,
                        'estimatedTotalMinimumCost': 31800,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 25800,
                            'estimatedSubTotalMinimumCost': 19600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 26500,
                            'estimatedSubTotalMinimumCost': 12200,
                        }
                    }
                ],
                'taxGrossRate': '0.61',
                'destState': 'TX',
                'destCity': 'Houston',
                'deptState': 'NJ',
                'deptCity': 'Nutley',
                'level': 'Level 2 (75,000 to 150,000 USD)',
                'createdDate': '2019-06-02',
                'updatedDate': '2019-06-22',
                'expiryDate': '2019-07-22'
            },
            {
                'costModelId': '66564',
                'costModelName': 'L1 Dev Dallas Move',
                'clientContactId': '5d8b16401c9d440000f9bdec',
                'costEstimates': [
                    {
                        'familySize': 4,
                        'estimatedTotalMaximumCost': 30400,
                        'estimatedTotalMinimumCost': 20400,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 16400,
                            'estimatedSubTotalMinimumCost': 14600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 14000,
                            'estimatedSubTotalMinimumCost': 5800,
                        }
                    },
                    {
                        'familySize': 3,
                        'estimatedTotalMaximumCost': 45000,
                        'estimatedTotalMinimumCost': 25900,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 20400,
                            'estimatedSubTotalMinimumCost': 14800,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 24600,
                            'estimatedSubTotalMinimumCost': 11100,
                        }
                    },
                    {
                        'familySize': 3,
                        'estimatedTotalMaximumCost': 52300,
                        'estimatedTotalMinimumCost': 31800,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 25800,
                            'estimatedSubTotalMinimumCost': 19600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 26500,
                            'estimatedSubTotalMinimumCost': 12200,
                        }
                    }
                ],
                'taxGrossRate': '0.74',
                'destState': 'TX',
                'destCity': 'Houston',
                'deptState': 'NJ',
                'deptCity': 'Nutley',
                'level': 'Level 2 (75,000 to 150,000 USD)',
                'createdDate': '2019-03-25',
                'updatedDate': '2019-04-09',
                'expiryDate': '2019-05-09'
            },
            {
                'costModelId': '7684',
                'costModelName': 'L2 Dev Move',
                'clientContactId': '5d8b16401c9d440000f9bdec',
                'costEstimates': [
                    {
                        'familySize': 1,
                        'estimatedTotalMaximumCost': 30400,
                        'estimatedTotalMinimumCost': 20400,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 16400,
                            'estimatedSubTotalMinimumCost': 14600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 14000,
                            'estimatedSubTotalMinimumCost': 5800,
                        }
                    },
                    {
                        'familySize': 2,
                        'estimatedTotalMaximumCost': 45000,
                        'estimatedTotalMinimumCost': 25900,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 20400,
                            'estimatedSubTotalMinimumCost': 14800,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 24600,
                            'estimatedSubTotalMinimumCost': 11100,
                        }
                    },
                    {
                        'familySize': 3,
                        'estimatedTotalMaximumCost': 52300,
                        'estimatedTotalMinimumCost': 31800,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 25800,
                            'estimatedSubTotalMinimumCost': 19600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 26500,
                            'estimatedSubTotalMinimumCost': 12200,
                        }
                    }
                ],
                'taxGrossRate': '0.71',
                'destState': 'TX',
                'destCity': 'Houston',
                'deptState': 'NJ',
                'deptCity': 'Nutley',
                'level': 'Level 3 (Less than 75,000 USD)',
                'createdDate': '2019-03-25',
                'updatedDate': '2019-04-09',
                'expiryDate': '2019-05-09'
            },
            {
                'costModelId': '9864',
                'costModelName': 'Group Move',
                'clientContactId': '5d8b16401c9d440000f9bdec',
                'costEstimates': [
                    {
                        'familySize': 1,
                        'estimatedTotalMaximumCost': 30400,
                        'estimatedTotalMinimumCost': 20400,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 16400,
                            'estimatedSubTotalMinimumCost': 14600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 14000,
                            'estimatedSubTotalMinimumCost': 5800,
                        }
                    },
                    {
                        'familySize': 2,
                        'estimatedTotalMaximumCost': 45000,
                        'estimatedTotalMinimumCost': 25900,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 20400,
                            'estimatedSubTotalMinimumCost': 14800,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 24600,
                            'estimatedSubTotalMinimumCost': 11100,
                        }
                    },
                    {
                        'familySize': 3,
                        'estimatedTotalMaximumCost': 52300,
                        'estimatedTotalMinimumCost': 31800,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 25800,
                            'estimatedSubTotalMinimumCost': 19600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 26500,
                            'estimatedSubTotalMinimumCost': 12200,
                        }
                    }
                ],
                'taxGrossRate': '15500',
                'destState': 'TX',
                'destCity': 'Houston',
                'deptState': 'NJ',
                'deptCity': 'Nutley',
                'level': 'Level 1 (Over 150,000 USD)',
                'createdDate': '2019-03-22',
                'updatedDate': '2019-04-06',
                'expiryDate': '2019-05-06'
            },
            {
                'costModelId': '3456',
                'costModelName': 'Group Move',
                'clientContactId': '5d8b16401c9d440000f9bdec',
                'costEstimates': [
                    {
                        'familySize': 4,
                        'estimatedTotalMaximumCost': 30400,
                        'estimatedTotalMinimumCost': 20400,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 16400,
                            'estimatedSubTotalMinimumCost': 14600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 14000,
                            'estimatedSubTotalMinimumCost': 5800,
                        }
                    },
                    {
                        'familySize': 2,
                        'estimatedTotalMaximumCost': 45000,
                        'estimatedTotalMinimumCost': 25900,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 20400,
                            'estimatedSubTotalMinimumCost': 14800,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 24600,
                            'estimatedSubTotalMinimumCost': 11100,
                        }
                    },
                    {
                        'familySize': 1,
                        'estimatedTotalMaximumCost': 52300,
                        'estimatedTotalMinimumCost': 31800,
                        'coreServices': {
                            'estimatedSubTotalMaximumCost': 25800,
                            'estimatedSubTotalMinimumCost': 19600,
                        },
                        'flexServices': {
                            'estimatedSubTotalMaximumCost': 26500,
                            'estimatedSubTotalMinimumCost': 12200,
                        }
                    }
                ],
                'taxGrossRate': '15500',
                'destState': 'TX',
                'destCity': 'Danbery',
                'deptState': 'NJ',
                'deptCity': 'Nutley',
                'level': 'Level 2 (75,000 to 150,000 USD)',
                'createdDate': '2019-03-22',
                'updatedDate': '2019-04-06',
                'expiryDate': '2019-05-06'
            }]
    }
};
/** stores cost model mock */
export const MODEL = {
    costModelId: '7867877',
    costModelName: 'Mid-Level Manager',
    level: 'Level 2 (100,001 to 250,000 USD)',
    departure: {
        fullAddress: 'NJ, Nutley',
        streetAddress: 'NJ, Nutley',
        city: 'NJ, Nutley',
        state: 'NJ',
        zipcode: '2323',
        country: 'USA'
    },
    destination: {
        fullAddress: 'TX, Austin',
        streetAddress: 'TX, Austin',
        city: 'Austin',
        state: 'TX',
        zipcode: '2323',
        country: 'USA'
    },
    lineItems: [{
        estimateId: '101',
        category: '1 Person',
        minAmount: 20400,
        maxAmount: 30400,
        currency: 'USD',
        products: [{
            estimatelineItemsId: '111',
            estimateName: 'CORE',
            descriptionLine1: 'Professional Van Line Move',
            descriptionLine2: '(Includes Insurance)',
            minAmount: 14600,
            'maxAmount': 16400,
            currency: 'USD',
            estimateId: '101',
        },
        {
            estimatelineItemsId: '222',
            estimateName: 'FLEXIBLE SPEND',
            descriptionLine1: 'Multiple Probable Services',
            descriptionLine2: '',
            minAmount: 5800,
            maxAmount: 14000,
            currency: 'USD',
            estimateId: '101',
        }],
        taxMinAmount: 0,
        taxMaxAmount: 15500,
        updatedDate: '2019-08-07',
        expiryDate: '2019-09-06',
        isActive: true,
        createdBy: 'Cartus Admin',
        createdDate: '2019-08-07',
        costModelId: '7867877',
    },
    {
        estimateId: '102',
        category: '2 - 3 People',
        minAmount: 25900,
        maxAmount: 45000,
        currency: 'USD',
        products: [{
            estimatelineItemsId: '111',
            estimateName: 'CORE',
            descriptionLine1: 'Professional Van Line Move',
            descriptionLine2: '(Includes Insurance)',
            minAmount: 14800,
            maxAmount: 20400,
            currency: 'USD',
            estimateId: '102',
        },
        {
            estimatelineItemsId: '222',
            estimateName: 'FLEXIBLE SPEND',
            descriptionLine1: 'Multiple Probable Services',
            descriptionLine2: '',
            minAmount: 11100,
            maxAmount: 24600,
            currency: 'USD',
            estimateId: '102',
        }],
        taxMinAmount: 0,
        taxMaxAmount: 23000,
        updatedDate: '2019-08-07',
        expiryDate: '2019-09-06',
        isActive: true,
        createdBy: 'Cartus Admin',
        createdDate: '2019-08-07'
    },
    {
        estimateId: '103',
        category: '4+ People',
        minAmount: 31800,
        maxAmount: 52300,
        currency: 'USD',
        products: [{
            estimatelineItemsId: '111',
            estimateName: 'CORE',
            descriptionLine1: 'Professional Van Line Move',
            descriptionLine2: '(Includes Insurance)',
            minAmount: 19600,
            maxAmount: 25800,
            currency: 'USD',
            estimateId: '103'
        },
        {
            estimatelineItemsId: '22',
            estimateName: 'FLEXIBLE SPEND',
            descriptionLine1: 'Multiple Probable Services',
            descriptionLine2: '',
            minAmount: 12200,
            maxAmount: 26500,
            currency: 'USD',
            estimateId: '103'
        }],
        taxMinAmount: 0,
        taxMaxAmount: 26700,
        updatedDate: '2019-08-07',
        expiryDate: '2019-09-06',
        isActive: true,
        createdBy: 'Cartus Admin',
        createdDate: '2019-08-07',
        costModelId: '7867877',
    }],
    updateDate: '2019/05/27',
    createdBy: 'Admin',
    createdDate: '2019/05/20',
    expirationDate: '2020/05/20',
    isDeleted: false,
    status: 'something'
};
/** stores location mock data */
export const LOCATION: Location[] = [
    { name: 'NJ, Nutley', id: 'desitnation1' },
    { name: 'GA, Atlanta', id: 'desitnation2' },
    { name: 'TX, Dallas', id: 'desitnation3' },
    { name: 'NJ, Jersey City', id: 'desitnation4' },
    { name: 'TX, Houston', id: 'desitnation1' },
    { name: 'NY, New York City', id: 'desitnation2' },
    { name: 'NY, Fushing', id: 'desitnation3' },
    { name: 'NJ, Edison', id: 'desitnation4' },
    { name: 'NJ, Newark', id: 'desitnation1' },
    { name: 'TX, Austin', id: 'desitnation2' }
];

export const LEVEL: string[] = ['Level 1 (Over $150,000)', 'Level 2 ($75,000 - $150,000)', 'Level 3 (Below $75,000)'];
/** stores level list mock data */
export const LEVEL_LIST: Level[] = [
    {
        levelId: 'L1',
        levelName: 'Level 1 (250,000+ USD)',
        levelDescription: 'Level 1 - Salary Range'
    },
    {
        levelId: 'L2',
        levelName: 'Level 2 (100,001 to 250,000 USD)',
        levelDescription: 'Level 2 - Salary Range'
    },
    {
        levelId: 'L3',
        levelName: 'Level 3 (0 to 100,000 USD)',
        levelDescription: 'Level 3 - Salary Range'
    }
];
/** stores cost model estimates mock */
// export const COST_MODEL_ESTIMATES: CostModelEstimate[] = [{
//     estimateId: '101',
//     category: '1 Person',
//     minAmount: 20400,
//     maxAmount: 30400,
//     currency: 'USD',
//     products: [
//         {
//             estimatelineItemsId: '111',
//             estimateName: 'CORE',
//             descriptionLine1: 'Professional Van Line Move',
//             descriptionLine2: '(Includes Insurance)',
//             minAmount: 14600,
//             maxAmount: 16400,
//             currency: 'USD',
//             estimateId: '101'
//         },
//         {
//             estimatelineItemsId: '222',
//             estimateName: 'FLEXIBLE SPEND',
//             descriptionLine1: 'Multiple Probable Services',
//             descriptionLine2: '',
//             minAmount: 5800,
//             maxAmount: 14000,
//             currency: 'USD',
//             estimateId: '101'
//         }
//     ],
//     taxMinAmount: 0,
//     taxMaxAmount: 15500,
//     updatedDate: '2019-08-07',
//     expiryDate: '2019-09-06',
//     isActive: true,
//     createdBy: 'Cartus Admin',
//     createdDate: '2019-08-07',
//     costModelId: '7867877'
// },
// {
//     estimateId: '102',
//     category: '2 - 3 People',
//     minAmount: 25900,
//     maxAmount: 45000,
//     currency: 'USD',
//     products: [
//         {
//             estimatelineItemsId: '111',
//             estimateName: 'CORE',
//             descriptionLine1: 'Professional Van Line Move',
//             descriptionLine2: '(Includes Insurance)',
//             minAmount: 14800,
//             maxAmount: 20400,
//             currency: 'USD',
//             estimateId: '102'
//         },
//         {
//             estimatelineItemsId: '222',
//             estimateName: 'FLEXIBLE SPEND',
//             descriptionLine1: 'Multiple Probable Services',
//             descriptionLine2: '',
//             minAmount: 11100,
//             maxAmount: 24600,
//             currency: 'USD',
//             estimateId: '102'
//         }
//     ],
//     taxMinAmount: 0,
//     taxMaxAmount: 23000,
//     updatedDate: '2019-08-07',
//     expiryDate: '2019-09-06',
//     isActive: true,
//     createdBy: 'Cartus Admin',
//     createdDate: '2019-08-07',
//     costModelId: '7867877'
// },
// {
//     estimateId: '103',
//     category: '4+ People',
//     minAmount: 31800,
//     maxAmount: 52300,
//     currency: 'USD',
//     products: [
//         {
//             estimatelineItemsId: '111',
//             estimateName: 'CORE',
//             descriptionLine1: 'Professional Van Line Move',
//             descriptionLine2: '(Includes Insurance)',
//             minAmount: 19600,
//             maxAmount: 25800,
//             currency: 'USD',
//             estimateId: '103'
//         },
//         {
//             estimatelineItemsId: '22',
//             estimateName: 'FLEXIBLE SPEND',
//             descriptionLine1: 'Multiple Probable Services',
//             descriptionLine2: '',
//             minAmount: 12200,
//             maxAmount: 26500,
//             currency: 'USD',
//             estimateId: '103'
//         }
//     ],
//     taxMinAmount: 0,
//     taxMaxAmount: 26700,
//     updatedDate: '2019-08-07',
//     expiryDate: '2019-09-06',
//     isActive: true,
//     createdBy: 'Cartus Admin',
//     createdDate: '2019-08-07',
//     costModelId: '7867877'
// }
// ];
/** stores cost model selected mock values */
export const MODEL_NAMES: string[] = [
    'select',
    'modelName',
    'level.levelName',
    'departure',
    'destination',
    'status',
];
/** stores candidate needs assessment mock */
export const candidateDetailsMock: CandidateNeedsAssessment = {
    departureAddr: {
        country: 'USA',
        state: 'erewtgrs',
        streetAddress: '1234 sdfh',
        city: 'arg',
        zipcode: '2355',
        fullAddress: ''
    },
    destinationAddr: {
        country: 'USA',
        state: 'CT',
        streetAddress: '1234 sdfh',
        city: 'Danbury',
        zipcode: '2355',
        fullAddress: ''
    },
    familyDetails: {
        noOfRelocatePeople: '2',
        familyRelocationStatus: 'Yes'
    },
    residenceDetails: {
        ownerStatus: 'Own',
        homeType: '',
        noOfRooms: null
    },
    candidateId: null,
    contactNumber: null,
    estimatedMoveStartDate: null,
    estimatedMoveEndDate: null
};
/** stores candidate info mock */
export const candidateInfo: Candidate = {
    candidateId: '1111',
    fullname: 'Maturity,Matthew',
    level: 'Level 2 (100,001 to 250,000 USD)',
    departure: {
        country: 'USA',
        streetAddress: null,
        city: 'Nutley',
        state: 'NJ',
        zipcode: null,
        fullAddress: 'NJ, Nutley'
    },
    destination: {
        country: 'USA',
        streetAddress: null,
        city: 'Houston',
        state: 'TX',
        zipcode: null,
        fullAddress: 'TX, Houston'
    },
    status: 'Invitation Not Sent',
    isAssessmentReceived: false,
    emailAddress: 'mathew.maturity@gmail.com',
    phoneNumber: '9089098908',
    businessUnit: 'Human Resources',
    invitationSentDate: '',
    createdDate: '21-JUN-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '21-JUN-19',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    noOfPeople: '2',
    countryDialingCode: '+1'
};
/** stores candidate info mock */
export const candidateInformation: CandidateInfo = {
    level: 'Level 2 ($75,000 - $150,000)',
    businessUnit: 'Human Resources',
    orderNumber:'MOV-9896a55r',
    company:'Four Seasons Biltmore',
    orderReference: 'MOV-9896a55r'
};
/*
/** mock candidate contact info */
export const candidateContactInfoMock: CandidateContactInfo = {
    candidateName: 'Maturity,Matthew',
    phoneNumber: 9876543210,
    emailId: 'mathew.maturity@gmail.com'
};
/** mock candidate contact list */
export const candidateListMock: CandidateProfiles = {
    totalActiveCandidate: 11,
    candidates: [
        {
            candidateId: '1111',
            fullname: 'Maturity,Matthew',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Houston',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Houston'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'mathew.maturity@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Human Resources',
            invitationSentDate: '',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        {
            candidateId: '2222',
            fullname: 'Beal, Christopher',
            level: 'Level 1 (Over $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Atlanta',
                state: 'GA',
                zipcode: null,
                fullAddress: 'GA, Atlanta'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Ready for Review',
            isAssessmentReceived: true,
            emailAddress: 'chris.beal@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Finance',
            invitationSentDate: '9-APR-2019',
            createdDate: '9-APR-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '2-MAY-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        {
            candidateId: '3333',
            fullname: 'Goulet, Dan',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Atlanta',
                state: 'GA',
                zipcode: null,
                fullAddress: 'GA, Atlanta'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Edison',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Edison'
            },
            status: 'Pending Van Line Quote',
            isAssessmentReceived: true,
            emailAddress: 'dan.goulet@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Engineering',
            invitationSentDate: '22-FEB-2019',
            createdDate: '2-FEB-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '23-MAR-19',
            noOfRooms: '8',
            housingType: 'Owns house',
            noOfPeople: '4',
            countryDialingCode: '+1'
        },
        {
            candidateId: '4444',
            fullname: 'Cordon, James',
            level: 'Level 3 (Below $75,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Ready for Review',
            isAssessmentReceived: false,
            emailAddress: 'j.cordon@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Engineering',
            invitationSentDate: '',
            createdDate: '23-JAN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '30-JAN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '2',
            countryDialingCode: '+1'
        },
        {
            candidateId: '5555',
            fullname: 'Hayes, Francesca',
            level: 'Level 1 (Over $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Pending Van Line Quote',
            isAssessmentReceived: true,
            emailAddress: 'francesca.hayes@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Accounting',
            invitationSentDate: '22-FEB-2019',
            createdDate: '2-FEB-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '23-MAR-19',
            noOfRooms: '6',
            housingType: 'Rents Apartment',
            noOfPeople: '1',
            countryDialingCode: '+1'
        },
        {
            candidateId: '6666',
            fullname: 'Hu, Adam',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'adam.hu@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Marketing',
            invitationSentDate: '',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        {
            candidateId: '7777',
            fullname: 'Jones, Suehong',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'suehong.jones@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Human Resources',
            invitationSentDate: '',
            createdDate: '2-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '20-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '2',
            countryDialingCode: '+1'
        },
        {
            candidateId: '8888',
            fullname: 'Rector, Aleksandr',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'aleksandr.rector@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Product Solutions',
            invitationSentDate: '',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        {
            candidateId: '9999',
            fullname: 'Richardson, Matthew',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'New York City',
                state: 'NY',
                zipcode: null,
                fullAddress: 'NY, New York City'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'mathew.richardson@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Human Resources',
            invitationSentDate: '',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '2',
            countryDialingCode: '+1'
        },
        {
            candidateId: '1212',
            fullname: 'Varaha, Pritpal',
            level: 'Level 1 (Over $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'New York City',
                state: 'NY',
                zipcode: null,
                fullAddress: 'NY, New York City'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Atlanta',
                state: 'GA',
                zipcode: null,
                fullAddress: 'GA, Atlanta'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'pritpal.varaha@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Finance',
            invitationSentDate: '',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '4',
            countryDialingCode: '+1'
        },
        {
            candidateId: '1313',
            fullname: 'Ellacott, Robin',
            level: 'Level 3 (Below $75,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Fushing',
                state: 'NY',
                zipcode: null,
                fullAddress: 'NY, Fushing'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'robin.ellacott@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Engineering',
            invitationSentDate: '',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '4',
            countryDialingCode: '+1'
        }
    ]
};
/**candidate list mock with status */
export const candidatesDetailsMock = {
    status: 200,
    statusText: 'OK',
    url: 'https://alphaapitst01.cartus.com/candidate?clientContactId=5de2cd7d65236577b9223541&sortField=fullname&sortDir=ASC&limit=20',
    ok: true,
    type: 4,
    body: {
        totalActiveCandidate: 11,
        candidates: [
            {
                candidateId: '1111',
                fullname: 'Maturity,Matthew',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Houston',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Houston'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'mathew.maturity@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Human Resources',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '2222',
                fullname: 'Beal, Christopher',
                level: 'Level 1 (Over $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Atlanta',
                    state: 'GA',
                    zipcode: null,
                    fullAddress: 'GA, Atlanta'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Ready for Review',
                isAssessmentReceived: true,
                emailAddress: 'chris.beal@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Finance',
                invitationSentDate: '9-APR-2019',
                createdDate: '9-APR-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '2-MAY-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '3333',
                fullname: 'Goulet, Dan',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Atlanta',
                    state: 'GA',
                    zipcode: null,
                    fullAddress: 'GA, Atlanta'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Edison',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Edison'
                },
                status: 'Pending Van Line Quote',
                isAssessmentReceived: true,
                emailAddress: 'dan.goulet@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Engineering',
                invitationSentDate: '22-FEB-2019',
                createdDate: '2-FEB-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '23-MAR-19',
                noOfRooms: '8',
                housingType: 'Owns house',
                noOfPeople: '4'
            },
            {
                candidateId: '4444',
                fullname: 'Cordon, James',
                level: 'Level 3 (Below $75,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Ready for Review',
                isAssessmentReceived: false,
                emailAddress: 'j.cordon@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Engineering',
                invitationSentDate: '',
                createdDate: '23-JAN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '30-JAN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '2'
            },
            {
                candidateId: '5555',
                fullname: 'Hayes, Francesca',
                level: 'Level 1 (Over $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Pending Van Line Quote',
                isAssessmentReceived: true,
                emailAddress: 'francesca.hayes@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Accounting',
                invitationSentDate: '22-FEB-2019',
                createdDate: '2-FEB-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '23-MAR-19',
                noOfRooms: '6',
                housingType: 'Rents Apartment',
                noOfPeople: '1'
            },
            {
                candidateId: '6666',
                fullname: 'Hu, Adam',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'adam.hu@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Marketing',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '7777',
                fullname: 'Jones, Suehong',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'suehong.jones@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Human Resources',
                invitationSentDate: '',
                createdDate: '2-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '20-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '2'
            },
            {
                candidateId: '8888',
                fullname: 'Rector, Aleksandr',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'aleksandr.rector@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Product Solutions',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '9999',
                fullname: 'Richardson, Matthew',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'New York City',
                    state: 'NY',
                    zipcode: null,
                    fullAddress: 'NY, New York City'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'mathew.richardson@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Human Resources',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '2'
            },
            {
                candidateId: '1212',
                fullname: 'Varaha, Pritpal',
                level: 'Level 1 (Over $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'New York City',
                    state: 'NY',
                    zipcode: null,
                    fullAddress: 'NY, New York City'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Atlanta',
                    state: 'GA',
                    zipcode: null,
                    fullAddress: 'GA, Atlanta'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'pritpal.varaha@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Finance',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '4'
            },
            {
                candidateId: '1313',
                fullname: 'Ellacott, Robin',
                level: 'Level 3 (Below $75,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Fushing',
                    state: 'NY',
                    zipcode: null,
                    fullAddress: 'NY, Fushing'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'robin.ellacott@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Engineering',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '4'
            }
        ]
    }
};
/**candidate list mock with status */
export const candidatesDetailsMock204 = {
    status: 204,
    statusText: 'OK',
    url: 'https://alphaapitst01.cartus.com/candidate?clientContactId=5de2cd7d65236577b9223541&sortField=fullname&sortDir=ASC&limit=20',
    ok: true,
    type: 4,
    body: {
        totalActiveCandidate: 11,
        candidates: [
            {
                candidateId: '1111',
                fullname: 'Maturity,Matthew',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Houston',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Houston'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'mathew.maturity@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Human Resources',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '2222',
                fullname: 'Beal, Christopher',
                level: 'Level 1 (Over $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Atlanta',
                    state: 'GA',
                    zipcode: null,
                    fullAddress: 'GA, Atlanta'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Ready for Review',
                isAssessmentReceived: true,
                emailAddress: 'chris.beal@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Finance',
                invitationSentDate: '9-APR-2019',
                createdDate: '9-APR-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '2-MAY-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '3333',
                fullname: 'Goulet, Dan',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Atlanta',
                    state: 'GA',
                    zipcode: null,
                    fullAddress: 'GA, Atlanta'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Edison',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Edison'
                },
                status: 'Pending Van Line Quote',
                isAssessmentReceived: true,
                emailAddress: 'dan.goulet@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Engineering',
                invitationSentDate: '22-FEB-2019',
                createdDate: '2-FEB-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '23-MAR-19',
                noOfRooms: '8',
                housingType: 'Owns house',
                noOfPeople: '4'
            },
            {
                candidateId: '4444',
                fullname: 'Cordon, James',
                level: 'Level 3 (Below $75,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Ready for Review',
                isAssessmentReceived: false,
                emailAddress: 'j.cordon@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Engineering',
                invitationSentDate: '',
                createdDate: '23-JAN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '30-JAN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '2'
            },
            {
                candidateId: '5555',
                fullname: 'Hayes, Francesca',
                level: 'Level 1 (Over $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Pending Van Line Quote',
                isAssessmentReceived: true,
                emailAddress: 'francesca.hayes@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Accounting',
                invitationSentDate: '22-FEB-2019',
                createdDate: '2-FEB-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '23-MAR-19',
                noOfRooms: '6',
                housingType: 'Rents Apartment',
                noOfPeople: '1'
            },
            {
                candidateId: '6666',
                fullname: 'Hu, Adam',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'adam.hu@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Marketing',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '7777',
                fullname: 'Jones, Suehong',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'suehong.jones@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Human Resources',
                invitationSentDate: '',
                createdDate: '2-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '20-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '2'
            },
            {
                candidateId: '8888',
                fullname: 'Rector, Aleksandr',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'aleksandr.rector@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Product Solutions',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '3'
            },
            {
                candidateId: '9999',
                fullname: 'Richardson, Matthew',
                level: 'Level 2 ($75,000 - $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Nutley',
                    state: 'NJ',
                    zipcode: null,
                    fullAddress: 'NJ, Nutley'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'New York City',
                    state: 'NY',
                    zipcode: null,
                    fullAddress: 'NY, New York City'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'mathew.richardson@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Human Resources',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '2'
            },
            {
                candidateId: '1212',
                fullname: 'Varaha, Pritpal',
                level: 'Level 1 (Over $150,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'New York City',
                    state: 'NY',
                    zipcode: null,
                    fullAddress: 'NY, New York City'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Atlanta',
                    state: 'GA',
                    zipcode: null,
                    fullAddress: 'GA, Atlanta'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'pritpal.varaha@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Finance',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '4'
            },
            {
                candidateId: '1313',
                fullname: 'Ellacott, Robin',
                level: 'Level 3 (Below $75,000)',
                departure: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Dallas',
                    state: 'TX',
                    zipcode: null,
                    fullAddress: 'TX, Dallas'
                },
                destination: {
                    country: 'USA',
                    streetAddress: null,
                    city: 'Fushing',
                    state: 'NY',
                    zipcode: null,
                    fullAddress: 'NY, Fushing'
                },
                status: 'Invitation Not Sent',
                isAssessmentReceived: false,
                emailAddress: 'robin.ellacott@gmail.com',
                phoneNumber: '9089098908',
                businessUnit: 'Engineering',
                invitationSentDate: '',
                createdDate: '21-JUN-19',
                createdBy: 'Matthew, Maturity',
                lastUpdatedDate: '21-JUN-19',
                noOfRooms: '4',
                housingType: 'Rents Apartment',
                noOfPeople: '4'
            }
        ]
    }
};

/** stores candidate mock data */
export const candidateMock: Candidate = {
    candidateId: '2222',
    fullname: 'Beal, Christopher',
    level: 'Level 1 (Over $150,000)',
    departure: {
        country: 'USA',
        streetAddress: null,
        city: 'Atlanta',
        state: 'GA',
        zipcode: null,
        fullAddress: 'GA, Atlanta'
    },
    destination: {
        country: 'USA',
        streetAddress: null,
        city: 'Dallas',
        state: 'TX',
        zipcode: null,
        fullAddress: 'TX, Dallas'
    },
    status: 'Ready for Review',
    isAssessmentReceived: true,
    emailAddress: 'chris.beal@gmail.com',
    phoneNumber: '9089098908',
    businessUnit: 'Finance',
    invitationSentDate: '9-APR-2019',
    createdDate: '9-APR-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '2-MAY-19',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    noOfPeople: '3',
    executedFunctionType: 'Update',
    countryDialingCode: '+1'
};

/** stores mock city list */
export const cityListMock: string[] = ['Newyork', 'Washington', 'Danbury, CT'];
/** stores mock response for duplicate candidate */
export const mockedDuplicateResponse = {
    candidateId: '1111',
    message: 'Duplicate',
    statusCode: 200
};
/**stores duplicate API response */
export const duplicateResonseMock: APIResponseDuplicate = {
    duplicateStatus: false,
    description: 'Candidate has no active move order-request',
    CODE: 'CAND_NOT_EXST'
};
export const isDuplicateResonseMock: APIResponseDuplicate = {
    duplicateStatus: true,
    description: 'Duplicate candidate found',
    CODE: 'DUP_FOUND'
};
/** stores mock response for success response */
export const mockedSuccessResponse = {
    candidateId: '1111',
    message: 'Success',
    statusCode: 200
};
/**stores mock response for send invite */
export const mockedSendInviteResponse = {
    candidateId: '1111',
    message: 'E-Mail Invitation Sent Successfully',
    statusCode: 200
};
/**stores mock response for resend invite */
export const mockedresendInviteResponse = {
    candidateId: '1111',
    message: 'E-Mail Invitation ReSent Successfully',
    statusCode: 200
};
/** stores mock response for success response */
export const authoriseMockResponse = {
    candidateId: '1111',
    message: 'Success',
    status: 200
};
/** stores mock response for create candidate */
export const mockedAddedUserResponse = {
    candidateId: '1111',
    message: 'Added user Successfully',
    statusCode: 200
};
export const mockedTransferee = {
    candidateId: '1111',
    message: 'Transferee Authorized Successfully',
    status: 200
};
/** stores mock response for update candidate */
export const mockedUpdatedUserResponse = {
    candidateId: '1111',
    message: 'Updated user Successfully',
    statusCode: 200
};
/** stores candidate info mock */
export const model: Candidate = {
    candidateId: '1111',
    fullname: 'Matthew, Maturity',
    level: 'Level 2 ($75,000 - $150,000)',
    departure: {
        country: 'USA',
        streetAddress: null,
        city: 'Nutley',
        state: 'NJ',
        zipcode: null,
        fullAddress: 'NJ, Nutley'
    },
    destination: {
        country: 'USA',
        streetAddress: null,
        city: 'Houston',
        state: 'TX',
        zipcode: null,
        fullAddress: 'TX, Houston'
    },
    status: 'Invitation Not Sent',
    isAssessmentReceived: false,
    emailAddress: 'mathew.maturity@gmail.com',
    phoneNumber: '9089098908',
    businessUnit: 'Human Resources',
    invitationSentDate: '',
    createdDate: '21-JUN-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '21-JUN-19',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    noOfPeople: '3',
    countryDialingCode: '+1'
};
/** stores mock response for adding candidate */
export const mockedResponse: APIResponse = {
    candidateID: '1234',
    message: 'Added user Successfully',
    statusCode: 200
};
/** stores candidate info */
export const candidateData: any = {
    candidateId: '1111',
    fullname: 'Maturity,Matthew',
    level: 'Level 2 ($75,000 - $150,000)',
    departure: {
        country: 'USA',
        streetAddress: null,
        city: 'Nutley',
        state: 'NJ',
        zipcode: null,
        fullAddress: 'NJ, Nutley'
    },
    destination: {
        country: 'USA',
        streetAddress: null,
        city: 'Austin',
        state: 'TX',
        zipcode: null,
        fullAddress: 'TX, Austin'
    },
    status: 'Invitation Not Sent',
    isAssessmentReceived: false,
    emailAddress: 'mathew.maturity@gmail.com',
    businessUnit: 'Human Resources',
    invitationSentDate: '',
    createdDate: '21-JUN-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '21-JUN-19',
    streetAddress: '41 Apple Ridge Rd',
    city: 'Danbury',
    state: 'CT',
    zipcode: '06810',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    noOfPeople: '3',
    total: '5',
    countryDialingCode: '7238'
};
/** stores mock for dialog */
export const dialogMock = {
    close: () => { }
};
/** stores mock address */
export const addressMock: Address = {
    fullAddress: 'New Jersey, NJ, USA',
    streetAddress: '',
    city: 'New Jersey',
    state: 'NJ',
    country: 'USA',
    zipcode: null
};
/** stores mock API URL */
export const API_ROOT_URL_MOCK = 'http://localhost';
/** stores mock client id */
export const clientContactIDMock = '5d8b16401c9d440000f9bdec';
/** stores mock candidate id */
export const candidateIDMock = '5d9212860a8cd65c193c84ee';
/** stores mock budget details */
// export const budgetDetailsMock: BudgetService[] = [{
//     candidateId: '2222',
//     coreBenefits: {
//         budgetName: 'Core Benefits',
//         budgetDesc: 'Van Line Move',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 18300,
//     },
//     FlexSpend: [{
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Travel to New Location',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 18300,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'One-Time Fixed Allowance',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 18300,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Return Trip Home',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 700,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Temporary Living',
//         budgetRangeMin: 1000,
//         budgetRangeMax: 3000,
//         budgetTotal: 2400,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Home Finding',
//         budgetRangeMin: 1000,
//         budgetRangeMax: 3000,
//         budgetTotal: 1150,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Lease Cancellation',
//         budgetRangeMin: 1000,
//         budgetRangeMax: 3000,
//         budgetTotal: 1400,

//     },
//     ],
//     CoreBudgetTotal: 18300,
//     FlexSpendTotal: 15550,
//     TaxAmount: 17300,
//     isTaxEnabled: false,
//     RecommendedBudget: 33850,
//     UserBudget: 10000,
//     TotalAmount: 40000,
//     currency: 'USD'
// },
// {
//     candidateId: '4444',
//     coreBenefits: {
//         budgetName: 'Core Benefits',
//         budgetDesc: 'Van Line Move',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 18300,
//     },
//     FlexSpend: [{
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Travel to New Location',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 18300,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'One-Time Fixed Allowance',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 18300,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Return Trip Home',
//         budgetRangeMin: 15000,
//         budgetRangeMax: 30000,
//         budgetTotal: 700,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Temporary Living',
//         budgetRangeMin: 1000,
//         budgetRangeMax: 3000,
//         budgetTotal: 2400,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Home Finding',
//         budgetRangeMin: 1000,
//         budgetRangeMax: 3000,
//         budgetTotal: 1150,

//     },
//     {
//         budgetName: 'Flexible Spend',
//         budgetDesc: 'Lease Cancellation',
//         budgetRangeMin: 1000,
//         budgetRangeMax: 3000,
//         budgetTotal: 1400,

//     },
//     ],
//     CoreBudgetTotal: 18300,
//     FlexSpendTotal: 15550,
//     TaxAmount: 17300,
//     isTaxEnabled: false,
//     RecommendedBudget: 33850,
//     UserBudget: 10000,
//     TotalAmount: 40000,
//     currency: 'USD'
// }
// ];
/** stores mock data for candidate move info */
export const candidateMoveInfoMock: CandidateMoveInfo = {
    departure: {
        fullAddress: '8 Passaic Ave, Boston, MA 01234',
        streetAddress: '8 Passaic Ave',
        city: 'Boston',
        state: 'MA',
        zipcode: '01234',
        country: 'USA'
    },
    destination: {
        fullAddress: 'dummy full address',
        streetAddress: 'dummy street address',
        city: 'Danbury',
        state: 'CT',
        zipcode: '8734',
        country: 'USA'
    },
    totalNumberOfPeople: '4',
    estimatedMoveStartDate: '12/22/2019',
    estimatedMoveEndDate: '04/12/2019'
};
/** stores mock data for candidate departure home details */
export const departureDetailsMock: DepatureHomeDetails = {
    departure: {
        fullAddress: '8 Passiac Ave, Boston, MA, 01234',
        streetAddress: '8 Passiac Ave',
        city: 'Boston',
        state: 'MA',
        zipcode: '01234',
        country: 'USA'
    },
    ownerStatus: 'Own',
    housingType: 'House',
    noOfRooms: '3'
};
/**mock data for add candidate */
export const addCandidateMock: Candidate = {
    candidateId: '1111',
    fullname: 'Matthew, Maturity',
    level: 'Level 2 ($75,000 - $150,000)',
    departure: {
        country: 'USA',
        streetAddress: null,
        city: 'Nutley',
        state: 'NJ',
        zipcode: null,
        fullAddress: 'NJ, Nutley'
    },
    destination: {
        country: 'USA',
        streetAddress: null,
        city: 'Houston',
        state: 'TX',
        zipcode: null,
        fullAddress: 'TX, Houston'
    },
    status: 'Invitation Not Sent',
    isAssessmentReceived: false,
    emailAddress: 'mathew.maturity@gmail.com',
    phoneNumber: '9089098908',
    businessUnit: 'Human Resources',
    invitationSentDate: '',
    createdDate: '21-JUN-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '21-JUN-19',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    executedFunctionType: 'Create',
    noOfPeople: '1',
    countryDialingCode: '+1'
};
/**mock data for send invite to candidate */
export const inviteCandidateMock: Candidate = {
    candidateId: '1111',
    fullname: 'Matthew, Maturity',
    level: 'Level 2 ($75,000 - $150,000)',
    departure: {
        country: 'USA',
        streetAddress: null,
        city: 'Nutley',
        state: 'NJ',
        zipcode: null,
        fullAddress: 'NJ, Nutley'
    },
    destination: {
        country: 'USA',
        streetAddress: null,
        city: 'Houston',
        state: 'TX',
        zipcode: null,
        fullAddress: 'TX, Houston'
    },
    status: 'Invitation Not Sent',
    isAssessmentReceived: false,
    emailAddress: 'mathew.maturity@gmail.com',
    phoneNumber: '9089098908',
    businessUnit: 'Human Resources',
    invitationSentDate: '',
    createdDate: '21-JUN-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '21-JUN-19',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    executedFunctionType: 'Invite',
    noOfPeople: '2',
    countryDialingCode: '+1'
};

/** mock estimates for cost model */
export const mockCostModelEstimates = {
    costModelName: 'retyu',
    costModelId: '5daf0e69a7bacf11d2a755b3',
    clientContactId: '5d8b16401c9d440000f9bdec',
    costEstimates: [
        {
            familySize: 1,
            estimatedTotalMaximumCost: 222222,
            estimatedTotalMinimumCost: 111111,
            coreServices: {
                estimatedSubTotalMaximumCost: 17765,
                estimatedSubTotalMinimumCost: 2250
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 13500,
                estimatedSubTotalMaximumCost: 38856
            }
        },
        {
            familySize: 2,
            estimatedTotalMaximumCost: 444444,
            estimatedTotalMinimumCost: 333333,
            coreServices: {
                estimatedSubTotalMaximumCost: 14078,
                estimatedSubTotalMinimumCost: 2997
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 17982,
                estimatedSubTotalMaximumCost: 51222
            }
        },
        {
            familySize: 4,
            estimatedTotalMaximumCost: 666666,
            estimatedTotalMinimumCost: 555555,
            coreServices: {
                estimatedSubTotalMaximumCost: 17765,
                estimatedSubTotalMinimumCost: 4145
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 24870,
                estimatedSubTotalMaximumCost: 65730
            }
        }
    ],
    taxGrossRate: 100,
    destState: ' AR',
    destCity: 'Little Rock',
    deptState: ' MT',
    deptCity: 'Polson',
    level: 'Level 1 (Over $150,000)',
    createdDate: '2019-10-22T14:12:57.002Z',
    updatedDate: '2019-10-22T14:12:57.002Z'
};
/** mock for existing data */
export const mockExistingCostModel = {
    clientContactId: '5d8b16401c9d440000f9bdec',
    costEstimates: [
        {
            familySize: 1,
            estimatedTotalMaximumCost: 222222,
            estimatedTotalMinimumCost: 111111,
            coreServices: {
                estimatedSubTotalMaximumCost: 17765,
                estimatedSubTotalMinimumCost: 2250
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 13500,
                estimatedSubTotalMaximumCost: 38856
            }
        },
        {
            familySize: 2,
            estimatedTotalMaximumCost: 444444,
            estimatedTotalMinimumCost: 333333,
            coreServices: {
                estimatedSubTotalMaximumCost: 14078,
                estimatedSubTotalMinimumCost: 2997
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 17982,
                estimatedSubTotalMaximumCost: 51222
            }
        },
        {
            familySize: 4,
            estimatedTotalMaximumCost: 666666,
            estimatedTotalMinimumCost: 555555,
            coreServices: {
                estimatedSubTotalMaximumCost: 17765,
                estimatedSubTotalMinimumCost: 4145
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 24870,
                estimatedSubTotalMaximumCost: 65730
            }
        }
    ],
    costModelId: '5daf0dd65c3b3d6905695e38',
    costModelName: 'Rachael Test',
    createdDate: '2019-10-22T14:10:30.494Z',
    deptCity: 'Boston',
    deptState: ' MA',
    destCity: 'Dallas',
    destState: ' TX',
    expiryDate: '2019-11-21',
    level: 'Level 1 (Over $150,000)',
    status: 'Active',
    taxGrossRate: 100,
    updatedDate: '2019-10-22T14:10:30.494Z'
};

export const mockCompareCostModelList = [{
    costModelName: 'Test Model Name',
    costModelId: '5e0a52a639a6002d4f422b23',
    clientId: '5de08d19a8554a2266114ff6',
    clientContactId: '5de2ce0865236577b92287a6',
    costEstimates: [
        {
            familySize: 'single',
            estimatedTotalMaximumCost: 222222,
            estimatedTotalMinimumCost: 111111,
            coreServices: {
                estimatedSubTotalMaximumCost: 17765,
                estimatedSubTotalMinimumCost: 2250
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 13500,
                estimatedSubTotalMaximumCost: 38856
            }
        },
        {
            familySize: 'two_to_three',
            estimatedTotalMaximumCost: 444444,
            estimatedTotalMinimumCost: 333333,
            coreServices: {
                estimatedSubTotalMaximumCost: 14078,
                estimatedSubTotalMinimumCost: 2997
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 17982,
                estimatedSubTotalMaximumCost: 51222
            }
        },
        {
            familySize: 'four_plus',
            estimatedTotalMaximumCost: 666666,
            estimatedTotalMinimumCost: 555555,
            coreServices: {
                estimatedSubTotalMaximumCost: 17765,
                estimatedSubTotalMinimumCost: 4145
            },
            flexServices: {
                estimatedSubTotalMinimumCost: 24870,
                estimatedSubTotalMaximumCost: 65730
            }
        }],
    taxGrossRate: 0.48478099480326653,
    destState: 'TX',
    destCity: 'Texas City',
    deptState: 'NY',
    deptCity: 'New York',
    level: 'Level 2 (75,000 - 150,000 USD)',
    createdDate: '2019-12-30T19:40:22.410Z',
    updatedDate: '2019-12-30T19:40:25.299Z',
    expiryDate: '2020-01-29',
    status: 'Expired',
    levelName: 'Level 2 ',
    levelDes: '(75,000 - 150,000 USD)',
    deptFullAdd: 'New York, NY',
    destFullAdd: 'Texas City, TX'
}, {
    costModelName: 'QA3 Offshore',
    costModelId: '5e0a527f39a6008c30422b21',
    clientId: '5de08d19a8554a2266114ff6',
    clientContactId: '5de2ce0865236577b92287a6',
    costEstimates: [{
        familySize: 'single',
        estimatedTotalMaximumCost: 222222,
        estimatedTotalMinimumCost: 111111,
        coreServices: {
            estimatedSubTotalMaximumCost: 17765,
            estimatedSubTotalMinimumCost: 2250
        },
        flexServices: {
            estimatedSubTotalMinimumCost: 13500,
            estimatedSubTotalMaximumCost: 38856
        }
    },
    {
        familySize: 'two_to_three',
        estimatedTotalMaximumCost: 444444,
        estimatedTotalMinimumCost: 333333,
        coreServices: {
            estimatedSubTotalMaximumCost: 14078,
            estimatedSubTotalMinimumCost: 2997
        },
        flexServices: {
            estimatedSubTotalMinimumCost: 17982,
            estimatedSubTotalMaximumCost: 51222
        }
    },
    {
        familySize: 'four_plus',
        estimatedTotalMaximumCost: 666666,
        estimatedTotalMinimumCost: 555555,
        coreServices: {
            estimatedSubTotalMaximumCost: 17765,
            estimatedSubTotalMinimumCost: 4145
        },
        flexServices: {
            estimatedSubTotalMinimumCost: 24870,
            estimatedSubTotalMaximumCost: 65730
        }
    }],
    taxGrossRate: 0.48478099480326653,
    destState: 'TX',
    destCity: 'Texas City',
    deptState: 'NY',
    deptCity: 'NYC',
    level: 'Level 2 (75,000 - 150,000 USD)',
    createdDate: '2019-12-30T19:39:43.414Z',
    updatedDate: '2019-12-30T19:39:46.531Z',
    expiryDate: '2020-01-29',
    status: 'Expired',
    levelName: 'Level 2 ',
    levelDes: '(75,000 - 150,000 USD)',
    deptFullAdd: 'NYC, NY',
    destFullAdd: 'Texas City, TX'
}];

export const mockDeleteCostModel = {
    noOfSelected: 1,
    selectedCostModels: [{
        clientContactId: '5d8b16401c9d440000f9bdec',
        costEstimates: [
            {
                familySize: 'single',
                estimatedTotalMaximumCost: 222222,
                estimatedTotalMinimumCost: 111111,
                coreServices: {
                    estimatedSubTotalMaximumCost: 17765,
                    estimatedSubTotalMinimumCost: 2250
                },
                flexServices: {
                    estimatedSubTotalMinimumCost: 13500,
                    estimatedSubTotalMaximumCost: 38856
                }
            },
            {
                familySize: 'two_to_three',
                estimatedTotalMaximumCost: 444444,
                estimatedTotalMinimumCost: 333333,
                coreServices: {
                    estimatedSubTotalMaximumCost: 14078,
                    estimatedSubTotalMinimumCost: 2997
                },
                flexServices: {
                    estimatedSubTotalMinimumCost: 17982,
                    estimatedSubTotalMaximumCost: 51222
                }
            },
            {
                familySize: 'four_plus',
                estimatedTotalMaximumCost: 666666,
                estimatedTotalMinimumCost: 555555,
                coreServices: {
                    estimatedSubTotalMaximumCost: 17765,
                    estimatedSubTotalMinimumCost: 4145
                },
                flexServices: {
                    estimatedSubTotalMinimumCost: 24870,
                    estimatedSubTotalMaximumCost: 65730
                }
            }
        ],
        costModelId: '5daf0dd65c3b3d6905695e38',
        costModelName: 'Rachael Test',
        createdDate: '2019-10-22T14:10:30.494Z',
        deptCity: 'Boston',
        deptState: ' MA',
        destCity: 'Dallas',
        destState: ' TX',
        expiryDate: '2019-11-21',
        level: 'Level 1 (Over $150,000)',
        status: 'Active',
        taxGrossRate: 100,
        updatedDate: '2019-10-22T14:10:30.494Z'
    }, {
        clientContactId: '5d8b16401c9d440000f9bdec',
        costEstimates: [
            {
                familySize: 'single',
                estimatedTotalMaximumCost: 222222,
                estimatedTotalMinimumCost: 111111,
                coreServices: {
                    estimatedSubTotalMaximumCost: 17765,
                    estimatedSubTotalMinimumCost: 2250
                },
                flexServices: {
                    estimatedSubTotalMinimumCost: 13500,
                    estimatedSubTotalMaximumCost: 38856
                }
            },
            {
                familySize: 'two_to_three',
                estimatedTotalMaximumCost: 444444,
                estimatedTotalMinimumCost: 333333,
                coreServices: {
                    estimatedSubTotalMaximumCost: 14078,
                    estimatedSubTotalMinimumCost: 2997
                },
                flexServices: {
                    estimatedSubTotalMinimumCost: 17982,
                    estimatedSubTotalMaximumCost: 51222
                }
            },
            {
                familySize: 'four_plus',
                estimatedTotalMaximumCost: 666666,
                estimatedTotalMinimumCost: 555555,
                coreServices: {
                    estimatedSubTotalMaximumCost: 17765,
                    estimatedSubTotalMinimumCost: 4145
                },
                flexServices: {
                    estimatedSubTotalMinimumCost: 24870,
                    estimatedSubTotalMaximumCost: 65730
                }
            }
        ],
        costModelId: '5daf0dd65c3b3d6905695e38',
        costModelName: 'Rachael Test',
        createdDate: '2019-10-22T14:10:30.494Z',
        deptCity: 'Boston',
        deptState: ' MA',
        destCity: 'Dallas',
        destState: ' TX',
        expiryDate: '2019-11-21',
        level: 'Level 1 (Over $150,000)',
        status: 'Active',
        taxGrossRate: 100,
        updatedDate: '2019-10-22T14:10:30.494Z'
    }]
};

/**stores transferee details */
export const transfereeDetailsMock: ApprovedMove = {
    transfereeId: '21312',
    candidate: {
        candidateId: '3333',
        fullname: 'Goulet, Dan',
        level: 'Level 2 ($75,000 - $150,000)',
        departure: {
            country: 'USA',
            streetAddress: null,
            city: 'Jersey City',
            state: 'NJ',
            zipcode: null,
            fullAddress: 'NJ, Jersey City'
        },
        destination: {
            country: 'USA',
            streetAddress: null,
            city: 'San Francisco',
            state: 'CA',
            zipcode: null,
            fullAddress: 'CA, San Francisco'
        },
        status: 'Invitation Not Sent',
        isAssessmentReceived: false,
        emailAddress: 'dan.goulet@gmail.com',
        phoneNumber: '9089098908',
        businessUnit: 'Engineering',
        invitationSentDate: '12-JAN-19',
        createdDate: '8-JAN-19',
        createdBy: 'Matthew, Maturity',
        lastUpdatedDate: '25-JAN-19',
        noOfRooms: '4',
        housingType: 'Rents Apartment',
        noOfPeople: '2',
        countryDialingCode: '+1'
    },
    authorizedAmt: 23565,
    status: 'Authorized',
    lastUpdatedDate: '05/20/2019',
    authorizedBy: 'Tom Jefferson',
    authorizedDate: '05/15/2019',
    latestMilestone: 'Estimated Pack and Load on 2019-10-31',
    movePhase: [
        {
            phase: 'Authorized',
            status: true,
            order: 1,
            date: '2019-11-01T10:54:44.452Z',
            dateLabel: 'Payment Received Date'
        },
        {
            phase: 'Preparing to Move',
            status: true,
            order: 2,
            date: '2019-11-03T10:54:44.452Z',
            dateLabel: 'Load Date'
        },
        {
            phase: 'Move in Progress',
            status: true,
            order: 3,
            date: '2019-11-03T10:54:44.452Z',
            dateLabel: 'Load Date'
        },
        {
            phase: 'Arriving in New Location',
            status: false,
            order: 4,
            date: '2019-11-07T10:54:44.452Z',
            dateLabel: 'Delivery Date'
        },
        {
            phase: 'Settled in New Location',
            status: false,
            order: 5,
            date: '2019-11-09T10:54:44.452Z',
            dateLabel: 'Settled Date'
        }],
    jobStartDate: '2019-11-10',
    remainingAmt: 20417

};
/** stores mock candidate budget details object */
// export const candidateBudgetDetailsMock: CandidateBudgetDetails = {
//     'coreBenefits': {
//         'budgetName': 'Core Services',
//         'budgetDesc': 'Core Services (Vanline move)',
//         'insuranceAmount': 149,
//         'minInsuredValue': 17276,
//         'bidAmount': 2999,
//         'budgetAmount': 3148
//     },
//     'flexSpend': [
//         {
//             'budgetName': 'Storage',
//             'budgetDesc': 'Storage Line Item',
//             'budgetAmount': 500,
//             'budgetRangeMin': 0,
//             'budgetRangeMax': 0
//         },
//         {
//             'budgetName': 'travelToNewLocation',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 2419,
//             'budgetRangeMin': 878,
//             'budgetRangeMax': 3960
//         },
//         {
//             'budgetName': 'temporaryLiving',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 6476,
//             'budgetRangeMin': 2250,
//             'budgetRangeMax': 10702
//         },
//         {
//             'budgetName': 'homeFinding',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 8537,
//             'budgetRangeMin': 2997,
//             'budgetRangeMax': 14078
//         },
//         {
//             'budgetName': 'returnTripHome',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 1815,
//             'budgetRangeMin': 740,
//             'budgetRangeMax': 2890
//         },
//         {
//             'budgetName': 'otherMiscServices',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 1170,
//             'budgetRangeMin': 472,
//             'budgetRangeMax': 1868
//         }
//     ],
//     'coreBudgetTotal': 3148,
//     'flexSpendTotal': 20417,
//     'grossUpRate': 0.4145,
//     'isTaxEnabled': true,
//     'UserBudget': 23565,
//     'candidate': {
//         'candidateId': '5db1b063a541ee0fe482a0b1',
//         'fullname': 'bhaskar, gururani',
//         'businessUnit': 'Developer',
//         'emailAddress': 'bhaskar.gurur@gmail.com',
//         'phoneNumber': '9089098908',
//         'departure': {
//             'fullAddress': 'Dallas, TX',
//             'streetAddress': '12 Passiac Avenue',
//             'city': 'Dallas',
//             'state': 'TX',
//             'zipcode': 'AH4876',
//             'country': 'USA'
//         },
//         'destination': {
//             'fullAddress': 'Danbury, CT',
//             'streetAddress': '4321',
//             'city': 'Danbury',
//             'state': 'CT',
//             'country': 'USA'
//         },
//         'status': 'Ready for Review',
//         'invitationSentDate': '2019-10-25T08:58:47.130Z',
//         'createdDate': '2019-10-25T08:58:47.100Z',
//         'createdBy': '5d8b16401c9d440000f9bdec',
//         'lastUpdatedDate': '2019-10-25T08:58:47.130Z',
//         'noOfRooms': '2',
//         'housingType': 'House',
//         'noOfPeople': '3',
//         'level': 'Level 1 (Over $150,000)',
//         'countryDialingCode': '+1'
//     },
//     'needsAssessment': {
//         'contactNumber': '7200415529',
//         'candidateId': '5db1b063a541ee0fe482a0b1',
//         'familyDetails': {
//             'noOfRelocatePeople': '3',
//             'familyRelocationStatus': 'yes'
//         },
//         'departureAddr': {
//             'fullAddress': '',
//             'streetAddress': '1234',
//             'city': 'Dallas',
//             'state': 'TX',
//             'zipcode': 'AH4876',
//             'country': 'USA'
//         },
//         'destinationAddr': {
//             'fullAddress': '',
//             'streetAddress': '4321',
//             'city': 'Danbury',
//             'state': 'CT',
//             'country': 'USA'
//         },
//         'residenceDetails': {
//             'noOfRooms': 2,
//             'homeType': 'House',
//             'ownerStatus': 'Own'
//         },
//         'estimatedMoveStartDate': '2019-10-18T00:00:00.000Z',
//         'estimatedMoveEndDate': '2019-12-18T00:00:00.000Z'
//     },
//     'approvedMoves': transfereeDetailsMock,
//     'timelineDetails': [
//         {
//             'serviceName': 'Job Start Date',
//             'serviceDesc': 'This date is the date your company told us you begin working in your new location.',
//             'startDate': null,
//             'endDate': null,
//             'serviceType': 'others',
//             'sortOrder': 0,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Estimated Pack Date Range',
//             'serviceDesc': `This is the date your move professionals will begin
//              the process to document and pack your belongings. See FAQ for move details.`,
//             'startDate': null,
//             'endDate': null,
//             'serviceType': 'estimated',
//             'sortOrder': 0,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Estimated Load Date Range',
//             'serviceDesc': 'This is the date your move professionals will load your belongings on the moving truck.',
//             'startDate': '2019-12-14',
//             'endDate': '2019-12-16',
//             'serviceType': 'estimated',
//             'sortOrder': 3,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Estimated Storage In Date Range',
//             'serviceDesc': `This is the date your items arrive at the storage facility.
//                 Our van line partner can provide with the storage facility name and address.`,
//             'startDate': '2019-12-20',
//             'endDate': '2019-12-21',
//             'serviceType': 'estimated',
//             'sortOrder': 4,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Estimated Storage Out Date Range',
//             'serviceDesc': 'This is the date your items will be taken out of storage for the final delivery to your new location.',
//             'startDate': '2019-12-22',
//             'endDate': '2019-12-23',
//             'serviceType': 'estimated',
//             'sortOrder': 5,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Estimated Delivery Date Range',
//             'serviceDesc': `This is the date your household goods delivery is expected to arrive.
//                 Your move coordinator will confirm the actual delivery date. See FAQ for move details.`,
//             'startDate': '2019-12-24',
//             'endDate': '2019-12-30',
//             'serviceType': 'estimated',
//             'sortOrder': 6,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Actual Pack Date',
//             'serviceDesc': `This is the date your move professionals will begin the process to
//                 document and pack your belongings. See FAQ for move details.`,
//             'startDate': null,
//             'endDate': '2019-12-13',
//             'serviceType': 'actual',
//             'sortOrder': 7,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Actual Load Date',
//             'serviceDesc': 'This is the date your move professionals will load your belongings on the moving truck.',
//             'startDate': null,
//             'endDate': '2019-12-15',
//             'serviceType': 'actual',
//             'sortOrder': 8,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Actual Storage In Date',
//             'serviceDesc': `This is the date your items arrive at the storage facility.
//                 Our van line partner can provide with the storage facility name and address.`,
//             'startDate': null,
//             'endDate': '2019-12-21',
//             'serviceType': 'actual',
//             'sortOrder': 9,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Actual Storage Out Date',
//             'serviceDesc': 'This is the date your items will be taken out of storage for the final delivery to your new location.',
//             'startDate': null,
//             'endDate': '2019-12-23',
//             'serviceType': 'actual',
//             'sortOrder': 10,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Actual Delivery Date',
//             'serviceDesc': `This is the date your household goods delivery is expected to arrive.
//              Your move coordinator will confirm the actual delivery date. See FAQ for move details.`,
//             'startDate': null,
//             'endDate': '2019-12-27',
//             'serviceType': 'actual',
//             'sortOrder': 11,
//             'isActualAvailable': true
//         },
//         {
//             'serviceName': 'Service Delivery Complete',
//             'serviceDesc': `This is the date your household goods delivery is expected to arrive.
//                 Your move coordinator will confirm the actual delivery date. See FAQ for move details.`,
//             'startDate': null,
//             'endDate': '2019-12-30',
//             'serviceType': 'others',
//             'sortOrder': 12,
//             'isActualAvailable': true
//         }
//     ]
//     // 'approvedMoves': transfereeDetailsMock
//     // 'approvedMoves': {
//     //     'transfereeId': '21312',
//     //     'candidate': {
//     //       'clientId': '1234',
//     //       'candidateId': '1111',
//     //       'fullname': 'Maturity, Matthew',
//     //       'level': 'Level 2 (100,001 to 250,000 USD)',
//     //       'departure': {
//     //         'country': 'USA',
//     //         'streetAddress': null,
//     //         'city': 'Nutley',
//     //         'state': 'NJ',
//     //         'zipcode': null,
//     //         'fullAddress': 'NJ, Nutley'
//     //       },
//     //       'destination': {
//     //         'country': 'USA',
//     //         'streetAddress': null,
//     //         'city': 'Austin',
//     //         'state': 'TX',
//     //         'zipcode': null,
//     //         'fullAddress': 'TX, Austin'
//     //       },
//     //       'status': 'Invitation Not Sent',
//     //       'isAssessmentReceived': false,
//     //       'emailAddress': 'mathew.maturity@gmail.com',
//     //       'businessUnit': 'Human Resources',
//     //       'invitationSentDate': '21-JUN-19',
//     //       'createdDate': '21-JUN-19',
//     //       'createdBy': 'Matthew, Maturity',
//     //       'lastUpdatedDate': '21-JUN-19',
//     //       'noOfRooms': '4',
//     //       'housingType': 'Rents Apartment',
//     //       'noOfPeople': '3'
//     //     },
//     //     'authorizedAmount': 33850,
//     //     'spentAmount': '45,000 USD',
//     //     'departure': 'NY, New York',
//     //     'destination': 'NJ, Jersey City',
//     //     'status': 'Service Delivery Complete',
//     //     'lastUpdateDate': '05/20/2019',
//     //     'paymentReceived': 'YES',
//     //     'authorizedBy': 'Tom Jefferson',
//     //     'authorizedDate': '05/15/2019',
//     //     'authorizedClientName': 'Starbucks',
//     //     'createdBy': 'alpha_admin',
//     //     'createdDate': '05/06/2019',
//     //     'latestMilestone': 'Estimated Pack and Load on 2019-10-31',
//     //     'movePhase': 4,
//     //     'jobStartDate': '2019-11-10',
//     //     'remainingAmount': 15550
//     //   }
// };
/** stores mock candidate budgetdetails for pending payment*/
// export const candidateBudgetPendingMock: CandidateBudgetDetails = {
//     'coreBenefits': {
//         'budgetName': 'Core Services',
//         'budgetDesc': 'Core Services (Vanline move)',
//         'insuranceAmount': 149,
//         'bidAmount': 2999,
//         'minInsuredValue': 17276,
//         'budgetAmount': 3148
//     },
//     'flexSpend': [
//         {
//             'budgetName': 'travelToNewLocation',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 2419,
//             'budgetRangeMin': 878,
//             'budgetRangeMax': 3960
//         },
//         {
//             'budgetName': 'temporaryLiving',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 6476,
//             'budgetRangeMin': 2250,
//             'budgetRangeMax': 10702
//         },
//         {
//             'budgetName': 'homeFinding',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 8537,
//             'budgetRangeMin': 2997,
//             'budgetRangeMax': 14078
//         },
//         {
//             'budgetName': 'returnTripHome',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 1815,
//             'budgetRangeMin': 740,
//             'budgetRangeMax': 2890
//         },
//         {
//             'budgetName': 'otherMiscServices',
//             'budgetDesc': 'A cost estimate with minimum and maximum values',
//             'budgetAmount': 1170,
//             'budgetRangeMin': 472,
//             'budgetRangeMax': 1868
//         }
//     ],
//     'coreBudgetTotal': 3148,
//     'flexSpendTotal': 20417,
//     'grossUpRate': 0.4145,
//     'isTaxEnabled': true,
//     'UserBudget': 23565,
//     'candidate': {
//         'candidateId': '5db1b063a541ee0fe482a0b1',
//         'fullname': 'bhaskar, gururani',
//         'businessUnit': 'Developer',
//         'emailAddress': 'bhaskar.gurur@gmail.com',
//         'phoneNumber': '9089098789',
//         'departure': {
//             'fullAddress': 'Dallas, TX',
//             'streetAddress': '12 Passiac Avenue',
//             'city': 'Dallas',
//             'state': 'TX',
//             'zipcode': 'AH4876',
//             'country': 'USA'
//         },
//         'destination': {
//             'fullAddress': 'Danbury, CT',
//             'streetAddress': '4321',
//             'city': 'Danbury',
//             'state': 'CT',
//             'country': 'USA'
//         },
//         'status': 'Payment Pending',
//         'invitationSentDate': '2019-10-25T08:58:47.130Z',
//         'createdDate': '2019-10-25T08:58:47.100Z',
//         'createdBy': '5d8b16401c9d440000f9bdec',
//         'lastUpdatedDate': '2019-10-25T08:58:47.130Z',
//         'noOfRooms': '2',
//         'housingType': 'House',
//         'noOfPeople': '3',
//         'level': 'Level 1 (Over $150,000)',
//         'countryDialingCode': '+1'
//     },
//     'needsAssessment': {
//         'contactNumber': '7200415529',
//         'candidateId': '5db1b063a541ee0fe482a0b1',
//         'familyDetails': {
//             'noOfRelocatePeople': '3',
//             'familyRelocationStatus': 'yes'
//         },
//         'departureAddr': {
//             'fullAddress': '',
//             'streetAddress': '1234',
//             'city': 'Dallas',
//             'state': 'TX',
//             'zipcode': 'AH4876',
//             'country': 'USA'
//         },
//         'destinationAddr': {
//             'fullAddress': '',
//             'streetAddress': '4321',
//             'city': 'Danbury',
//             'state': 'CT',
//             'country': 'USA'
//         },
//         'residenceDetails': {
//             'noOfRooms': 2,
//             'homeType': 'House',
//             'ownerStatus': 'Own'
//         },
//         'estimatedMoveStartDate': '2019-10-18T00:00:00.000Z',
//         'estimatedMoveEndDate': '2019-12-18T00:00:00.000Z'
//     }
// };
/** stores budget chart values */
export const budgetChartMock = {
    'coreBenefitsTotal': 3148,
    'flexSpendTotal': 31372,
};
/** stores core benefits mock */
// export const coreBenefitsMock: CandidateCoreBenefits = {
//     coreBenefit: {
//         'budgetName': 'Core Services',
//         'budgetDesc': 'Core Services (Vanline move)',
//         'insuranceAmount': 149,
//         'bidAmount': 2999,
//         'minInsuredValue': 17276,
//         'budgetAmount': 3148
//     },
//     coreBenefitsTotal: 3148
// };
/** stores flex benefits mock */
export const flexBenefitsMock: CandidateFlexSpend = {
    flexSpend: [
        {
            'budgetName': 'Storage',
            'budgetDesc': 'Storage Line Item',
            'budgetAmount': 500,
            'budgetRangeMin': 0,
            'budgetRangeMax': 0
        },
        {
            'budgetName': 'travelToNewLocation',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 1322,
            'budgetRangeMin': 966,
            'budgetRangeMax': 1677
        },
        {
            'budgetName': 'temporaryLiving',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 9698,
            'budgetRangeMin': 6424,
            'budgetRangeMax': 12971
        },
        {
            'budgetName': 'homeFinding',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 1390,
            'budgetRangeMin': 798,
            'budgetRangeMax': 1982
        },
        {
            'budgetName': 'returnTripHome',
            'budgetDesc': 'A cost estimate with minimum and maximum values'
            , 'budgetAmount': 1152,
            'budgetRangeMin': 482,
            'budgetRangeMax': 1822
        },
        {
            'budgetName': 'otherMiscServices',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 9213,
            'budgetRangeMin': 6372,
            'budgetRangeMax': 12053
        }
    ],
    flexSpendTotal: 31372
};
/**stores data for linked list - move phase */
// export const dataSetMock: LinkedListData[] = [
//     {
//         value: '1',
//         status: true,
//         columns: [{
//             label: 'Authorized'
//         }]
//     },
//     {
//         value: '2',
//         status: false,
//         columns: [{
//             label: 'Preparing to Move'
//         }]
//     },
//     {
//         value: '3',
//         status: false,
//         columns: [{
//             label: 'Move in Progress'
//         }]
//     },
//     {
//         value: '4',
//         status: false,
//         columns: [{
//             label: 'Arriving in New Location'
//         }]
//     },
//     {
//         value: '5',
//         status: false,
//         columns: [{
//             label: 'Settled in New Location'
//         }]
//     }
// ];

/**stores move phase details as array */
export const movePhaseMock: MovePhase[] = [
    {
        phase: 'Authorized',
        status: true,
        order: 1,
        date: '2019-11-01T10:54:44.452Z',
        dateLabel: 'Payment Received Date'
    },
    {
        phase: 'Preparing to Move',
        status: true,
        order: 2,
        date: '2019-11-03T10:54:44.452Z',
        dateLabel: 'Load Date'
    },
    {
        phase: 'Move in Progress',
        status: true,
        order: 3,
        date: '2019-11-03T10:54:44.452Z',
        dateLabel: 'Load Date'
    },
    {
        phase: 'Arriving in New Location',
        status: false,
        order: 4,
        date: '2019-11-07T10:54:44.452Z',
        dateLabel: 'Delivery Date'
    },
    {
        phase: 'Settled in New Location',
        status: false,
        order: 5,
        date: '2019-11-09T10:54:44.452Z',
        dateLabel: 'Settled Date'
    }
];

/** stores INVOICE PDF DETAILS mock data */
export const INVOICE_PDF_DETAILS = {
    'clientContactName': 'Ragavendar, Narasimhan',
    'clientAddress': {
        'fullAddress': '',
        'streetAddress': '123 main street',
        'city': 'Danbury',
        'state': 'Connecticut',
        'zipcode': '06811',
        'country': 'United States'
    },
    'epInfo': [
        {
            '_id': '5dd149188ef0f139f854eab0',
            'bankName': 'BNY Mellon',
            'addrLine1': '500 Ross Street 154-0455',
            'addrLine2': 'Pittsburgh, PA 15262-0001',
            'aba_RoutingNumber': '043-000-261',
            'accountName': 'Cartus Corporation',
            'accountNumber': '009-1782',
            'swift_BICCode': 'IRVTUS3N'
        }
    ],
    'authorizedBy': 'Ragavendar, Narasimhan',
    'authorizedDate': '2019-11-18T07:03:04.106Z',
    'invoiceId': 'INV-123456',
    'invoiceDate': '2019-11-18T07:03:04.106Z',
    'moveOrderId': '5dd239073ec13e2090ed7356',
    'clientName': 'Mindtree Ltd.'
};

/** Cartus employees mock  */
export const cartusEmployeesMock = {
    employees: [
        {
            employeeId: '5db7e1f637c7c8041cbb9482',
            name: 'Zhao Qing',
            emailAddress: 'cristalle.szeto@cartus.com',
            roles: [
                {
                    key: 'cartus-account-manager',
                    roleName: 'Account Manager',
                    status: true
                },
                {
                    key: 'cartus-ccc-qa',
                    roleName: 'CCC QA',
                    status: false
                },
                {
                    key: 'cartus-ccc-specialist',
                    roleName: 'CCC Specialist',
                    status: false
                },
                {
                    key: 'cartus-account-auditor',
                    roleName: 'Operations Account Auditor',
                    status: false
                },
                {
                    key: 'cartus-rewards-coordinator',
                    roleName: 'Rewards Coordinator',
                    status: false
                }
            ]
        },
        {
            employeeId: '5db7e1f637c7c8041cbb9483',
            name: 'Maturity Mathew',
            emailAddress: 'maturity@cartus.com',
            roles: [
                {
                    key: 'cartus-account-manager',
                    roleName: 'Account Manager',
                    status: true
                },
                {
                    key: 'cartus-ccc-qa',
                    roleName: 'CCC QA',
                    status: true
                },
                {
                    key: 'cartus-ccc-specialist',
                    roleName: 'CCC Specialist',
                    status: false
                },
                {
                    key: 'cartus-account-auditor',
                    roleName: 'Operations Account Auditor',
                    status: false
                },
                {
                    key: 'cartus-rewards-coordinator',
                    roleName: 'Rewards Coordinator',
                    status: false
                }
            ]
        },
        {
            employeeId: '5db7e1f637c7c8041cbb9484',
            name: 'John Joseph',
            emailAddress: 'john.joseph@cartus.com',
            roles: [
                {
                    key: 'cartus-account-manager',
                    roleName: 'Account Manager',
                    status: false
                },
                {
                    key: 'cartus-ccc-qa',
                    roleName: 'CCC QA',
                    status: false
                },
                {
                    key: 'cartus-ccc-specialist',
                    roleName: 'CCC Specialist',
                    status: false
                },
                {
                    key: 'cartus-account-auditor',
                    roleName: 'Operations Account Auditor',
                    status: false
                },
                {
                    key: 'cartus-rewards-coordinator',
                    roleName: 'Rewards Coordinator',
                    status: false
                }
            ]
        },
        {
            employeeId: '5db7e1f637c7c8041cbb9485',
            name: 'Priya Warrier',
            emailAddress: 'priya.warrier@cartus.com',
            roles: [
                {
                    key: 'cartus-account-manager',
                    roleName: 'Account Manager',
                    status: true
                },
                {
                    key: 'cartus-ccc-qa',
                    roleName: 'CCC QA',
                    status: true
                },
                {
                    key: 'cartus-ccc-specialist',
                    roleName: 'CCC Specialist',
                    status: true
                },
                {
                    key: 'cartus-account-auditor',
                    roleName: 'Operations Account Auditor',
                    status: false
                },
                {
                    key: 'cartus-rewards-coordinator',
                    roleName: 'Rewards Coordinator',
                    status: false
                }
            ]
        },
        {
            employeeId: '5db7e1f637c7c8041cbb9486',
            name: 'Elon Musk',
            emailAddress: 'elon.musk@cartus.com',
            roles: [
                {
                    key: 'cartus-account-manager',
                    roleName: 'Account Manager',
                    status: true
                },
                {
                    key: 'cartus-ccc-qa',
                    roleName: 'CCC QA',
                    status: true
                },
                {
                    key: 'cartus-ccc-specialist',
                    roleName: 'CCC Specialist',
                    status: true
                },
                {
                    key: 'cartus-account-auditor',
                    roleName: 'Operations Account Auditor',
                    status: true
                },
                {
                    key: 'cartus-rewards-coordinator',
                    roleName: 'Rewards Coordinator',
                    status: true
                }
            ]
        },
        {
            employeeId: '5db7e1f637c7c8041cbb9487',
            name: 'Sundar Pichai',
            emailAddress: 'sundar.pichai@cartus.com',
            roles: [
                {
                    key: 'cartus-account-manager',
                    roleName: 'Account Manager',
                    status: true
                },
                {
                    key: 'cartus-ccc-qa',
                    roleName: 'CCC QA',
                    status: false
                },
                {
                    key: 'cartus-ccc-specialist',
                    roleName: 'CCC Specialist',
                    status: true
                },
                {
                    key: 'cartus-account-auditor',
                    roleName: 'Operations Account Auditor',
                    status: false
                },
                {
                    key: 'cartus-rewards-coordinator',
                    roleName: 'Rewards Coordinator',
                    status: false
                }
            ]
        }
    ],
    totalEmployee: 6
};
/**mock data for timeline of authorized Transferees */
export const timeline: Timeline[] = [
    {
        'serviceName': 'Job Start Date',
        'serviceDesc': 'This date is the date your company told us you begin working in your new location.',
        'startDate': null,
        'endDate': null,
        'serviceType': 'others',
        'sortOrder': 0,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Estimated Pack Date Range',
        'serviceDesc': `This is the date your move professionals will begin the process to
            document and pack your belongings. See FAQ for move details.`,
        'startDate': null,
        'endDate': null,
        'serviceType': 'estimated',
        'sortOrder': 0,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Estimated Load Date Range',
        'serviceDesc': 'This is the date your move professionals will load your belongings on the moving truck.',
        'startDate': '2019-12-14',
        'endDate': '2019-12-16',
        'serviceType': 'estimated',
        'sortOrder': 3,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Estimated Storage In Date Range',
        'serviceDesc': `This is the date your items arrive at the storage facility.
            Our van line partner can provide with the storage facility name and address.`,
        'startDate': '2019-12-20',
        'endDate': '2019-12-21',
        'serviceType': 'estimated',
        'sortOrder': 4,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Estimated Storage Out Date Range',
        'serviceDesc': 'This is the date your items will be taken out of storage for the final delivery to your new location.',
        'startDate': '2019-12-22',
        'endDate': '2019-12-23',
        'serviceType': 'estimated',
        'sortOrder': 5,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Estimated Delivery Date Range',
        'serviceDesc': `This is the date your household goods delivery is expected to arrive.
            Your move coordinator will confirm the actual delivery date. See FAQ for move details.`,
        'startDate': '2019-12-24',
        'endDate': '2019-12-30',
        'serviceType': 'estimated',
        'sortOrder': 6,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Actual Pack Date',
        'serviceDesc': `This is the date your move professionals will begin the process to
            document and pack your belongings. See FAQ for move details.`,
        'startDate': null,
        'endDate': '2019-12-13',
        'serviceType': 'actual',
        'sortOrder': 7,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Actual Load Date',
        'serviceDesc': 'This is the date your move professionals will load your belongings on the moving truck.',
        'startDate': null,
        'endDate': '2019-12-15',
        'serviceType': 'actual',
        'sortOrder': 8,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Actual Storage In Date',
        'serviceDesc': `This is the date your items arrive at the storage facility.
            Our van line partner can provide with the storage facility name and address.`,
        'startDate': null,
        'endDate': '2019-12-21',
        'serviceType': 'actual',
        'sortOrder': 9,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Actual Storage Out Date',
        'serviceDesc': 'This is the date your items will be taken out of storage for the final delivery to your new location.',
        'startDate': null,
        'endDate': '2019-12-23',
        'serviceType': 'actual',
        'sortOrder': 10,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Actual Delivery Date',
        'serviceDesc': `This is the date your household goods delivery is expected to arrive.
            Your move coordinator will confirm the actual delivery date. See FAQ for move details.`,
        'startDate': null,
        'endDate': '2019-12-27',
        'serviceType': 'actual',
        'sortOrder': 11,
        'isActualAvailable': true
    },
    {
        'serviceName': 'Service Delivery Complete',
        'serviceDesc': `This is the date your household goods delivery is expected to arrive.
            Your move coordinator will confirm the actual delivery date. See FAQ for move details.`,
        'startDate': null,
        'endDate': '2019-12-30',
        'serviceType': 'others',
        'sortOrder': 12,
        'isActualAvailable': true
    }
];
/**stores mock data for approved moves */
export const approveMovesList: ApprovedMove[] = [
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '1111',
            fullname: 'Maturity, Matthew',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Austin',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Austin'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'mathew.maturity@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Human Resources',
            invitationSentDate: '21-JUN-19',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '2',
            countryDialingCode: '+1'
        },
        authorizedAmt: 33850,
        status: 'Authorized',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Tom Jefferson',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-11-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: true,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: true,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: false,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-10-10',
        remainingAmt: 10000
    },
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '2222',
            fullname: 'Beal, Christopher',
            level: 'Level 1 (Over $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Atlanta',
                state: 'GA',
                zipcode: null,
                fullAddress: 'GA, Atlanta'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Dallas',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Dallas'
            },
            status: 'Ready for Review',
            isAssessmentReceived: true,
            emailAddress: 'chris.beal@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Finance',
            invitationSentDate: '9-APR-19',
            createdDate: '9-APR-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '2-MAY-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        authorizedAmt: 20000,
        status: 'Move in Progress',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Tom Jefferson',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-10-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: true,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: true,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: true,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-11-10',
        remainingAmt: 5000
    },
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '3333',
            fullname: 'Goulet, Dan',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Jersey City',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Jersey City'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'San Francisco',
                state: 'CA',
                zipcode: null,
                fullAddress: 'CA, San Francisco'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'dan.goulet@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Engineering',
            invitationSentDate: '12-JAN-19',
            createdDate: '8-JAN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '25-JAN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '2',
            countryDialingCode: '+1'
        },
        authorizedAmt: 17000,
        status: 'Authorized',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Tom Jefferson',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-10-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: false,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: false,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: false,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-10-10',
        remainingAmt: 8000

    },
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '4444',
            fullname: 'Cordon, James',
            level: 'Level 3 (Below $75,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Philadelphia',
                state: 'PA',
                zipcode: null,
                fullAddress: 'PA, Philadelphia'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Austin',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Austin'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'j.cordon@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Engineering',
            invitationSentDate: '28-JAN-19',
            createdDate: '23-JAN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '30-JAN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        authorizedAmt: 20000,
        status: 'HHG Booked',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Tom Jefferson',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-10-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: true,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: false,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: false,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-11-10',
        remainingAmt: 10000

    },
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '5555',
            fullname: 'Hayes, Francesca',
            level: 'Level 1 (Over $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Austin',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Austin'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'francesca.hayes@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Accounting',
            invitationSentDate: '22-FEB-19',
            createdDate: '2-FEB-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '23-MAR-19',
            noOfRooms: '6',
            housingType: 'Rents Apartment',
            noOfPeople: '2',
            countryDialingCode: '+1'
        },
        authorizedAmt: 15000,
        status: 'Authorized',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Nagarajan, Anandhi',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-10-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: true,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: true,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: false,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-11-10',
        remainingAmt: 10000

    },
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '6666',
            fullname: 'Hu, Adam',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Austin',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Austin'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'adam.hu@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Marketing',
            invitationSentDate: '21-JUN-19',
            createdDate: '21-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '21-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '3',
            countryDialingCode: '+1'
        },
        authorizedAmt: 50000,
        status: 'Move in Progress',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Nagarajan, Anandhi',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-10-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: true,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: false,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: false,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-11-10',
        remainingAmt: 10000

    },
    {
        transfereeId: '21312',
        candidate: {
            candidateId: '7777',
            fullname: 'Jones, Suehong',
            level: 'Level 2 ($75,000 - $150,000)',
            departure: {
                country: 'USA',
                streetAddress: null,
                city: 'Nutley',
                state: 'NJ',
                zipcode: null,
                fullAddress: 'NJ, Nutley'
            },
            destination: {
                country: 'USA',
                streetAddress: null,
                city: 'Austin',
                state: 'TX',
                zipcode: null,
                fullAddress: 'TX, Austin'
            },
            status: 'Invitation Not Sent',
            isAssessmentReceived: false,
            emailAddress: 'suehong.jones@gmail.com',
            phoneNumber: '9089098908',
            businessUnit: 'Human Resources',
            invitationSentDate: '2-JUN-19',
            createdDate: '2-JUN-19',
            createdBy: 'Matthew, Maturity',
            lastUpdatedDate: '20-JUN-19',
            noOfRooms: '4',
            housingType: 'Rents Apartment',
            noOfPeople: '4',
            countryDialingCode: '+1'
        },
        authorizedAmt: 30000,
        status: 'HHG Booked',
        lastUpdatedDate: '05/20/2019',
        authorizedBy: 'Nagarajan, Anandhi',
        authorizedDate: '05/15/2019',
        latestMilestone: 'Estimated Pack and Load on 2019-10-31',
        movePhase: [
            {
                phase: 'Authorized',
                status: true,
                order: 1,
                date: '2019-11-01T10:54:44.452Z',
                dateLabel: 'Payment Received Date'
            },
            {
                phase: 'Preparing to Move',
                status: false,
                order: 2,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Move in Progress',
                status: false,
                order: 3,
                date: '2019-11-03T10:54:44.452Z',
                dateLabel: 'Load Date'
            },
            {
                phase: 'Arriving in New Location',
                status: false,
                order: 4,
                date: '2019-11-07T10:54:44.452Z',
                dateLabel: 'Delivery Date'
            },
            {
                phase: 'Settled in New Location',
                status: false,
                order: 5,
                date: '2019-11-09T10:54:44.452Z',
                dateLabel: 'Settled Date'
            }],
        jobStartDate: '2019-10-10',
        remainingAmt: 10000
    }
];
/** Response Mock when Roles are updated */
export const cartusEmployeeRoleUpdateResponseMock: APIResponse = {
    statusCode: 200,
    description: 'Updated Employee Roles Successfully'
};
/** employee mock to send in dialog */
export const employeeMock = {
    employeeId: '5db7e1f637c7c8041cbb9482',
    roles: [
        {
            key: 'cartus-account-manager',
            roleName: 'Account Manager',
            status: false
        },
        {
            key: 'cartus-ccc-qa',
            roleName: 'CCC QA',
            status: false
        },
        {
            key: 'cartus-ccc-specialist',
            roleName: 'CCC Specialist',
            status: false
        },
        {
            key: 'cartus-account-auditor',
            roleName: 'Operations Account Auditor',
            status: false
        },
        {
            key: 'cartus-rewards-coordinator',
            roleName: 'Rewards Coordinator',
            status: false
        },
        {
            key: 'cartus-security-administrator',
            roleName: 'Security Administrator',
            status: false
        }
    ]
};

export const relocationOffer: RelocationOfferInfo = {
    candidateFullName: 'mohan',
    clientName: 'Mindtree Ltd',
    bussinessUnit: '',
    depature: 'Danbury, CT',
    destination: 'Newyork NT',
    coreBudget: '10,000 USD',
    flexBudget: '11,000 USD',
    moveBudget: '22,000 USD',
    totalMoveBuget: '22,000 USD',
    recommendedBudget: '22,000 USD',
    taxinfo: 'tax info',
    flexSpend: [
        {
            'budgetName': 'Storage',
            'budgetDesc': 'Storage Line Item',
            'budgetAmount': 500,
            'budgetRangeMin': 0,
            'budgetRangeMax': 0
        },
        {
            'budgetName': 'Travel to New Location',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 2419,
            'budgetRangeMin': 878,
            'budgetRangeMax': 3960
        },
        {
            'budgetName': 'Temporary Living',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 6476,
            'budgetRangeMin': 2250,
            'budgetRangeMax': 10702
        },
        {
            'budgetName': 'Home Finding',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 8537,
            'budgetRangeMin': 2997,
            'budgetRangeMax': 14078
        },
        {
            'budgetName': 'Return Trip Home',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 1815,
            'budgetRangeMin': 740,
            'budgetRangeMax': 2890
        },
        {
            'budgetName': 'Other Misc Services',
            'budgetDesc': 'A cost estimate with minimum and maximum values',
            'budgetAmount': 1170,
            'budgetRangeMin': 472,
            'budgetRangeMax': 1868
        }
    ],
    taxAmount: '0 USD'
};
/** stores mock data for authorize move dialog */
export const authorizeMockData = {
    candidateName: 'Mathew Maturity',
    isTaxEnabled: true,
    taxAmount: 12345,
    clientContactId: clientContactIDMock,
    candidateID: candidateIDMock,
    coreBenefits: 18300,
    flexSpend: 15550,
    amountDue: 32800,
    invoiceDetails: INVOICE_PDF_DETAILS
};
/**employee details mock */
export const employeeDetailsMock = {
    status: 200,
    statusText: 'OK',
    url: 'https://alphaapitst01.cartus.com/client/employeeDetails?sortField=name&sortDir=ASC&limit=20',
    ok: true,
    type: 4,
    body: {
        totalEmployees: 2,
        employees: [
            {
                clientId: '5dcf100073f701819e97d883',
                employeeId: '5de2dc7a65236577b92d18fd',
                name: 'CCCSpecialist2FN, CCCSpecialist2LN',
                emailAddress: 'cccspecialist2@cartus.com',
                roles: [
                    {
                        key: 'cartus-account-manager',
                        roleName: 'Account Manager',
                        status: true
                    },
                    {
                        key: 'cartus-security-administrator',
                        roleName: 'Security Administrator',
                        status: true
                    }
                ]
            },
            {
                clientId: '5dcf100073f701819e97d883',
                employeeId: '5de2dbce65236577b92c81cb',
                name: 'CCCSpecialist1FN, CCCSpecialist1LN',
                emailAddress: 'cccspecialist1@cartus.com',
                roles: [
                    {
                        key: 'cartus-account-manager',
                        roleName: 'Account Manager',
                        status: true
                    },
                    {
                        key: 'cartus-security-administrator',
                        roleName: 'Security Administrator',
                        status: true
                    }
                ]
            }
        ]
    }
};
/** employee details Service Mock */
export const EmployeeDetailsServiceMock = {
    getEmployeeDetailsQueryString: 'clientContactId=5de2cd7d65236577b9223541&sortField=fullname&sortDir=ASC&limit=20'
};
/**role capability mock */
export const roleCapabilityMock = {
    partyRoles: [
        {
            name: 'client-contact-administrator',
            associatedParty: '5de08d19a8554a2266114ff6',
            fromDate: '2019-11-29T12:57:12.448Z'
        },
        {
            name: 'client-contact',
            associatedParty: '5de08d19a8554a2266114ff6',
            fromDate: '2019-11-29T12:57:12.448Z'
        }
    ],
    roleCapabilities: [{
        roleName: 'client-contact-administrator',
        capabilities: [
            {
                name: 'Self Registration',
                operation: 'write',
                permission: 'allow'
            },
            {
                name: 'Cost Models All',
                operation: 'write',
                permission: 'allow'
            },
            {
                name: 'Manage Candidates/Transferees All',
                operation: 'write',
                permission: 'allow'
            },
            {
                name: 'View Destination',
                operation: 'write',
                permission: 'allow'
            }
        ]
    }]
};
/**approved move list mock */
export const approvedMovesListMock = {
    status: 200,
    statusText: 'OK',
    url: 'https://alphaapitst01.cartus.com/candidate/authorizeTransferee?clientContactId=5de2cd7d65236577b9223541&limit=20',
    ok: true,
    type: 4,
    body: {
        totalApprovedMove: 99,
        approvedMoves: [
            {
                transfereeId: '21312',
                candidate: {
                    candidateId: '3333',
                    fullname: 'Goulet, Dan',
                    level: 'Level 2 ($75,000 - $150,000)',
                    departure: {
                        country: 'USA',
                        streetAddress: null,
                        city: 'Jersey City',
                        state: 'NJ',
                        zipcode: null,
                        fullAddress: 'NJ, Jersey City'
                    },
                    destination: {
                        country: 'USA',
                        streetAddress: null,
                        city: 'San Francisco',
                        state: 'CA',
                        zipcode: null,
                        fullAddress: 'CA, San Francisco'
                    },
                    status: 'Invitation Not Sent',
                    isAssessmentReceived: false,
                    emailAddress: 'dan.goulet@gmail.com',
                    phoneNumber: '9089098908',
                    businessUnit: 'Engineering',
                    invitationSentDate: '12-JAN-19',
                    createdDate: '8-JAN-19',
                    createdBy: 'Matthew, Maturity',
                    lastUpdatedDate: '25-JAN-19',
                    noOfRooms: '4',
                    housingType: 'Rents Apartment',
                    noOfPeople: '2'
                },
                authorizedAmt: 23565,
                status: 'Authorized',
                lastUpdatedDate: '05/20/2019',
                authorizedBy: 'Tom Jefferson',
                authorizedDate: '05/15/2019',
                latestMilestone: 'Estimated Pack and Load on 2019-10-31',
                movePhase: [
                    {
                        phase: 'Authorized',
                        status: true,
                        order: 1,
                        date: '2019-11-01T10:54:44.452Z',
                        dateLabel: 'Payment Received Date'
                    },
                    {
                        phase: 'Preparing to Move',
                        status: true,
                        order: 2,
                        date: '2019-11-03T10:54:44.452Z',
                        dateLabel: 'Load Date'
                    },
                    {
                        phase: 'Move in Progress',
                        status: true,
                        order: 3,
                        date: '2019-11-03T10:54:44.452Z',
                        dateLabel: 'Load Date'
                    },
                    {
                        phase: 'Arriving in New Location',
                        status: false,
                        order: 4,
                        date: '2019-11-07T10:54:44.452Z',
                        dateLabel: 'Delivery Date'
                    },
                    {
                        phase: 'Settled in New Location',
                        status: false,
                        order: 5,
                        date: '2019-11-09T10:54:44.452Z',
                        dateLabel: 'Settled Date'
                    }],
                jobStartDate: '2019-11-10',
                remainingAmt: 20417

            },
            {
                transfereeId: '21312',
                candidate: {
                    candidateId: '3333',
                    fullname: 'Mathew Maturity',
                    level: 'Level 2 ($75,000 - $150,000)',
                    departure: {
                        country: 'USA',
                        streetAddress: null,
                        city: 'Jersey City',
                        state: 'NJ',
                        zipcode: null,
                        fullAddress: 'NJ, Jersey City'
                    },
                    destination: {
                        country: 'USA',
                        streetAddress: null,
                        city: 'San Francisco',
                        state: 'CA',
                        zipcode: null,
                        fullAddress: 'CA, San Francisco'
                    },
                    status: 'Invitation Not Sent',
                    isAssessmentReceived: false,
                    emailAddress: 'dan.goulet@gmail.com',
                    phoneNumber: '9089098908',
                    businessUnit: 'Engineering',
                    invitationSentDate: '12-JAN-19',
                    createdDate: '8-JAN-19',
                    createdBy: 'Matthew, Maturity',
                    lastUpdatedDate: '25-JAN-19',
                    noOfRooms: '4',
                    housingType: 'Rents Apartment',
                    noOfPeople: '2'
                },
                authorizedAmt: 23565,
                status: 'Authorized',
                lastUpdatedDate: '05/20/2019',
                authorizedBy: 'Tom Jefferson',
                authorizedDate: '05/15/2019',
                latestMilestone: 'Estimated Pack and Load on 2019-10-31',
                movePhase: [
                    {
                        phase: 'Authorized',
                        status: true,
                        order: 1,
                        date: '2019-11-01T10:54:44.452Z',
                        dateLabel: 'Payment Received Date'
                    },
                    {
                        phase: 'Preparing to Move',
                        status: true,
                        order: 2,
                        date: '2019-11-03T10:54:44.452Z',
                        dateLabel: 'Load Date'
                    },
                    {
                        phase: 'Move in Progress',
                        status: true,
                        order: 3,
                        date: '2019-11-03T10:54:44.452Z',
                        dateLabel: 'Load Date'
                    },
                    {
                        phase: 'Arriving in New Location',
                        status: false,
                        order: 4,
                        date: '2019-11-07T10:54:44.452Z',
                        dateLabel: 'Delivery Date'
                    },
                    {
                        phase: 'Settled in New Location',
                        status: false,
                        order: 5,
                        date: '2019-11-09T10:54:44.452Z',
                        dateLabel: 'Settled Date'
                    }],
                jobStartDate: '2019-11-10',
                remainingAmt: 20417

            }
        ]
    }
};

export const approvedMovesServiceMock = {
    queryString: 'skip=0&limit=20&clientContactId=5de2cd7d65236577b9223541',
    candidateId: '5e131025c9f1d193b169c8b7',
    clientContactId: '5de2ce0865236577b92287a6',
    pageSize: 20,
    skipRecords: 0,
    authTransfereeAllDetailsMock: {
        'totalApprovedMove': 101,
        'approvedMoves': [
            {
                'candidate': {
                    'candidateId': '5e045639b35b1770ea348cc8',
                    'fullname': 'Jack, sparrow',
                    'partyType': 'person',
                    'emailAddress': 'Mohanakrishnan.Ashokan@mobilitydba.com',
                    'phoneNumber': '9789508229',
                    'departure': {
                        'fullAddress': 'Denber, CO',
                        'streetAddress': '156 main street',
                        'city': 'Denber',
                        'state': 'CO',
                        'zipcode': '1111',
                        'country': 'USA'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'test candidate',
                    'invitationSentDate': '12/26/2019, 12:12:26 PM',
                    'createdDate': '2019-12-26T06:42:02.027Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-26T08:08:34.580Z',
                    'noOfRooms': 3,
                    'housingType': 'House',
                    'noOfPeople': 4,
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-26T18:30:00.000Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-26T18:30:00.000Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e045639b35b1770ea348cc8',
                'authorizedAmt': '27805',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-26T08:08:34.580Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-26T08:08:34.580Z',
                'latestMilestone': '2019-12-26T18:30:00.000Z',
                'jobStartDate': '2019-12-26T18:30:00.000Z',
                'remainingAmt': '27805'
            },
            {
                'candidate': {
                    'candidateId': '5e05b2bc47aeb8500cb46a2b',
                    'fullname': 'Brenna, Reinger',
                    'partyType': 'person',
                    'emailAddress': 'Albin_Flatley14@hotmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T07:29:05.095Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:29:33.355Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:29:32.990Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:29:32.990Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b2bc47aeb8500cb46a2b',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:29:33.355Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:29:33.355Z',
                'latestMilestone': '2019-12-27T07:29:32.990Z',
                'jobStartDate': '2019-12-27T07:29:32.990Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b2dc47aeb89d39b46a2d',
                    'fullname': 'Luna, Bode',
                    'partyType': 'person',
                    'emailAddress': 'Stefanie_Glover@yahoo.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T07:29:33.638Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:29:55.789Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:29:55.441Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:29:55.441Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b2dc47aeb89d39b46a2d',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:29:55.789Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:29:55.789Z',
                'latestMilestone': '2019-12-27T07:29:55.441Z',
                'jobStartDate': '2019-12-27T07:29:55.441Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b2e247aeb8aa1eb46a2e',
                    'fullname': 'Susan, Zemlak',
                    'partyType': 'person',
                    'emailAddress': 'Imelda_Bednar@gmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T07:29:38.791Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:30:00.217Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:29:59.865Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:29:59.865Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b2e247aeb8aa1eb46a2e',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:30:00.217Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:30:00.217Z',
                'latestMilestone': '2019-12-27T07:29:59.865Z',
                'jobStartDate': '2019-12-27T07:29:59.865Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b2f847aeb865deb46a30',
                    'fullname': 'O\'Kon, Dino',
                    'partyType': 'person',
                    'emailAddress': 'Vladimir_Larkin53@hotmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T07:30:01.383Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:32:17.330Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:32:16.962Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:32:16.962Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b2f847aeb865deb46a30',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:32:17.330Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:32:17.330Z',
                'latestMilestone': '2019-12-27T07:32:16.962Z',
                'jobStartDate': '2019-12-27T07:32:16.962Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b2fc47aeb8299fb46a31',
                    'fullname': 'Ayden, McGlynn',
                    'partyType': 'person',
                    'emailAddress': 'Lauryn45@gmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T07:30:05.286Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:32:22.349Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:32:21.994Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:32:21.994Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b2fc47aeb8299fb46a31',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:32:22.349Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:32:22.349Z',
                'latestMilestone': '2019-12-27T07:32:21.994Z',
                'jobStartDate': '2019-12-27T07:32:21.994Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b37447aeb8cfa1b46a33',
                    'fullname': 'Retha, Hermiston',
                    'partyType': 'person',
                    'emailAddress': 'Ima_Trantow41@gmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T07:32:04.958Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:32:21.757Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:32:21.423Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:32:21.423Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b37447aeb8cfa1b46a33',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:32:21.757Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:32:21.757Z',
                'latestMilestone': '2019-12-27T07:32:21.423Z',
                'jobStartDate': '2019-12-27T07:32:21.423Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b3e447aeb838a4b46a39',
                    'fullname': 'Georgiana, Rau',
                    'partyType': 'person',
                    'emailAddress': 'Myles13@gmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T07:33:56.534Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:34:16.213Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 1 (Over 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:34:15.861Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:34:15.861Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b3e447aeb838a4b46a39',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:34:16.213Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:34:16.213Z',
                'latestMilestone': '2019-12-27T07:34:15.861Z',
                'jobStartDate': '2019-12-27T07:34:15.861Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b45447aeb8d173b46a3e',
                    'fullname': 'Paris, Medhurst',
                    'partyType': 'person',
                    'emailAddress': 'Muhammad.OReilly@yahoo.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T07:35:49.197Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:36:05.474Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:36:05.119Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:36:05.119Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b45447aeb8d173b46a3e',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:36:05.474Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:36:05.474Z',
                'latestMilestone': '2019-12-27T07:36:05.119Z',
                'jobStartDate': '2019-12-27T07:36:05.119Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05b46f47aeb86844b46a3f',
                    'fullname': 'Melany, Feil',
                    'partyType': 'person',
                    'emailAddress': 'Adah.Turcotte@gmail.com',
                    'phoneNumber': '9876456587',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T07:36:16.311Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T07:36:17.299Z',
                    'noOfRooms': 1,
                    'housingType': null,
                    'level': 'Level 1 (Over 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T07:36:16.954Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T07:36:16.954Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05b46f47aeb86844b46a3f',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T07:36:17.299Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T07:36:17.299Z',
                'latestMilestone': '2019-12-27T07:36:16.954Z',
                'jobStartDate': '2019-12-27T07:36:16.954Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05c97aad58a453047b730e',
                    'fullname': 'Frederick, MacGyver',
                    'partyType': 'person',
                    'emailAddress': 'Merl.Johnson@hotmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T09:06:03.292Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T09:07:12.423Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 1 (Over 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T09:07:24.989Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T09:07:24.989Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05c97aad58a453047b730e',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T09:07:12.423Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T09:07:12.423Z',
                'latestMilestone': '2019-12-27T09:07:24.989Z',
                'jobStartDate': '2019-12-27T09:07:24.989Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05cc87ad58a4e42f7b7310',
                    'fullname': 'Hilton, Abshire',
                    'partyType': 'person',
                    'emailAddress': 'Lea.Dibbert@gmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T09:19:04.287Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T09:20:05.299Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T09:20:18.417Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T09:20:18.417Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05cc87ad58a4e42f7b7310',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T09:20:05.299Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T09:20:05.299Z',
                'latestMilestone': '2019-12-27T09:20:18.417Z',
                'jobStartDate': '2019-12-27T09:20:18.417Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05d43953b019f21eba53c5',
                    'fullname': 'Alene, Von',
                    'partyType': 'person',
                    'emailAddress': 'Christelle_Schowalter96@yahoo.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T09:51:59.279Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T09:52:38.678Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T09:52:35.232Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T09:52:35.232Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05d43953b019f21eba53c5',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T09:52:38.678Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T09:52:38.678Z',
                'latestMilestone': '2019-12-27T09:52:35.232Z',
                'jobStartDate': '2019-12-27T09:52:35.232Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05d51c53b0190ddcba53c8',
                    'fullname': 'Adolf, Homenick',
                    'partyType': 'person',
                    'emailAddress': 'Arlie.Volkman@gmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T09:55:41.225Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T09:55:58.758Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T09:55:58.178Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T09:55:58.178Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05d51c53b0190ddcba53c8',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T09:55:58.758Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T09:55:58.758Z',
                'latestMilestone': '2019-12-27T09:55:58.178Z',
                'jobStartDate': '2019-12-27T09:55:58.178Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05d5ca53b01936d4ba53cd',
                    'fullname': 'Daniella, Lang',
                    'partyType': 'person',
                    'emailAddress': 'Mariah.Lind@yahoo.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T09:58:34.648Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T09:58:50.105Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T09:58:49.565Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T09:58:49.565Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05d5ca53b01936d4ba53cd',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T09:58:50.105Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T09:58:50.105Z',
                'latestMilestone': '2019-12-27T09:58:49.565Z',
                'jobStartDate': '2019-12-27T09:58:49.565Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05d5e353b0191af1ba53ce',
                    'fullname': 'Gwendolyn, Larson',
                    'partyType': 'person',
                    'emailAddress': 'Marielle97@gmail.com',
                    'phoneNumber': '9876456587',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'businessUnit': 'Testing',
                    'createdDate': '2019-12-27T09:59:00.312Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T09:59:01.841Z',
                    'noOfRooms': 1,
                    'housingType': null,
                    'level': 'Level 1 (Over 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T09:59:01.369Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T09:59:01.369Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05d5e353b0191af1ba53ce',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T09:59:01.841Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T09:59:01.841Z',
                'latestMilestone': '2019-12-27T09:59:01.369Z',
                'jobStartDate': '2019-12-27T09:59:01.369Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05db5553b01977f6ba53d5',
                    'fullname': 'Oda, Walsh',
                    'partyType': 'person',
                    'emailAddress': 'Herminia22@yahoo.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T10:22:15.899Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T10:24:35.229Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-27T10:24:48.443Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-27T10:24:48.443Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05db5553b01977f6ba53d5',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T10:24:35.229Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T10:24:35.229Z',
                'latestMilestone': '2019-12-27T10:24:48.443Z',
                'jobStartDate': '2019-12-27T10:24:48.443Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e05deb70ad2d819372bd709',
                    'fullname': 'Brycen, Prohaska',
                    'partyType': 'person',
                    'emailAddress': 'Ignatius.Kuphal93@hotmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-27T10:36:40.088Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-27T11:27:22.130Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-30T18:30:00.000Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-30T18:30:00.000Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e05deb70ad2d819372bd709',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-27T11:27:22.130Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-27T11:27:22.130Z',
                'latestMilestone': '2019-12-30T18:30:00.000Z',
                'jobStartDate': '2019-12-30T18:30:00.000Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e08cc24f555924b2f3310ab',
                    'fullname': 'Jeramie, Dare',
                    'partyType': 'person',
                    'emailAddress': 'Leonard_Hickle@hotmail.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-29T15:54:13.137Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-29T15:56:30.434Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-29T15:56:45.914Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-29T15:56:45.914Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e08cc24f555924b2f3310ab',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-29T15:56:30.434Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-29T15:56:30.434Z',
                'latestMilestone': '2019-12-29T15:56:45.914Z',
                'jobStartDate': '2019-12-29T15:56:45.914Z',
                'remainingAmt': '5000'
            },
            {
                'candidate': {
                    'candidateId': '5e0981ac49af0a76861cb695',
                    'fullname': 'Yazmin, Klein',
                    'partyType': 'person',
                    'emailAddress': 'Eli86@yahoo.com',
                    'phoneNumber': '8147207290',
                    'departure': {
                        'fullAddress': 'Minto, ND',
                        'city': 'Minto',
                        'state': 'ND'
                    },
                    'destination': {
                        'fullAddress': 'Danbury, CT',
                        'city': 'Danbury',
                        'state': 'CT'
                    },
                    'status': 'Authorized',
                    'createdDate': '2019-12-30T04:48:45.962Z',
                    'createdBy': 'ClientContactAdmin1FN, ClientContactAdmin1LN',
                    'lastUpdatedDate': '2019-12-30T04:49:31.877Z',
                    'noOfRooms': '1',
                    'housingType': 'House',
                    'noOfPeople': '2',
                    'level': 'Level 2 (75,000 - 150,000 USD)',
                    'clientId': '5de08d19a8554a2266114ff6'
                },
                'movePhase': [
                    {
                        'order': 1,
                        'phase': 'Authorized',
                        'status': true,
                        'date': '2019-12-30T04:49:49.388Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 2,
                        'phase': 'Preparing to Move',
                        'status': true,
                        'date': '2019-12-30T04:49:49.388Z',
                        'dateLabel': 'Job Start Date'
                    },
                    {
                        'order': 3,
                        'phase': 'Move in Progress',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 4,
                        'phase': 'Arriving in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    },
                    {
                        'order': 5,
                        'phase': 'Settled in New Location',
                        'status': false,
                        'date': null,
                        'dateLabel': null
                    }
                ],
                'transfereeId': '5e0981ac49af0a76861cb695',
                'authorizedAmt': '5000',
                'status': 'Authorized',
                'lastUpdatedDate': '2019-12-30T04:49:31.877Z',
                'authorizedBy': '5de2cd7d65236577b9223541',
                'authorizedDate': '2019-12-30T04:49:31.877Z',
                'latestMilestone': '2019-12-30T04:49:49.388Z',
                'jobStartDate': '2019-12-30T04:49:49.388Z',
                'remainingAmt': '5000'
            }
        ]
    },
    authTransfereeDetailsMock: {
        'coreBenefits': {
            'budgetName': 'Core Services',
            'budgetDesc': 'Core Services (Vanline move)',
            'insuranceAmount': 455,
            'bidAmount': 5000,
            'budgetAmount': 2305
        },
        'flexSpend': [
            {
                'budgetName': 'Storage',
                'budgetDesc': 'Storage Line Item',
                'budgetAmount': 500,
                'budgetRangeMin': 0,
                'budgetRangeMax': 0
            },
            {
                'budgetName': 'travelToNewLocation',
                'budgetDesc': 'A cost estimate with minimum and maximum values',
                'budgetAmount': 1322,
                'budgetRangeMin': 966,
                'budgetRangeMax': 1677
            },
            {
                'budgetName': 'temporaryLiving',
                'budgetDesc': 'A cost estimate with minimum and maximum values',
                'budgetAmount': 9698,
                'budgetRangeMin': 6424,
                'budgetRangeMax': 12971
            },
            {
                'budgetName': 'homeFinding',
                'budgetDesc': 'A cost estimate with minimum and maximum values',
                'budgetAmount': 1390,
                'budgetRangeMin': 798,
                'budgetRangeMax': 1982
            },
            {
                'budgetName': 'returnTripHome',
                'budgetDesc': 'A cost estimate with minimum and maximum values',
                'budgetAmount': 1152,
                'budgetRangeMin': 482,
                'budgetRangeMax': 1822
            },
            {
                'budgetName': 'otherMiscServices',
                'budgetDesc': 'A cost estimate with minimum and maximum values',
                'budgetAmount': 9213,
                'budgetRangeMin': 6372,
                'budgetRangeMax': 12053
            }
        ],
        'coreBudgetTotal': 2305,
        'flexSpendTotal': 23275,
        'grossUpRate': 0.6567263088137841,
        'isTaxEnabled': 'true',
        'UserBudget': '5000',
        'candidate': {
            'candidateId': '5e131025c9f1d193b169c8b7',
            'fullname': 'Eudora, Zemlak',
            'partyType': 'person',
            'emailAddress': 'Amelie_Haag@gmail.com',
            'phoneNumber': '8147207290',
            'departure': {
                'fullAddress': 'Minto, ND',
                'city': 'Minto',
                'state': 'ND'
            },
            'destination': {
                'fullAddress': 'Danbury, CT',
                'city': 'Danbury',
                'state': 'CT'
            },
            'status': 'Authorized',
            'createdDate': '2020-01-06T10:47:01.496Z',
            'createdBy': '5de2cd7d65236577b9223541',
            'lastUpdatedDate': '2020-01-06T10:48:21.233Z',
            'noOfRooms': '1',
            'housingType': 'House',
            'noOfPeople': '2',
            'level': 'Level 2 (75,000 - 150,000 USD)',
            'clientId': '5de08d19a8554a2266114ff6'
        },
        'needsAssessment': {
            'contactNumber': '8147207290',
            'candidateId': '5e131025c9f1d193b169c8b7',
            'familyDetails': {
                'noOfRelocatePeople': '2',
                'familyRelocationStatus': 'Yes'
            },
            'departureAddr': {
                'city': 'Minto',
                'state': 'ND'
            },
            'destinationAddr': {
                'city': 'Danbury',
                'state': 'CT'
            },
            'residenceDetails': {
                'noOfRooms': '1',
                'homeType': 'House',
                'ownerStatus': 'Own'
            },
            'estimatedMoveStartDate': '12-12-2018',
            'estimatedMoveEndDate': '12-12-2019'
        },
        'approvedMoves': {
            'candidate': {
                'candidateId': '5e131025c9f1d193b169c8b7',
                'fullname': 'Eudora, Zemlak',
                'partyType': 'person',
                'emailAddress': 'Amelie_Haag@gmail.com',
                'phoneNumber': '8147207290',
                'departure': {
                    'fullAddress': 'Minto, ND',
                    'city': 'Minto',
                    'state': 'ND'
                },
                'destination': {
                    'fullAddress': 'Danbury, CT',
                    'city': 'Danbury',
                    'state': 'CT'
                },
                'status': 'Authorized',
                'createdDate': '2020-01-06T10:47:01.496Z',
                'createdBy': '5de2cd7d65236577b9223541',
                'lastUpdatedDate': '2020-01-06T10:48:21.233Z',
                'noOfRooms': '1',
                'housingType': 'House',
                'noOfPeople': '2',
                'level': 'Level 2 (75,000 - 150,000 USD)',
                'clientId': '5de08d19a8554a2266114ff6'
            },
            'movePhase': [
                {
                    'order': 1,
                    'phase': 'Authorized',
                    'status': true,
                    'date': '2020-01-06T10:48:19.960Z',
                    'dateLabel': 'Job Start Date'
                },
                {
                    'order': 2,
                    'phase': 'Preparing to Move',
                    'status': true,
                    'date': '2020-01-06T10:48:19.960Z',
                    'dateLabel': 'Job Start Date'
                },
                {
                    'order': 3,
                    'phase': 'Move in Progress',
                    'status': false,
                    'date': null,
                    'dateLabel': null
                },
                {
                    'order': 4,
                    'phase': 'Arriving in New Location',
                    'status': false,
                    'date': null,
                    'dateLabel': null
                },
                {
                    'order': 5,
                    'phase': 'Settled in New Location',
                    'status': false,
                    'date': null,
                    'dateLabel': null
                }
            ],
            'transfereeId': '5e131025c9f1d193b169c8b7',
            'authorizedAmt': '5000',
            'status': 'Authorized',
            'lastUpdatedDate': '2020-01-06T10:48:21.233Z',
            'authorizedBy': '5de2cd7d65236577b9223541',
            'authorizedDate': '2020-01-06T10:48:21.233Z',
            'latestMilestone': '2020-01-06T10:48:19.960Z',
            'jobStartDate': '2020-01-06T10:48:19.960Z',
            'remainingAmt': '5000'
        },
        'timelineDetails': [
            {
                'serviceName': 'Service Delivery Complete',
                'serviceDesc': '',
                'startDate': null,
                'endDate': null,
                'serviceType': 'others',
                'sortOrder': 0,
                'isActualAvailable': true
            },
            {
                'serviceName': 'Job Start Date',
                'serviceDesc': 'The Job Start Date of Customer',
                'startDate': null,
                'endDate': '2020-01-06T10:48:19.960Z',
                'serviceType': 'others',
                'sortOrder': 1,
                'isActualAvailable': true
            },
            {
                'serviceName': 'Actual Delivery Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual delivery dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'actual',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Estimated Delivery Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual delivery dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'estimated',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Actual Storage-Out Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual Storage-Out dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'actual',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Estimated Storage-Out Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual Storage-Out dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'estimated',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Actual Storage-In Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual Storage-In dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'actual',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Estimated Storage-In Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual Storage-In dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'estimated',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Actual Load Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual load dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'actual',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Estimated Load Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual load dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'estimated',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Actual Pack Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual pack dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'actual',
                'sortOrder': 0,
                'isActualAvailable': false
            },
            {
                'serviceName': 'Estimated Pack Dates',
                'serviceDesc': 'The estimated start, estimated end, and actual pack dates',
                'startDate': null,
                'endDate': null,
                'serviceType': 'estimated',
                'sortOrder': 0,
                'isActualAvailable': false
            }
        ]
    } as unknown as CandidateBudgetDetails,
    authTransfereeAllFinanceDetailsMock: {
        totalApprovedMove: 1,
        approvedMoves:
            [{
                candidate: [Object],
                clientName: undefined,
                movePhase: [Array],
                orderReference: 'MOV-9jm737m',
                auditStatus: 'Incomplete',
                auditStatusDate: '2020-01-08',
                transfereeId: '5e131025c9f1d193b169c8b7',
                authorizedAmt: '5000',
                status: 'Authorized',
                lastUpdatedDate: '2020-01-06T10:48:21.233Z',
                authorizedBy: '5de2cd7d65236577b9223541',
                authorizedDate: '2020-01-06T10:48:21.233Z',
                latestMilestone: '2019-11-09T10:54:44.452Z',
                jobStartDate: '2020-01-06T10:48:19.960Z',
                remainingAmt: '5000'
            }]
    }
};

export const candidateProfileServiceMock = {
    partyId: '5de2cd7d65236577b9223541',
    getCandidateProfilesQueryString: 'clientContactId=5de2cd7d65236577b9223541&sortField=fullname&sortDir=ASC&limit=20',
    roleCapabilities: {
        partyRoles: [{
            name: 'candidate',
            associatedParty: '5d8b16401c9d440000f9bdec',
            fromDate: '2019-11-13T06:33:28.918Z',
            toDate: '2019-11-13T06:33:40.733Z'
        }, {
            name: 'transferee',
            associatedParty: '5d8b16401c9d440000f9bdec',
            fromDate: '2019-11-13T06:33:48.436Z'
        }],
        roleCapabilities: [{
            roleName: 'candidate',
            capabilities: [{
                name: 'Alpha Client Portal',
                operation: 'read',
                permission: 'allow'
            }]
        }]
    }
};

export const encRoleCapabilities = {
    // tslint:disable-next-line: max-line-length
    partyRoles: 'eyJpdiI6IjliZjFhNDc4Y2FlOWY1YzY3NmVlYjc0MDNlYTI2M2FiIiwiZW5jcnlwdGVkRGF0YSI6ImYyNTUzYTE5NzM2NDkzMmRhNzg1NjZmOWNiZmI4NzY1ZDA4MzUzMTMyM2U2MjE2OWYxZjc1YmYwMDk1YWQ5ZDA1OGI1NTg5ODZkNzNmNDYyNWI5YTAyNjNkZTkxMzA2OGNjMWU4MzQ0N2NkOWVmMjFmZjAxOTAyMGYyZGMxMjAyMWQ2N2M2OTdiNTgyYWI3OTI0Yzk0YmVlZDdhZWU5MDg0MzFmOGI2Yjk0OGFmMmJhNDkwMzRmM2JhZWZiMWM4NDk3YzU2ZjQxNmNmOGY3OTQyOGVkZmZiMTdkOWJjM2MwNDcwMDM0Mjg5MGNhY2IzMzNmM2JkMTMxZThiNGUwYTcxZjZmYzMzYTllYzJlMjZiYjI0NzIyNTA2YjcxMjU2ZDgxZmM1OTczYzJjOGI4YjU5MTJmNWE5MzlkZWU5NjFmZmNmOGVmMGVlNTU1MTg5YjcwNjgxNjNiM2MxYTE0Y2Y3ZTgzMGRkMWMyOGJmMjViNGFiZjhlOTM2YmRmMGFiYThhYmFmNGJhZWNhMzYxMzE2ZWRlMDViYmJkYzU5YzY2MWRmZWJmZDgxOWEwM2E3YjA2YTJiZWQxNDVjNDcxMmNkMzlmNGI3NmRjYjU3NWFlYmMzNDQ5NDM3Y2Y0ZWJkMDBiZTM3MTVlODk2Nzc1MWU0NWExMGNlNThiZjVhZmFhNzQ2OWNmNGRmYjE4MDM1MzUzNjZlZmNkMmI2ZjRlOTc2NTJhN2U0YzVhY2UzNzI5MjFlMWE1ZmY0MjYzODNhZjhmMDNjYzgzYzMxMWEzNDliMDMzZjJlYmVhZjFiNGMyZmY3OTM5NDk2ZWQ1YjA1Mzk1NTRmMjUxNzQzZDYwYThhNzljZDE1MjNmMTY5MWZjODY1MmYwZmUzOWIyOTg3NWFiMzc5YzI5OTdjNTI1NTYxNzUwOGE1M2EyYzRiNWUyNjY4OGNiOTU3NzU3YTU5MDkzZjhmMGJkYjRiNzc2YWMyM2FlMDlhOGVhNmIyNzY5NmEwYWU5YmEzYzMyZTY2ZWYyZjJjYTc1ODEyNjNhMGE1YWU4YzJhNjhiOWExN2RkMzE2MzY4YTAxNTE2NTAyMjJkOTU2MjcwYWNlMDRlNTk5MTA1MjE5YzNhNTQ4NWM3YmIxOTkwZWQ4NzQxOTQ2YWJkZTMzMjNiNGRmNDQwYjExYzg3OWRjMmM2YTcyMzc1ODY4OTcxNGM2YzE0NTlmMmQ2MmQ4MGE4Mjg2N2M4YjUwNTFlMGRkYzRjYTU0ZWVhZjE4OGIyYzVmNTE3YjMwY2UyYzJjOTYyZTE5Nzg4MjVmZjQyMTljMWY5YWRhMDQxOTUwZjJjNDhlZmZlYzMwN2Q0MjQzZjlmOWJjOWYzYTgifQ=='
};

// export const costModelServiceMock = {
//     queryStringCostModel: 'clientContactId=5de2cd7d65236577b9223541&sortField=updatedDate&sortDir=DESC&limit=20',
//     getCostModelMock: {
//         'costmodels': [
//             {
//                 'costModelName': 'TestsaveCostModel22',
//                 'costModelId': '5e0634b3b812d08f428b2a0c',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 9638,
//                             'estimatedSubTotalMinimumCost': 4498
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 10729,
//                             'estimatedSubTotalMaximumCost': 41347
//                         },
//                         'estimatedTotalMaximumCost': 50985,
//                         'estimatedTotalMinimumCost': 15227
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 17089,
//                             'estimatedSubTotalMinimumCost': 7638
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 16317,
//                             'estimatedSubTotalMaximumCost': 51979
//                         },
//                         'estimatedTotalMaximumCost': 69068,
//                         'estimatedTotalMinimumCost': 23955
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 22784,
//                             'estimatedSubTotalMinimumCost': 11746
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 17383,
//                             'estimatedSubTotalMaximumCost': 61696
//                         },
//                         'estimatedTotalMaximumCost': 84480,
//                         'estimatedTotalMinimumCost': 29129
//                     }
//                 ],
//                 'taxGrossRate': 0.7322016282695307,
//                 'destState': 'NY',
//                 'destCity': 'New York',
//                 'deptState': 'TX',
//                 'deptCity': 'Dallas',
//                 'level': 'Level 1 (Over 150,000 USD)',
//                 'createdDate': '2019-12-27T16:43:31.896Z',
//                 'updatedDate': '2019-12-27T16:45:10.665Z'
//             },
//             {
//                 'costModelName': 'CS07F',
//                 'costModelId': '5e0664de2180121b21393080',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 7650,
//                             'estimatedSubTotalMinimumCost': 3752
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 6340,
//                             'estimatedSubTotalMaximumCost': 27320
//                         },
//                         'estimatedTotalMaximumCost': 34970,
//                         'estimatedTotalMinimumCost': 10092
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 14673,
//                             'estimatedSubTotalMinimumCost': 7033
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11057,
//                             'estimatedSubTotalMaximumCost': 36541
//                         },
//                         'estimatedTotalMaximumCost': 51214,
//                         'estimatedTotalMinimumCost': 18090
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 19594,
//                             'estimatedSubTotalMinimumCost': 10369
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 12117,
//                             'estimatedSubTotalMaximumCost': 41444
//                         },
//                         'estimatedTotalMaximumCost': 61038,
//                         'estimatedTotalMinimumCost': 22486
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TN',
//                 'destCity': 'Nashville',
//                 'deptState': 'TX',
//                 'deptCity': 'Dallas',
//                 'level': 'Level 1 (Over 150,000 USD)',
//                 'createdDate': '2019-12-27T20:09:02.012Z',
//                 'updatedDate': '2019-12-27T20:09:07.387Z'
//             },
//             {
//                 'costModelName': 'CS712',
//                 'costModelId': '5e066ad064333f684cc74712',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 7625,
//                             'estimatedSubTotalMinimumCost': 3458
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 5004,
//                             'estimatedSubTotalMaximumCost': 26843
//                         },
//                         'estimatedTotalMaximumCost': 34468,
//                         'estimatedTotalMinimumCost': 8462
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 14366,
//                             'estimatedSubTotalMinimumCost': 6735
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 7276,
//                             'estimatedSubTotalMaximumCost': 33583
//                         },
//                         'estimatedTotalMaximumCost': 47949,
//                         'estimatedTotalMinimumCost': 14011
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 19302,
//                             'estimatedSubTotalMinimumCost': 10087
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9773,
//                             'estimatedSubTotalMaximumCost': 40539
//                         },
//                         'estimatedTotalMaximumCost': 59841,
//                         'estimatedTotalMinimumCost': 19860
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TN',
//                 'destCity': 'Nashville',
//                 'deptState': 'MO',
//                 'deptCity': 'Kansas City',
//                 'level': 'Level 1 (Over 150,000 USD)',
//                 'createdDate': '2019-12-27T20:34:21.652Z',
//                 'updatedDate': '2019-12-28T08:28:08.884Z'
//             },
//             {
//                 'costModelName': 'CS349',
//                 'costModelId': '5e07139e32d8107770fdc349',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 8839,
//                             'estimatedSubTotalMinimumCost': 3645
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 5242,
//                             'estimatedSubTotalMaximumCost': 21628
//                         },
//                         'estimatedTotalMaximumCost': 30467,
//                         'estimatedTotalMinimumCost': 8887
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 16048,
//                             'estimatedSubTotalMinimumCost': 6488
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 6144,
//                             'estimatedSubTotalMaximumCost': 28763
//                         },
//                         'estimatedTotalMaximumCost': 44811,
//                         'estimatedTotalMinimumCost': 12632
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20815,
//                             'estimatedSubTotalMinimumCost': 10333
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9840,
//                             'estimatedSubTotalMaximumCost': 36967
//                         },
//                         'estimatedTotalMaximumCost': 57782,
//                         'estimatedTotalMinimumCost': 20173
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'NV',
//                 'destCity': 'Vegas',
//                 'deptState': 'TX',
//                 'deptCity': 'Dallas',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-28T08:34:38.219Z',
//                 'updatedDate': '2019-12-28T08:34:50.343Z'
//             },
//             {
//                 'costModelName': 'Dev test',
//                 'costModelId': '5e07142b32d8101c08fdc34c',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 7933,
//                             'estimatedSubTotalMinimumCost': 2405
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 6500,
//                             'estimatedSubTotalMaximumCost': 23135
//                         },
//                         'estimatedTotalMaximumCost': 31068,
//                         'estimatedTotalMinimumCost': 8905
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 14802,
//                             'estimatedSubTotalMinimumCost': 4676
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9926,
//                             'estimatedSubTotalMaximumCost': 31338
//                         },
//                         'estimatedTotalMaximumCost': 46140,
//                         'estimatedTotalMinimumCost': 14602
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 19128,
//                             'estimatedSubTotalMinimumCost': 7507
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 13107,
//                             'estimatedSubTotalMaximumCost': 40033
//                         },
//                         'estimatedTotalMaximumCost': 59161,
//                         'estimatedTotalMinimumCost': 20614
//                     }
//                 ],
//                 'taxGrossRate': 0.5943877551020409,
//                 'destState': 'CO',
//                 'destCity': 'Denver',
//                 'deptState': 'CT',
//                 'deptCity': 'Danbury',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-28T08:36:59.281Z',
//                 'updatedDate': '2019-12-28T08:37:12.434Z'
//             },
//             {
//                 'costModelName': 'CS12',
//                 'costModelId': '5e0716da7def02eda8627638',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 7177,
//                             'estimatedSubTotalMinimumCost': 3314
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9499,
//                             'estimatedSubTotalMaximumCost': 28516
//                         },
//                         'estimatedTotalMaximumCost': 35693,
//                         'estimatedTotalMinimumCost': 12813
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 13012,
//                             'estimatedSubTotalMinimumCost': 5550
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11667,
//                             'estimatedSubTotalMaximumCost': 38313
//                         },
//                         'estimatedTotalMaximumCost': 51325,
//                         'estimatedTotalMinimumCost': 17217
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 17331,
//                             'estimatedSubTotalMinimumCost': 8591
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 16865,
//                             'estimatedSubTotalMaximumCost': 48703
//                         },
//                         'estimatedTotalMaximumCost': 66034,
//                         'estimatedTotalMinimumCost': 25456
//                     }
//                 ],
//                 'taxGrossRate': 0.7322016282695307,
//                 'destState': 'NY',
//                 'destCity': 'New York',
//                 'deptState': 'TX',
//                 'deptCity': 'Dallas',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-10-28T08:48:24.020Z',
//                 'updatedDate': '2020-01-03T06:17:35.645Z'
//             },
//             {
//                 'costModelName': 'Cost Model 1',
//                 'costModelId': '5e07299a2a7b8281262ffdaf',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 5152,
//                             'estimatedSubTotalMinimumCost': 2183
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 5697,
//                             'estimatedSubTotalMaximumCost': 19266
//                         },
//                         'estimatedTotalMaximumCost': 24418,
//                         'estimatedTotalMinimumCost': 7880
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 9660,
//                             'estimatedSubTotalMinimumCost': 4294
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 7887,
//                             'estimatedSubTotalMaximumCost': 24149
//                         },
//                         'estimatedTotalMaximumCost': 33809,
//                         'estimatedTotalMinimumCost': 12181
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 14642,
//                             'estimatedSubTotalMinimumCost': 8194
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 7608,
//                             'estimatedSubTotalMaximumCost': 26984
//                         },
//                         'estimatedTotalMaximumCost': 41626,
//                         'estimatedTotalMinimumCost': 15802
//                     }
//                 ],
//                 'taxGrossRate': 0.7137960582690659,
//                 'destState': 'OR',
//                 'destCity': 'Boardman',
//                 'deptState': 'OR',
//                 'deptCity': 'Portland',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-28T10:08:26.306Z',
//                 'updatedDate': '2019-12-28T10:08:38.740Z'
//             },
//             {
//                 'costModelName': 'Cost Model 2',
//                 'costModelId': '5e084e4772e454620237ce58',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 6627,
//                             'estimatedSubTotalMinimumCost': 2371
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8797,
//                             'estimatedSubTotalMaximumCost': 25853
//                         },
//                         'estimatedTotalMaximumCost': 32480,
//                         'estimatedTotalMinimumCost': 11168
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 12549,
//                             'estimatedSubTotalMinimumCost': 4582
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 12826,
//                             'estimatedSubTotalMaximumCost': 35290
//                         },
//                         'estimatedTotalMaximumCost': 47839,
//                         'estimatedTotalMinimumCost': 17408
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 16803,
//                             'estimatedSubTotalMinimumCost': 6844
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 14398,
//                             'estimatedSubTotalMaximumCost': 41742
//                         },
//                         'estimatedTotalMaximumCost': 58545,
//                         'estimatedTotalMinimumCost': 21242
//                     }
//                 ],
//                 'taxGrossRate': 0.6460905349794239,
//                 'destState': 'CA',
//                 'destCity': 'San Francisco',
//                 'deptState': 'WA',
//                 'deptCity': 'Leavenworth',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-29T06:57:08.719Z',
//                 'updatedDate': '2019-12-29T06:57:39.347Z'
//             },
//             {
//                 'costModelName': 'Real one',
//                 'costModelId': '5e09b8684d07942ebbf4cb2b',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 5470,
//                             'estimatedSubTotalMinimumCost': 2540
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 4977,
//                             'estimatedSubTotalMaximumCost': 14672
//                         },
//                         'estimatedTotalMaximumCost': 20142,
//                         'estimatedTotalMinimumCost': 7517
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 10504,
//                             'estimatedSubTotalMinimumCost': 4730
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 7106,
//                             'estimatedSubTotalMaximumCost': 20234
//                         },
//                         'estimatedTotalMaximumCost': 30738,
//                         'estimatedTotalMinimumCost': 11836
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 13555,
//                             'estimatedSubTotalMinimumCost': 7033
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9390,
//                             'estimatedSubTotalMaximumCost': 25902
//                         },
//                         'estimatedTotalMaximumCost': 39457,
//                         'estimatedTotalMinimumCost': 16423
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TN',
//                 'destCity': 'Memphis',
//                 'deptState': 'FL',
//                 'deptCity': 'Heathrow',
//                 'level': 'Level 3 (Less than 75,000 USD)',
//                 'createdDate': '2019-12-30T08:42:16.165Z',
//                 'updatedDate': '2019-12-30T08:42:22.055Z'
//             },
//             {
//                 'costModelName': '4fbQMo6noo',
//                 'costModelId': '5e0a2c8017ad178d1142825a',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2cd7d65236577b9223541',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 5187,
//                             'estimatedSubTotalMinimumCost': 2034
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 4208,
//                             'estimatedSubTotalMaximumCost': 13824
//                         },
//                         'estimatedTotalMaximumCost': 19011,
//                         'estimatedTotalMinimumCost': 6242
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 10012,
//                             'estimatedSubTotalMinimumCost': 3736
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 5820,
//                             'estimatedSubTotalMaximumCost': 19352
//                         },
//                         'estimatedTotalMaximumCost': 29364,
//                         'estimatedTotalMinimumCost': 9556
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 13033,
//                             'estimatedSubTotalMinimumCost': 5944
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8205,
//                             'estimatedSubTotalMaximumCost': 25917
//                         },
//                         'estimatedTotalMaximumCost': 38950,
//                         'estimatedTotalMinimumCost': 14149
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TN',
//                 'destCity': 'Memphis',
//                 'deptState': 'TX',
//                 'deptCity': 'Texas City',
//                 'level': 'Level 3 (Less than 75,000 USD)',
//                 'createdDate': '2019-12-30T16:57:36.397Z',
//                 'updatedDate': '2019-12-30T16:57:43.627Z'
//             },
//             {
//                 'costModelName': 'Sample Model',
//                 'costModelId': '5e0a49bd39a6002d6e422b01',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 11261,
//                             'estimatedSubTotalMinimumCost': 4525
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8932,
//                             'estimatedSubTotalMaximumCost': 26829
//                         },
//                         'estimatedTotalMaximumCost': 38090,
//                         'estimatedTotalMinimumCost': 13457
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20171,
//                             'estimatedSubTotalMinimumCost': 8752
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 10441,
//                             'estimatedSubTotalMaximumCost': 33846
//                         },
//                         'estimatedTotalMaximumCost': 54017,
//                         'estimatedTotalMinimumCost': 19193
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 24740,
//                             'estimatedSubTotalMinimumCost': 12296
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11994,
//                             'estimatedSubTotalMaximumCost': 40055
//                         },
//                         'estimatedTotalMaximumCost': 64795,
//                         'estimatedTotalMinimumCost': 24290
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'NYC',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:02:21.643Z',
//                 'updatedDate': '2019-12-30T19:02:25.490Z'
//             },
//             {
//                 'costModelName': 'QA3 Offshore',
//                 'costModelId': '5e0a4b4c39a60050f7422b05',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 8803,
//                             'estimatedSubTotalMinimumCost': 3168
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9221,
//                             'estimatedSubTotalMaximumCost': 26647
//                         },
//                         'estimatedTotalMaximumCost': 35450,
//                         'estimatedTotalMinimumCost': 12389
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 15841,
//                             'estimatedSubTotalMinimumCost': 5769
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11228,
//                             'estimatedSubTotalMaximumCost': 34025
//                         },
//                         'estimatedTotalMaximumCost': 49866,
//                         'estimatedTotalMinimumCost': 16997
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20617,
//                             'estimatedSubTotalMinimumCost': 9415
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 12879,
//                             'estimatedSubTotalMaximumCost': 40278
//                         },
//                         'estimatedTotalMaximumCost': 60895,
//                         'estimatedTotalMinimumCost': 22294
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'New York',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-10-31T19:09:00.408Z',
//                 'updatedDate': '2019-10-31T19:09:03.671Z'
//             },
//             {
//                 'costModelName': 'Test Model Name',
//                 'costModelId': '5e0a4b7039a600c3d2422b07',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 8803,
//                             'estimatedSubTotalMinimumCost': 3168
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9221,
//                             'estimatedSubTotalMaximumCost': 26647
//                         },
//                         'estimatedTotalMaximumCost': 35450,
//                         'estimatedTotalMinimumCost': 12389
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 15841,
//                             'estimatedSubTotalMinimumCost': 5769
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11228,
//                             'estimatedSubTotalMaximumCost': 34025
//                         },
//                         'estimatedTotalMaximumCost': 49866,
//                         'estimatedTotalMinimumCost': 16997
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20617,
//                             'estimatedSubTotalMinimumCost': 9415
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 12879,
//                             'estimatedSubTotalMaximumCost': 40278
//                         },
//                         'estimatedTotalMaximumCost': 60895,
//                         'estimatedTotalMinimumCost': 22294
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'New York',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:09:36.755Z',
//                 'updatedDate': '2019-12-30T19:09:39.713Z'
//             },
//             {
//                 'costModelName': 'Sample Model',
//                 'costModelId': '5e0a4b8539a6003097422b08',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 11261,
//                             'estimatedSubTotalMinimumCost': 4525
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8932,
//                             'estimatedSubTotalMaximumCost': 26829
//                         },
//                         'estimatedTotalMaximumCost': 38090,
//                         'estimatedTotalMinimumCost': 13457
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20171,
//                             'estimatedSubTotalMinimumCost': 8752
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 10441,
//                             'estimatedSubTotalMaximumCost': 33846
//                         },
//                         'estimatedTotalMaximumCost': 54017,
//                         'estimatedTotalMinimumCost': 19193
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 24740,
//                             'estimatedSubTotalMinimumCost': 12296
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11994,
//                             'estimatedSubTotalMaximumCost': 40055
//                         },
//                         'estimatedTotalMaximumCost': 64795,
//                         'estimatedTotalMinimumCost': 24290
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'NYC',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:09:57.260Z',
//                 'updatedDate': '2019-12-30T19:10:00.569Z'
//             },
//             {
//                 'costModelName': 'QA3 Offshore',
//                 'costModelId': '5e0a4e1139a600719e422b0c',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 11261,
//                             'estimatedSubTotalMinimumCost': 4525
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8932,
//                             'estimatedSubTotalMaximumCost': 26829
//                         },
//                         'estimatedTotalMaximumCost': 38090,
//                         'estimatedTotalMinimumCost': 13457
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20171,
//                             'estimatedSubTotalMinimumCost': 8752
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 10441,
//                             'estimatedSubTotalMaximumCost': 33846
//                         },
//                         'estimatedTotalMaximumCost': 54017,
//                         'estimatedTotalMinimumCost': 19193
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 24740,
//                             'estimatedSubTotalMinimumCost': 12296
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11994,
//                             'estimatedSubTotalMaximumCost': 40055
//                         },
//                         'estimatedTotalMaximumCost': 64795,
//                         'estimatedTotalMinimumCost': 24290
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'NYC',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:20:49.785Z',
//                 'updatedDate': '2019-12-30T19:20:53.414Z'
//             },
//             {
//                 'costModelName': 'Test Model Name',
//                 'costModelId': '5e0a4e3c39a600b896422b0e',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 8643,
//                             'estimatedSubTotalMinimumCost': 3571
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 6316,
//                             'estimatedSubTotalMaximumCost': 22205
//                         },
//                         'estimatedTotalMaximumCost': 30848,
//                         'estimatedTotalMinimumCost': 9887
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 15610,
//                             'estimatedSubTotalMinimumCost': 6266
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9451,
//                             'estimatedSubTotalMaximumCost': 30348
//                         },
//                         'estimatedTotalMaximumCost': 45958,
//                         'estimatedTotalMinimumCost': 15717
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20561,
//                             'estimatedSubTotalMinimumCost': 9563
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 12673,
//                             'estimatedSubTotalMaximumCost': 38489
//                         },
//                         'estimatedTotalMaximumCost': 59050,
//                         'estimatedTotalMinimumCost': 22236
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'WA',
//                 'destCity': 'Tacoma',
//                 'deptState': 'NY',
//                 'deptCity': 'New York',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:21:32.872Z',
//                 'updatedDate': '2019-12-30T19:21:35.688Z'
//             },
//             {
//                 'costModelName': 'Sample Model',
//                 'costModelId': '5e0a4e5139a600df3f422b0f',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 11261,
//                             'estimatedSubTotalMinimumCost': 4525
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8932,
//                             'estimatedSubTotalMaximumCost': 26829
//                         },
//                         'estimatedTotalMaximumCost': 38090,
//                         'estimatedTotalMinimumCost': 13457
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20171,
//                             'estimatedSubTotalMinimumCost': 8752
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 10441,
//                             'estimatedSubTotalMaximumCost': 33846
//                         },
//                         'estimatedTotalMaximumCost': 54017,
//                         'estimatedTotalMinimumCost': 19193
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 24740,
//                             'estimatedSubTotalMinimumCost': 12296
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11994,
//                             'estimatedSubTotalMaximumCost': 40055
//                         },
//                         'estimatedTotalMaximumCost': 64795,
//                         'estimatedTotalMinimumCost': 24290
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'NYC',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:21:53.513Z',
//                 'updatedDate': '2019-12-30T19:21:56.574Z'
//             },
//             {
//                 'costModelName': 'QA3 Offshore',
//                 'costModelId': '5e0a4f3039a600c832422b13',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 11261,
//                             'estimatedSubTotalMinimumCost': 4525
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8932,
//                             'estimatedSubTotalMaximumCost': 26829
//                         },
//                         'estimatedTotalMaximumCost': 38090,
//                         'estimatedTotalMinimumCost': 13457
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20171,
//                             'estimatedSubTotalMinimumCost': 8752
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 10441,
//                             'estimatedSubTotalMaximumCost': 33846
//                         },
//                         'estimatedTotalMaximumCost': 54017,
//                         'estimatedTotalMinimumCost': 19193
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 24740,
//                             'estimatedSubTotalMinimumCost': 12296
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11994,
//                             'estimatedSubTotalMaximumCost': 40055
//                         },
//                         'estimatedTotalMaximumCost': 64795,
//                         'estimatedTotalMinimumCost': 24290
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'NYC',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:25:35.999Z',
//                 'updatedDate': '2019-12-30T19:25:39.113Z'
//             },
//             {
//                 'costModelName': 'Test Model Name',
//                 'costModelId': '5e0a4f5839a600d652422b15',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 10291,
//                             'estimatedSubTotalMinimumCost': 4193
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 5219,
//                             'estimatedSubTotalMaximumCost': 22171
//                         },
//                         'estimatedTotalMaximumCost': 32462,
//                         'estimatedTotalMinimumCost': 9412
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 19215,
//                             'estimatedSubTotalMinimumCost': 8563
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 8650,
//                             'estimatedSubTotalMaximumCost': 30074
//                         },
//                         'estimatedTotalMaximumCost': 49289,
//                         'estimatedTotalMinimumCost': 17213
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 24436,
//                             'estimatedSubTotalMinimumCost': 12151
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11615,
//                             'estimatedSubTotalMaximumCost': 38207
//                         },
//                         'estimatedTotalMaximumCost': 62643,
//                         'estimatedTotalMinimumCost': 23766
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'WA',
//                 'destCity': 'Tacoma',
//                 'deptState': 'NY',
//                 'deptCity': 'NYC',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:26:16.750Z',
//                 'updatedDate': '2019-12-30T19:26:19.488Z'
//             },
//             {
//                 'costModelName': 'Sample Model',
//                 'costModelId': '5e0a4f6d39a600694a422b16',
//                 'clientId': '5de08d19a8554a2266114ff6',
//                 'clientContactId': '5de2ce0865236577b92287a6',
//                 'costEstimates': [
//                     {
//                         'familySize': 1,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 8803,
//                             'estimatedSubTotalMinimumCost': 3168
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 9221,
//                             'estimatedSubTotalMaximumCost': 26647
//                         },
//                         'estimatedTotalMaximumCost': 35450,
//                         'estimatedTotalMinimumCost': 12389
//                     },
//                     {
//                         'familySize': 2,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 15841,
//                             'estimatedSubTotalMinimumCost': 5769
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 11228,
//                             'estimatedSubTotalMaximumCost': 34025
//                         },
//                         'estimatedTotalMaximumCost': 49866,
//                         'estimatedTotalMinimumCost': 16997
//                     },
//                     {
//                         'familySize': 4,
//                         'coreServices': {
//                             'estimatedSubTotalMaximumCost': 20617,
//                             'estimatedSubTotalMinimumCost': 9415
//                         },
//                         'flexServices': {
//                             'estimatedSubTotalMinimumCost': 12879,
//                             'estimatedSubTotalMaximumCost': 40278
//                         },
//                         'estimatedTotalMaximumCost': 60895,
//                         'estimatedTotalMinimumCost': 22294
//                     }
//                 ],
//                 'taxGrossRate': 0.48478099480326653,
//                 'destState': 'TX',
//                 'destCity': 'Texas City',
//                 'deptState': 'NY',
//                 'deptCity': 'New York',
//                 'level': 'Level 2 (75,000 - 150,000 USD)',
//                 'createdDate': '2019-12-30T19:26:37.608Z',
//                 'updatedDate': '2019-12-30T19:26:40.713Z'
//             }
//         ],
//         'totalCostModel': 134
//     },
//     createCostModel: {
//         costModelName: 'Cost Model 1',
//         costModelId: '123456789123456789123456',
//         clientId: '5d8b15c81c9d440000f9bdea',
//         clientContactId: '5d8b16401c9d440000f9bdec',
//         costEstimates: [
//             {
//                 familySize: 1,
//                 estimatedTotalMaximumCost: 444444,
//                 estimatedTotalMinimumCost: 333333,
//                 coreServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 },
//                 flexServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 }
//             } as CostEstimate
//         ],
//         taxGrossRate: '100.00',
//         destCity: 'Danbury',
//         destState: 'CT',
//         deptCity: 'Dallas',
//         deptState: 'TX',
//         level: 'Level 1 (Over $150,000)',
//         createdDate: new Date('2019-10-23T06:12:07.597Z'),
//         updatedDate: new Date('2019-10-19T20:48:12.901Z')
//     } as unknown as CostModel,
//     createCostModelResponse: {
//         costModelName: 'Cost Model 1',
//         costModelId: '123456789123456789123456',
//         clientId: '5d8b15c81c9d440000f9bdea',
//         clientContactId: '5d8b16401c9d440000f9bdec',
//         costEstimates: [
//             {
//                 familySize: 1,
//                 estimatedTotalMaximumCost: 444444,
//                 estimatedTotalMinimumCost: 333333,
//                 coreServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 },
//                 flexServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 }
//             } as CostEstimate
//         ],
//         taxGrossRate: '100.00',
//         destCity: 'Danbury',
//         destState: 'CT',
//         deptCity: 'Dallas',
//         deptState: 'TX',
//         level: 'Level 1 (Over $150,000)',
//         createdDate: '2019-10-23T06:12:07.597Z',
//         updatedDate: '2019-10-19T20:48:12.901Z'
//     },
//     saveCostModel: {
//         costModelName: 'Cost Model 1',
//         costModelId: '123456789123456789123456',
//         clientId: '5d8b15c81c9d440000f9bdea',
//         clientContactId: '5d8b16401c9d440000f9bdec',
//         costEstimates: [
//             {
//                 familySize: 1,
//                 estimatedTotalMaximumCost: 444444,
//                 estimatedTotalMinimumCost: 333333,
//                 coreServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 },
//                 flexServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 }
//             } as CostEstimate
//         ],
//         taxGrossRate: '100.00',
//         destCity: 'Danbury',
//         destState: 'CT',
//         deptCity: 'Dallas',
//         deptState: 'TX',
//         level: 'Level 1 (Over $150,000)',
//         createdDate: new Date('2019-10-23T06:12:07.597Z'),
//         updatedDate: new Date('2019-10-19T20:48:12.901Z')
//     } as unknown as CostModel,
//     saveCostModelResponse: {
//         costModelName: 'Cost Model 1',
//         costModelId: '123456789123456789123456',
//         clientId: '5d8b15c81c9d440000f9bdea',
//         clientContactId: '5d8b16401c9d440000f9bdec',
//         costEstimates: [
//             {
//                 familySize: 1,
//                 estimatedTotalMaximumCost: 444444,
//                 estimatedTotalMinimumCost: 333333,
//                 coreServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 },
//                 flexServices: {
//                     estimatedSubTotalMaximumCost: 14078,
//                     estimatedSubTotalMinimumCost: 2997
//                 }
//             } as CostEstimate
//         ],
//         taxGrossRate: '100.00',
//         destCity: 'Danbury',
//         destState: 'CT',
//         deptCity: 'Dallas',
//         deptState: 'TX',
//         level: 'Level 1 (Over $150,000)',
//         createdDate: '2019-10-23T06:12:07.597Z',
//         updatedDate: '2019-10-19T20:48:12.901Z'
//     },
//     costModelIdMock: '5d8b16401c9d440000f9bdec',
//     deleteDetails: {
//         clientContactId: '5d8b16401c9d440000f9bdec',
//         costModelId: ['5da82221945f2b568cb71a0b']
//     },
//     deleteResp: {
//         description: 'Cost Models deleted successfully'
//     }
// };

















/** mock data for account manager details */
export const accountManagerMock: any = {
    status: 200,
    body: {
        totalEmployees: 12,
        employees: [
            {
                employeeId: '59482',
                name: 'Zhao Qing',
                emailAddress: 'cristalle.szeto@cartus.com',
                clientList: [
                    {
                        clientNumber: 'C0220',
                        entityName: 'adasdsa',
                        clientId: '5e0dcfe476f4970cfb46d119'
                    }
                ]
            },
            {
                employeeId: '5db483',
                name: 'Maturity Mathew',
                emailAddress: 'maturity@cartus.com',
                clientList: [
                    {
                        clientNumber: '6152',
                        entityName: 'Citibank, CAN',
                        clientId: '5dgysew72864rbuyfqb76413'

                    },
                    {
                        clientNumber: '4321',
                        entityName: 'Orland Bank',
                        clientId: '5great653fd4rbuyfqb76413'
                    }
                ]
            },
            {
                employeeId: '5db7e1',
                name: 'John Joseph',
                emailAddress: 'john.joseph@cartus.com',
                clientList: [
                    {
                        clientNumber: '6488',
                        entityName: 'Advance America, Cash Advance Centers, Inc.',
                        clientId: '5dcf15f773f70101bd97e0b3'
                    }
                ]
            },
            {
                employeeId: '5d485',
                name: 'Priya Warrier',
                emailAddress: 'priya.warrier@cartus.com',
                clientList: []
            },
            {
                employeeId: '5db76',
                name: 'Elon Musk',
                emailAddress: 'elon.musk@cartus.com',
                clientList: []
            },
            {
                employeeId: '5db87',
                name: 'Sundar Pichai',
                emailAddress: 'sundar.pichai@cartus.com',
                clientList: []
            }
        ]
    }
};

// export const accountMAnagerClients: AccountManagerClients[] = [{
//     clientNumber: '6152',
//     entityName: 'Citibank, CAN',
//     clientId: '5dgysew72864rbuyfqb76413'

// },
// {
//     clientNumber: '6210',
//     entityName: 'Citibank Ireland',
//     clientId: '5dgysew72864rbuy6qed76413'
// },
// {
//     clientNumber: '6126',
//     entityName: 'Citibank, N.A.',
//     clientId: '5edgyh653fd4rbuyfqb76413'
// },
// {
//     clientNumber: '6132',
//     entityName: 'Citibank, A.R.',
//     clientId: '5edgyh65logicalyfqb76413'
// },
// {
//     clientNumber: '4562',
//     entityName: 'Bank',
//     clientId: '5edpolygamysrbuyfqb76413'
// },
// {
//     clientNumber: '9876',
//     entityName: 'Bank Danbury',
//     clientId: '5edgyh653lolrbuyfqb76413'
// },
// {
//     clientNumber: '6789',
//     entityName: 'Citi CT',
//     clientId: '5edgyh653fd4rbuyfuhuckit'
// },
// {
//     clientNumber: '4321',
//     entityName: 'Orland Bank',
//     clientId: '5great653fd4rbuyfqb76413'
// }
// ];
/** mock request body for fetchClients call */
export const fetchClientsMockRequest: any = {
    'searchText': 'abc',
    'existingClients': [
        {
            '_id': 'qwertyuio2345678'
        },
        {
            '_id': 'asdfghjkl324567'
        }
    ]
};
/** mock request body for save data call */
export const saveDataMockRequest: any = {
    'employeeId': '5de2dc7a65236577b92d18fd',
    'clientIds': ['5dcf100073f701819e97d883', '5dcf100073f701819e97d883']
};
/**states mock data */
export const stateList = [
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
// export const extension: Extension[] = [
//     {
//         'countryDialingCode': '1',
//         'name': 'United State'
//     },
//     {
//         'countryDialingCode': '93',
//         'name': 'Afghanistan'
//     },
//     {
//         'countryDialingCode': '684',
//         'name': 'American Samoa'
//     },
//     {
//         'countryDialingCode': '376',
//         'name': 'Andorra'
//     },
//     {
//         'countryDialingCode': '973',
//         'name': 'Bahrain'
//     },
//     {
//         'countryDialingCode': '880',
//         'name': 'Bangladesh'
//     },
//     {
//         'countryDialingCode': '246',
//         'name': 'Barbados'
//     },
//     {
//         'countryDialingCode': '375',
//         'name': 'Belarus'
//     },
//     {
//         'countryDialingCode': '32',
//         'name': 'Belgium'
//     },
//     {
//         'countryDialingCode': '501',
//         'name': 'Belize'
//     },
//     {
//         'countryDialingCode': '284',
//         'name': 'Bouvet Island'
//     }
// ];

// export const clientContacts: ClientContact[] = [
//     {
//         clientContactID: '5e330230969cd70009fc04f9',
//         clientID: '5df30bd69389d93a5d575cc1',
//         firstName: 'Kasim',
//         lastName: 'Nadim',
//         emailAddress: 'test@test.com',
//         phoneNumber: '2032050000',
//         status: 'Invitation Not Sent',
//         role: [],
//         isBillingContact: false,
//         invitedAsClientContact: false,
//         statusDate: '2020-02-12',
//         isDeleted: false,
//         countryDialingCode: '+1'
//     },
//     {
//         clientContactID: '5e330230969cd70009fc04f9',
//         clientID: '5df30bd69389d93a5d575cc1',
//         firstName: 'Kasim',
//         lastName: 'Nadim',
//         emailAddress: 'test@test.com',
//         phoneNumber: '2032050000',
//         status: 'Invitation Not Sent',
//         role: [],
//         isBillingContact: false,
//         invitedAsClientContact: false,
//         statusDate: '2020-02-12',
//         isDeleted: false,
//         countryDialingCode: '+44'
//     },
//     {
//         clientContactID: '5e330230969cd70009fc04f9',
//         clientID: '5df30bd69389d93a5d575cc1',
//         firstName: 'Kasim',
//         lastName: 'Nadim',
//         emailAddress: 'test@test.com',
//         phoneNumber: '2032050000',
//         status: 'Invitation Not Sent',
//         role: [],
//         isBillingContact: false,
//         invitedAsClientContact: false,
//         statusDate: '2020-02-12',
//         isDeleted: false,
//         countryDialingCode: '+91'
//     }
// ];
/**extension mock */
export const extensionMock: any = [
    {
        currency: {
            description: 'Russian Ruble',
            code: 'RUB'
        },
        _id: '5e4471410cdc3a1d50c81d89',
        dialingCode: 7,
        iso3CharCode: 'RUS',
        iso2CharCode: 'RU',
        name: 'Russia'
    },
    {
        currency: {
            description: 'Egyptian Pound',
            code: 'EGP'
        },
        _id: '5e4471410cdc3a1d50c81d17',
        dialingCode: 20,
        iso3CharCode: 'EGY',
        iso2CharCode: 'EG',
        name: 'Egypt'
    },
    {
        currency: {
            description: 'US Dollar',
            code: 'USD'
        },
        _id: '5e4471410cdc3a1d50c81db9',
        dialingCode: 1,
        iso3CharCode: 'USA',
        iso2CharCode: 'US',
        name: 'United States'
    }
];

/**Data Mock for Quote Detail data */
export const quoteDetailDataMock: any = {
    onBehalfOf: {
        partyType: 'organization',
        entityName: 'Oracle Inc.',
        preferredName: 'Oracle Inc.',
        taxId: '565678789',
        organizationKind: 'legal',
        legalType: 'parent',
        createdAt: '2020-03-03T22:42:14.492Z',
        updatedAt: '2020-03-03T22:43:41.815Z',
        __v: 7
    },
    applicationSource: 'ALPHA',
    orderRequestId: '5e99e1410c817c00075dc4b7',
    quoteRequestId: '5e99e3b624284f0008eaaaf3',
    orderDate: '2020-04-17T17:02:54.698Z',
    quoteRequestDate: '2020-04-17T17:13:26.126Z',
    requestedBy: {
        names: [
            'Finance',
            'Contact5'
        ]
    },
    forDeliveryTo: {
        names: [
            'Mathew',
            'Henry'
        ]
    },
    departureAddress: '123',
    departureCity: 'Newyork',
    departureState: 'NC',
    departurePostalCode: '08922',
    destinationaddress: '',
    destinationCity: 'Davis',
    destinationState: 'CA',
    destinationPostalCode: '08923',
    numberOfPeopleMoving: '2',
    numberRooms: 3,
    propertyType: 'Apartment/Condo/Co-op',
    ownRent: 'own',
    preferredEmailAddress: 'vasudev.bhat@mobilitydba.com',
    preferredPhoneNumber: '9483186755',
    estMoveStartDate: '2020-05-01',
    estMoveEndDate: '2020-05-15',
    orderReference: 'MOV-89zk39gj',
    quoteResponses: [
        {
            _id: '5e9c54357bd166001e694136',
            orderId: '5e99e1410c817c00075dc4b7',
            quoteRequestId: '5e99e3b624284f0008eaaaf3',
            referenceNumber: 'BHAA2A-1223',
            bidAmount: 2222,
            bidDate: '2020-02-13T17:06:02.657Z',
            bidExpires: '2020-04-19T13:37:57.014Z',
            details: {
                bidAmountCurrency: 'USD',
                bidAmountStorage: '222',
                bidAmountStorageCurrency: 'USD',
                estimatedWeight: 222,
                estimatedWeightUnit: 'lbs',
                estimatedDistance: 222,
                estimatedDistanceUnit: 'mi',
                moveType: 'regular',
                cartusCommission: 111.1,
                lockedInPrice: 711.04,
                insuranceAmount: 455,
                minInsuredValue: 3108
            },
            updatedAt: '2020-04-19T13:37:57.014Z',
            createdAt: '2020-04-19T13:37:57.014Z'
        },
        {
            _id: '5e9e09ea7bd166001e694139',
            orderId: '5e99e1410c817c00075dc4b7',
            quoteRequestId: '5e99e2bc24284f0008eaaaf1',
            referenceNumber: 'A1234',
            bidAmount: 1000,
            bidDate: '2020-04-20T20:45:23.642Z',
            bidExpires: '2020-04-20T20:45:30.041Z',
            details: {
                bidAmountCurrency: 'USD',
                bidAmountStorage: '1000',
                bidAmountStorageCurrency: 'USD',
                estimatedWeight: 1000,
                estimatedWeightUnit: 'lbs',
                estimatedDistance: 1000,
                estimatedDistanceUnit: 'mi',
                moveType: 'regular',
                cartusCommission: 50,
                lockedInPrice: 320,
                insuranceAmount: 455,
                minInsuredValue: 14000
            },
            updatedAt: '2020-04-20T20:45:30.041Z',
            createdAt: '2020-04-20T20:45:30.041Z'
        }
    ],
    departureCountry: 'USA',
    quoteStatus: 'Quote Submitted',
    quoteStatusDate: '2020-04-19T13:37:57.014Z'
}

/**candidate Quote Response data */
export const quoteResponseDataMock: any={
    orderRequestId:"5eb292c6b5d1690008e27f7a",
    quoteRequestId:"5eb2944badc2bc0007e337b3",
    referenceNumber:"abc-1234",
    bidDate:"2020-05-08T06:16:58.655Z",
    bidAmount:"2000",
    bidAmountCurrency:"USD",
    estimatedWeight:4444,
    estimatedWeightUnit:"lbs",
    estimatedDistance:3000,
    estimatedDistanceUnit:"mi",
    moveType:"regular",
    daysInStorage:20,
    bidAmountStorage:"5555",
    bidAmountStorageCurrency:"USD"
}

export const quoteResponseWithOutStorageDataMock: any={
    orderRequestId:"5eb292c6b5d1690008e27f7a",
    quoteRequestId:"5eb2944badc2bc0007e337b3",
    referenceNumber:"abc-1234",
    bidDate:"2020-05-08T06:16:58.655Z",
    bidAmount:"2000",
    bidAmountCurrency:"USD",
    estimatedWeight:4444,
    estimatedWeightUnit:"lbs",
    estimatedDistance:3000,
    estimatedDistanceUnit:"mi",
    moveType:"regular"    
}
export const quoteResponseLegacyDataMock: any={
    orderRequestId:"5eb292c6b5d1690008e27f7a",
    quoteRequestId:"5eb2944badc2bc0007e337b3",
    referenceNumber:"abc-1234",
    bidDate:"2020-05-08T06:16:58.655Z",
    bidAmount:"2000",
    bidAmountCurrency:"USD",
    estimatedWeight:4444,
    estimatedWeightUnit:"lbs",
    estimatedDistance:3000,
    estimatedDistanceUnit:"mi",
    moveType:"regular",    
    bidAmountStorage:"5555",
    bidAmountStorageCurrency:"USD"
}