import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingAbsenceComponent } from './existing-absence.component';

describe('ExistingAbsenceComponent', () => {
  let component: ExistingAbsenceComponent;
  let fixture: ComponentFixture<ExistingAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
