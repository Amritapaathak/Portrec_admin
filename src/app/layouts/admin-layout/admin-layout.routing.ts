import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { FilemanagementComponent } from '../../filemanagement/filemanagement.component';
import { JobseekerComponent } from '../../jobseeker/jobseeker.component';
import { EmployerComponent } from '../../employer/employer.component';
import { CrmComponent } from '../../crm/crm.component';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { TrainingComponent } from '../../training/training.component';
import { from } from 'rxjs';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'filemanagement',   component: FilemanagementComponent },
    { path: 'filemanagement/JobSeeker',     component: JobseekerComponent },
    { path: 'filemanagement/employer',     component: EmployerComponent },
    { path: 'crm',    component: CrmComponent},
    { path: 'invoice',          component: InvoiceComponent },
    { path: 'trainingcentre',           component: TrainingComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
