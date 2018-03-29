import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import { MatDatepickerModule } from '@angular/material/datepicker';
interface Request {
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
@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit, Request {
	passOrFail: string;
	finalGrade: string;
	passingGrade: string;
	// grade-specific info
	gradeFormat: string;
	evidenceHasApproval: number;
	evidenceDirLink: string;
	reimbAmt: number;
	eventCost: number;
	eventEndDate: string;
	eventStartDate: string;
	requestor: string;
	// event-specific info
	eventTypeId: number;
	urgent: boolean;
	justification: string;
	status: number;
	deptHead: string;
	supervisor: string;
	dateSubmitted: string;
	requestorId: number;
	// general info
	id: number;
	eventName: string;
  title: string;
  closeBtnName: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) { }


  ngOnInit() {
    this.id = Math.floor(Math.random() * (999999-100000+1))+100000;
  }

}
