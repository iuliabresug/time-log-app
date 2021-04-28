import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-absence',
  templateUrl: './existing-absence.component.html',
  styleUrls: ['./existing-absence.component.css']
})
export class ExistingAbsenceComponent implements OnInit {
  existingAbsences: Array<any> = [
    {
      from: 1616085743,
      to: 1616258543,
      approved: true,
      canEdit: false
    },
    {
      from: 1616085743,
      to: 1616258543,
      approved: false,
      canEdit: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
