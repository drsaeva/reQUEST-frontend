import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import { MatDatepickerModule } from '@angular/material/datepicker';
import { AuthenticationService } from '../../_services/authentication.service';
import { ReimbursementData } from '../../_static-resources/reimbursement.data';

@Component({
  selector: 'app-new-request',
  providers: [ReimbursementData],
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  reimbdat;
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
  constructor(public bsModalRef: BsModalRef,
              private auth: AuthenticationService,
              private rsrc : ReimbursementData) {

  }

  ngOnInit() {
    this.id = Math.floor(Math.random() * (999999-100000+1))+100000;
    console.log(this.rsrc.getReimbData()[0].name);

  }

}
