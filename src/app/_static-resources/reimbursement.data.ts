import { Injectable } from '@angular/core';

@Injectable()
export class ReimbursementData {

  private uniCourse : { "name": "University Course", "coverage": 0.8 };
  private sem : { "name": "Seminar", "coverage": 0.6 };
  private certPrep : { "name": "Certificate Preparation Course", "coverage": 0.75 };
  private cert : { "name": "Certifcation", "coverage": 0.8 };
  private techTr : { "name": "Technical Training", "coverage": 0.9 };
  private other : { "name": "Other", "coverage":0.3 };

  private reimbData = [this.uniCourse, this.sem, this.certPrep,
                                      this.cert, this.techTr, this.other];

  public getReimbData() { return this.reimbData; }

}
