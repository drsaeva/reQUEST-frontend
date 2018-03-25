export class Request {
  // general info
  id: number;
  requestor: string;
  requestorId: number;
  dateSubmitted: string;
  supervisor: string;
  deptHead: string;
  status: number;
  justification: string;
  urgent: boolean;

  // event-specific info
  eventTypeId: number;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventCost: number;
  reimbAmt: number;
  evidenceDirLink: string;
  evidenceHasApproval: number;

  // grade-specific info
  gradeFormat: string;
  passingGrade: string;
  finalGrade: string;
  passOrFail: string;

}
