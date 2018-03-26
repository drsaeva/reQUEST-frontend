import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NewRequestComponent } from '../new-request/new-request.component';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})

export class SubmissionComponent implements OnInit {
    bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  openModalWithComponent() {
    const initialState = {
      title: 'Submit a New Reimbursement Request'
    };
    this.bsModalRef = this.modalService.show(
      NewRequestComponent,
      Object.assign({initialState}, {class: 'modal-lg'})
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  ngOnInit() {
  }

}
