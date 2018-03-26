import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalRequestsComponent } from './global-requests.component';

describe('GlobalRequestsComponent', () => {
  let component: GlobalRequestsComponent;
  let fixture: ComponentFixture<GlobalRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
