import { APIResponse } from './response.model';
import { Level } from './level';
import { Location } from './location';
import { TooltipContent } from './tooltip-content.model';

/**to store the type of residence*/
export const currentResidnceResidenceOwn = 'Own';
/**to store the type of residence*/
export const currentResidnceResidenceRent = 'Rent';
/**variable stores the onePerson value to 1*/
export const peopleRelocationOnePerson = '1';
/**variable to store twoPeople value to 2*/
export const peopleRelocationTwoPeople = '2';
/** variable to declare the number of persons to 3*/
export const peopleRelocationThreePeople = '3';
/**variable to declare the number of persons to 4 or more*/
export const peopleRelocationFourPlusPeople = '4+';
/** Variable to store yes */
export const relocationRelocYes = 'YES';
/** Variable to store no */
export const relocationRelocNo = 'NO';
/** Variable to store label House */
export const typeOfHomeHome = 'House';
/** Variable to store label Apartment */
export const typeOfHomeAptmnt = 'Apartment/Condo/Co-Op';
/** Variable to store label 'Townhouse'*/
export const typeOfHomeTown = 'Townhouse';
/**Title to display the dialog window page title */
export const transfereeDetailsTitle = 'Transferee Details';
/**Flag mode for Create */
export const transfereeDetailsMode = 'create';
/**Flag mode for Create */
export const addCandidateMode = 'create';
/** Title to display the dialog window page title */
export const addCandidateTitleForAddCandidate = 'Add Candidate';
/**store error message */
export const specialCharactersMessage = 'Special characters are not allowed';
/** Title for Candidtae Assesment */
export const addCandidateTitleForCandidateAssesment = 'Candidate Assessment';
/** Title for Recommended Budget */
export const addCandidateTitleForRecommendedBudget = 'Recommended Budget';
/** Title for Edit Candidate */
export const addCandidateTitleForEditCandidate = 'Edit Candidate';
/**Flag mode for Create */
export const addCostModelMode = 'create';
/* Title to display the dialog window page title */
export const addCostModelTitleForCreateCostModel = 'Add Cost Model';
/** Title for Edit Cost Model */
export const addCostModelTitleForEditCostModel = 'Edit Cost Model';
/** Title for Generate Cost Model Button */
export const addCostModelTitleForGenerateButton = 'Generate Cost Models';
/** Title for Update Cost Model Button */
export const addCostModelTitleForUpdateCostModelButton = 'Update Cost Models';
/** Title for Delete Cost Model */
export const addCostModelTitleForDeleteCostModel = 'Delete Cost Model';
/** Title for OnePerson Cost-estimate */
export const addCostModelOnePerson = '1 Person';
/** Title for two_to_three people Cost-estimate */
export const addCostModelTwoToThreePeople = '2-3 People';
/** Title for four_plus people Cost-estimate */
export const addCostModelFourPlusPeople = '4+ People';
/** Currency */
export const addCostModelCurrency = 'USD';
/** Client Section Starts*/
/* Title to display the dialog window page title */
export const addClientTitleForCreateClient = 'Add Client';
/**Flag mode for Create */
export const addClientModelMode = 'Create';
/** Title for Edit Client */
export const addClientTitleForReviewClient = 'Review Client';
/** Title for Edit Client */
export const addClientTitleForEditClient = 'Edit Client';
/** Title for Delete Client */
export const addClientTitleForDeleteClient = 'Inactivate Client';
/** Title for Invite Client Contact*/
export const addClientTitleforinviteClientContact = 'Invite as Client Contact';
/** Title for Submit button on Add Client Dialog*/
export const addClientSubmitButtonLabel = 'Submit For Review';
/** Title for Submit button on Add Client Dialog*/
export const addClientActivateClientButtonLabel = 'Activate Client';
/** Title for Submit button on Add Client Dialog*/
export const addClientSaveClientButtonLabel = 'Save Changes';
/** Client Section Ends*/
/** Client Contact Section Starts*/
export const addClientContactTitleForCreateClientContact = 'Add Client Contact';
/**Flag mode for Create */
export const addClientContactModelMode = 'create';
/** Title for Edit Client */
export const addClientContactTitleForReviewClientContact = 'Review Client Contact';
/** Title for Edit Client */
export const addClientContactTitleForEditClientContact = 'Edit Client Contact';
/** Title for Delete Client */
export const addClientContactTitleForDeleteClientContact = 'Inactivate Client Contact';
/** Title for Invite Client Contact*/
export const addClientContactTitleforinviteClientContact = 'Send Invite';
/** Title for Submit button on Add Client Dialog*/
export const addClientContactSubmitButtonLabel = 'Send Invite';
/** Title for Submit button on Add Client Dialog*/
export const addClientContactActivateClientContactButtonLabel = 'Activate Client Contact';
/** Title for Submit button on Add Client Dialog*/
export const addClientContactSaveClientContactButtonLabel = 'Save Changes';
/** Client Contact Section Ends*/
/*stores the city values as Danbury default*/
export const addressDetailsDefaultCity = 'Danbury, CT';
/** title for withdraw candidate modal */
export const withdrawCandidateTitle = 'Withdraw Candidates';
/** variable to store withdraw modal display text - 1 */
export const withdrawCandidateDisplayText1 =
  'You are about to withdraw the following candidate(s):';
/** variable to store withdraw modal display text - 2 */
export const withdrawCandidateDisplayText2 =
  'They will no longer have access to Alpha and their information will be discarded.';
/**variable to store client contact id */
export const clientContactID = '5d8b16401c9d440000f9bdec';
/** mock API response */
export const mockedResponse: APIResponse = {
  candidateID: '1234',
  message: 'E-Mail Invitation Sent Successfully',
  statusCode: 200
};
/** mock level data */
export const levelData: Level[] = [
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
/**mock empty level data */
export const emptyLevelData: Level[] = [
  { levelId: '', levelName: '', levelDescription: '' }
];
/**mock location data */
export const locationData: Location[] = [
  { name: 'NJ, Nutley', id: 'desitnation1' },
  { name: 'GA, Atlanta', id: 'desitnation2' },
  { name: 'TX, Dallas', id: 'desitnation3' },
  { name: 'NJ, Jersey City', id: 'desitnation4' },
  { name: 'TX, Houston', id: 'desitnation2' },
  { name: 'NY, New York City', id: 'desitnation3' },
  { name: 'NY, Fushing', id: 'desitnation4' },
  { name: 'NJ, Edison', id: 'desitnation2' },
  { name: 'NJ, Newark', id: 'desitnation3' }
];
/**mock city data */
export const cityData: Array<string> = ['Newyork', 'Washington', 'Danbury, CT'];
/** response for createCandidate service call */
export const createCandidateResponse = `Added user Successfully`;
/** response for updateCandidate service call */
export const updateCandidateResponse = `Updated user Successfully`;
/** response if duplicate candidate is present */
export const duplicateResponse = `Duplicate`;
/** response if activated user sucessfully */
export const activateResponse = `Activated user Successfully`;
/** response for sendInviteToCandidate service call */
export const sendInviteResponse = `E-Mail Invitation Sent Successfully`;
/** response for reSendInviteToCandidate service call */
export const reSendInviteResponse = `E-Mail Invitation ReSent Successfully`;
/** status if invitation is sent successfully */
export const invitationSentStatus = `Invitation Sent`;
/** status if invitation is not sent */
export const invitationNotSentStatus = `Invitation Not Sent`;
/** status if van line quote pending */
export const vanlineQuoteStatus = `Pending Van Line Quote`;
/** status if candidate is ready for review */
export const reviewReadyStatus = `Ready for Review`;
/** status if payment is pending */
export const paymentPendingStatus = `Payment Pending`;
/** variable to store cost model title */
export const deleteCostModelTitle = 'Delete Cost Models';
/** variable to store cost model display text - 1 */
export const deleteCostModelDisplayText1 =
  'You are about to delete the following cost model(s):';
/** variable to store  cost model display text - 2 */
export const deleteCostModelDisplayText2 = 'They will be removed and you will no longer have access to them and their related details.';
/** variable to store cost model title */
export const inactivateClientTitle = 'Inactivate Client';
/** variable to store cost model display text - 1 */
export const inactivateClientDisplayText1 =
  'You are about to inactivate the following client(s):';
/** variable to store  cost model display text - 2 */
export const inactivateClientDisplayText2 = 'They will be removed and you will no longer have access to them and their related details.';
/** variable to store cost model title */
export const inactivateClientContactTitle = 'Inactivate Client Contact';
/** variable to store cost model display text - 1 */
export const inactivateClientContactDisplayText1 =
  'You are about to inactivate the following client(s):';
/** variable to store  cost model display text - 2 */
export const inactivateClientContactDisplayText2 =
  `They will be removed and you will no longer have access to them and their related details.`;

/** stores tooltip content for every form field as an array*/
export const tooltTip: TooltipContent[] = [
  {
    key: 'budgetExceeded',
    value: 'You have exceeded the recommended budget by more than 25%.'
  },
  {
    key: 'budgetInvalid',
    value:
      'Your relocation investment needs to be equal to or exceed the cost associated to the Core Benefits'
  },
  {
    key: 'valueInvalid',
    value: `Please enter valid amount`
  },
  {
    key: 'numericInvalid',
    value: `Please enter numeric value`
  }
];
/**stores the message to be displayed if tax included */
export const taxIncludedMessgae =
  `Relocation benefits paid to or on behalf of an employee that is considered taxable income,
   will result in a tax liability for your transferring employee. Tax gross up is a method to relieve the transferring
   employee of this tax liability associated with this taxable relocation benefit. The gross up amount calculated in the
   budget is a recommendation of the expected income taxes that will be owed. Your payroll department will determine the
   exact method of accounting for the tax liability.`;
/**stores the message to be displayed if tax not included */
export const taxNotIncludedMessage =
  `<span class="strong uppercase">Warning:</span> Reimbursement for relocation expenses is considered taxable income by the government.
   Your employee will be responsible for the taxes associated to this relocation payment.
   <span class="strong">We will notify your employee of these implications.</span>`;
/**
 * Used to store date formats
 */
export const APP_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'numeric', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input'
  }
};
/** stores currency for budget details */
export const budgetCurrency = 'USD';
/** stores static flex services names and description */
export const flexServicesDesc = [
  {
    id: 'travelToNewLocation',
    name: 'Travel to New Location',
    desc: `The Travel to New Location estimate is the final trip from the old home to the new
     location based on the number of people traveling.  The estimate calculates meals, 1-2 nights
      for hotel stay and transportation costs either driving or by air.`
  },
  {
    id: 'temporaryLiving',
    name: 'Temporary Living',
    desc: `Temporary Living offers options for your employees when they can’t move into their new
     residence immediately. We’ve estimated this cost based on 15 days of temporary living.`
  },
  {
    id: 'homeFinding',
    name: 'Home Finding',
    desc: `A Home Finding Trip covers expenses like airfare, lodging, rental car, and meals incurred
     by your employee on a trip to explore their new destination to look at homes, schools, and the community.`
  },
  {
    id: 'returnTripHome',
    name: 'Return Trip Home',
    desc: 'Return Trip Home is useful for employees who report to their new work location prior to their final move.'
  },
  {
    id: 'otherMiscServices',
    name: 'Other Misc Services',
    desc: `Other Miscellaneous Services typically needed by relocating employees may include,
     but are not limited to, Vehicle Shipment, Pet Shipment, Career Assistance, and Rental Assistance.`
  },
  {
    id: 'Storage',
    name: 'Storage',
    desc: '35% of transferring employees typically use storage for up to 30 days.'
  },
];
/** stores static core service name and description */
export const coreServiceDesc = {
  name: 'Professional Van Line',
  desc: `A Professional Van Line will ship your employee's household goods and personal effects,
   which includes delivery and unloading of their goods at the new location. Full replacement insurance coverage is provided.`
};
/** Title to display compare cost model in breadcrumb*/
export const compareCostModelBreadcrumbTittle = 'Compare Cost Models';
/** Title to display cost model in breadcrumb*/
export const costModelBreadcrumbTittle = 'Cost Models';
/** Title to display warning icon*/
export const warningIcon = 'warning';
/** Title to display arrow forward icon*/
export const arrowForwardIos = 'arrow_forward_ios';
/** Title to display person_one*/
export const personOne = '1 Person';
/** Title to display two person*/
export const twoPerson = '2-3 People';
/** Title to display four person*/
export const fourPerson = '4+ People';
/** Title to display core services*/
export const coreServices = 'CORE';
/** Title to display flexible services*/
export const flexibleServices = 'FLEXIBLE SPEND';
/** Title to display tax assistance services*/
export const taxAssistanceServices = 'TAX ASSISTANCE';
/** Title to display van line move*/
export const vanLineMove = 'Professional Vanline Move (includes Insurance)';
/** Title to display van line move*/
export const multipleProbableServices = 'Multiple Probable Services';
/**Title to store error message for phone number */
export const phoneErrorMessage = 'You must enter mobile #';
/** Title to display cartus address*/
export const cartusAddress = {
  name: 'Cartus Corporation ',
  addLine1: '40 Apple Ridge Road',
  addLine2: 'Danbury, Connecticut 06810',
  addLine3: 'United States Of America ',
  website: 'http://www.cartus.com ',
  fax: 'Federal Tax ID: 06 - 1578033'

};
/** Title to display Invoice*/
export const invoice = 'INVOICE';
/** Title to display Invoice Number*/
export const invoiceNumber = 'Invoice Number';
/** Title to display Invoice Date*/
export const invoiceDate = 'Invoice Date';
/** Title to display Payment Terms*/
export const paymentTerms = 'Payment Terms';
/** Title to display payment method Immediate*/
export const paymentType = 'Immediate';
/** Title to display Total Amount Due*/
export const totalAmountDue = 'Total Amount Due';
/** Title to display Invoice Currency*/
export const invoiceCurrency = 'Invoice Currency';
/** Title to display Invoice to*/
export const invoiceTo = 'Invoice to:';
/** Title to display Transferee*/
export const transferee = 'Transferee';
/** Title to display Move Order#*/
export const moveOrder = 'Move Order #';
/** Title to display Approved Move Budget*/
export const approvedMoveBudget = 'Approved Move Budget';
/** Title to display Please remit payment to*/
export const paymentRemit = 'Please remit payment to:';
/** Title to display Electronic Payment*/
export const electronicPayment = 'Electronic Payment';
/** Title to display thank you msg*/
export const thankyouMsg = 'THANK YOU FOR YOUR BUSINESS!';
/** Title to display invoice msg*/
export const invoiceMsg = 'THIS IS NOT A TAX INVOICE';
/** Title to display payment terms*/
export const payTerms = 'This invoice is due on receipt. Please reference Invoice # While making payment to \n\n  ensure faster service.';
/** Title to display routing Number title*/
export const routingNumber = 'ABA Number (Routing Number)';
/** Title to display account Number title*/
export const accountNumber = 'Account Number.: ';
/** Title to display swift Number title*/
export const swiftNumber = 'Swift/BIC: ';
/**error message to display on bad gateway error */
export const errorMessage = 'We are unable to process your request at this time. Please try again later.';
/** Title to display ALPHA LOGO Relocation Offer*/
export const alphaLogo = 'ALPHA LOGO';
/** Title to display Relocation Offer for Candidate*/
export const candidateOfferTitle = 'Relocation Offer for Candidate';
/** Title to display current date*/
export const date = 'Date';
/** Title to display Candidate Full Name*/
export const candidateFullName = 'Candidate Full Name:';
/** Title to display Client Name*/
export const clientName = 'Client Name:';
/** Title to display Business Unit*/
export const businessUnit = 'Business Unit:';
/** Title to display Departure*/
export const departure = 'Departure:';
/** Title to display Destination*/
export const destination = 'Destination:';
/** Title to display Move Budget*/
export const moveBudget = 'Move Budget';
/** Title to display Guaranteed Services*/
export const guaranteedServicesTitle = 'Guaranteed Services';
/** Title to display Van Line Move*/
export const vanlineTitle = 'Van Line Move (Includes Insurance)';
/** Title to display Van Line Move content*/
export const vanlineContentForCandidate = 'A Professional Van Line will ship your household goods and personal effects from your departure to your destination, which includes delivery and unloading of your goods at the new location. Full replacement insurance coverage is provided.';
/** Title to display Recommended Services*/
export const recommendedServices = 'Recommended Services';
/** Title to display Total Move Budget*/
export const totalMoveBudget = 'Total Move Budget';
/** Title to display Tax Information*/
export const taxInfoTitle = 'Tax Information';
/** Title to display Tax content*/
export const taxInfoIncluded = `Reimbursement for relocation expenses is considered taxable income by the government.
 Discuss with your company's HR or Payroll department to understand the tax implications.`;
/** Title to display Notice*/
export const notice = 'NOTICE: ';
/** Title to display Warning*/
export const warning = 'WARNING: ';
/** Title to display tax not inclyded Info*/
export const taxInfoNotIncluded = `Reimbursement for relocation expenses is considered taxable income by the government.
 You will be responsible for the taxes associated to this relocation payment.
 You may want to consider holding 35% aside to cover any tax implications or speaking with a tax professional.`;
/** Title to display Relocation Offer for Authorization*/
export const authorizationOfferTitle = 'Relocation Offer for Authorization';
/** Title to display Core Benefits*/
export const coreBenefits = 'Core Benefits';
/** Title to display Flexible Spend*/
export const flexibleSpend = 'Flexible Spend';
/** Title to display Tax Assistance*/
export const taxAssistance = 'Tax Assistance';
/** Title to display Total Expense*/
export const totalExpense = 'Total Expense';
/** Title to display Budget Adjustment*/
export const budgetAdjustment = 'Budget Adjustment';
/** Title to display Entered Move Budget*/
export const enteredMoveBudget = 'Entered Move Budget';
/** Title to displayCartus Recommended Budget*/
export const cartusRecommendedBudget = 'Cartus Recommended Budget';
/** Title to display copyright*/
export const copyright = '&copy; 2000-2020 Cartus Corporation';
/** stores static flex services names and description */
export const candidateFlexServicesDesc = [
  {
    name: 'Storage',
    // tslint:disable-next-line: max-line-length
    desc: 'When you\'re not ready to move into your new house right away, consider storing your items with our professional van line movers at one of their facilities.\n\n(If you decide to go with a self- storage facility, you will need to arrange transportation of items to your new home, as this is not covered in your professional van line move. You must inspect and submit insurance claims at the time of delivery to the self - storage facility.) '
  },
  {
    name: 'Travel to New Location',
    // tslint:disable-next-line: max-line-length
    desc: 'The Travel to New Location estimate is the final trip from the old home to the new location based on the number of people traveling.  The estimate calculates meals, 1-2 nights for hotel stay and transportation costs either driving or by air.'
  },
  {
    name: 'Temporary Living',
    desc: 'Temporary Living providers can offer options for when you can\'t move into your new residence immediately.'
  },
  {
    name: 'Home Finding',
    // tslint:disable-next-line: max-line-length
    desc: 'A Home Finding Trip covers expenses like airfare, lodging, rental car, and meals incurred on a trip to explore your new destination to look at homes, schools, and the community.'
  },
  {
    name: 'Return Trip Home',
    desc: 'Return Trip Home is useful for you if you report to your new work location prior to your final move.'
  },
  {
    name: 'Other Misc Services',
    // tslint:disable-next-line: max-line-length
    desc: 'Other Miscellaneous Services typically needed by relocating employees may include, but are not limited to, Vehicle Shipment, Pet Shipment, Career Assistance, and Rental Assistance'
  }
];

/** Title to display copyright*/
export const insurancePercent = 0.063;

export const minInsuranceAmt = 455;

export const hrCoreSvcDesc = `A Professional Van Line will ship your employee's household goods and personal effects,
 which includes delivery and unloading of their goods at the new location. Full replacement insurance coverage is provided.`;


/** api error message */
export const apiErrorMessage = 'We are unable to process your request at this time. Please try again later.';

/** skip records for filter */
export const skipRecordCount = 0;
