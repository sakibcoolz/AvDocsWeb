import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RoleGuard } from '../auth/role-guard.service';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../pages/deshboard/deshboard.module').then(m => m.DeshboardModule),
    canActivate: [RoleGuard],
    data: { 
      expectedRole: 'admin'
    }
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
    path: 'add-user',
    loadChildren: './pages/add-users/add-users.module#AddUsersModule',
    canActivate: [AuthGuard]
  },
];
