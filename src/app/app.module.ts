import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FilemanagementComponent } from './filemanagement/filemanagement.component';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployerComponent } from './employer/employer.component';
import { CrmComponent } from './crm/crm.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FilemanagementComponent,
    JobseekerComponent,
    EmployerComponent,
    CrmComponent,
    InvoiceComponent,
    TrainingComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
