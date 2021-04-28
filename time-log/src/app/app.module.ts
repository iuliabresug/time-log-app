import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AbsencesComponent } from './absences/absences.component';
import { HeaderComponent } from './header/header.component';
import { AddAbsenceComponent } from './absences/add-absence/add-absence.component';
import { ExistingAbsenceComponent } from './absences/existing-absence/existing-absence.component';
import { BalanceComponent } from './absences/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    AbsencesComponent,
    HeaderComponent,
    AddAbsenceComponent,
    ExistingAbsenceComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
