import { rights } from './../model/token.model';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RoleGuard } from '../auth/role-guard.service';
import { jwtToken } from '../auth/jwtRelate';

//Route for content layout with sidebar, navbar and footer


export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../pages/deshboard/deshboard.module').then(m => m.DeshboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'opdnewappointment',
    loadChildren: () => import('../../pages/opd-new-appointment/opd-new-appointment.module').then(m => m.OpdNewAppointmentModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'opdhisappointment',
    loadChildren: () => import('../../pages/opd-history-appointment/opd-history-appointment.module').then(m => m.OpdHistoryAppointmentModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'opdTodayappointment',
    loadChildren: () => import('../../pages/opd-today-appointment/opd-today-appointment.module').then(m => m.OpdTodayAppointmentModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'UserManagement',
    loadChildren: () => import('../../pages/user-management/user-management.module').then(m => m.UserManagementModule),
    canActivate: [RoleGuard],
    data: {
      //expectedRole: 'adduser'
      expectedRole: {servicename: 'adduser', view: true, add : false, edit: false, delete: false}
    }
  },
  {
    path: 'ClinicManagement',
    loadChildren: () => import('../../pages/clinic-management/clinic-management.module').then(m => m.ClinicManagementModule),
    canActivate: [RoleGuard],
    data: {
      //expectedRole: 'addclinic'
      expectedRole: {servicename: 'addclinic', view: true, add : false, edit: false, delete: false}
    }
  },
  {
    path: 'add-user',
    loadChildren: './pages/add-users/add-users.module#AddUsersModule',
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'adduser'
    }
  },
  {
    path: 'rightsmanagement',
    loadChildren: () => import('../../pages/rightsmanagement/rightsmanagement.module').then(m => m.RightsmanagementModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: {servicename: 'rights', view: true, add : false, edit: false, delete: false}
    }
  },
  {
    path: 'unauthorised',
    loadChildren: () => import('../../pages/unauthorised/unauthorised.module').then(m => m.UnauthorisedModule),
    canActivate: [AuthGuard]
  },
];
