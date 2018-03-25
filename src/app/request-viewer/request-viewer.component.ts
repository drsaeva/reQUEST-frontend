import { Component, OnInit } from '@angular/core';
import { Request } from '../request';


@Component({
  selector: 'app-request-viewer',
  templateUrl: './request-viewer.component.html',
  styleUrls: ['./request-viewer.component.css']
})


export class RequestViewerComponent implements OnInit {
  request: Request = {
    id: 1,
    requestor: "John Doe",
    requestorId: 12,
    dateSubmitted: "3-Mar-2018",
    supervisor: "Tom Smith",
    deptHead: "Mary Sue",
    status: 4,
    justification: "Supervisor-requested certification",
    urgent: true,

    // event-specific info
    eventTypeId: 4,
    eventName: "Oracle Certified Associate examination",
    eventStartDate: "30-Mar-2018",
    eventEndDate: "30-Mar-2018",
    eventCost: 245.00,
    reimbAmt: 245.00,
    evidenceDirLink: "https://www.example.com",
    evidenceHasApproval: 1,

    // grade-specific info
    gradeFormat: "0-100",
    passingGrade: "65",
    finalGrade: "",
    passOrFail: ""

  };


  constructor() { }

  ngOnInit() {
  }

}
