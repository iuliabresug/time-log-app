import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  constructor() { }

  public currentDate: Date = new Date();
  public currentWeekDates: Array<any> = [];

  ngOnInit(): void {
    this.getCurrentWeekDates(this.currentDate);
  }

  getCurrentWeekDates(date) {
    const day = date.getDay();
    for (let step = 1; step <= 5; step++) {
      const weekDate = new Date();
      weekDate.setDate(date.getDate() - day + step);
      this.currentWeekDates.push(weekDate);
    }
    this.currentWeekDates.sort();
  }
}
