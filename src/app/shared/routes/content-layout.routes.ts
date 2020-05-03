import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const CONTENT_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'addadmin/:id',
    loadChildren: () => import('../../pages/add-email-admin/add-email-admin.module').then(m => m.AddEmailAdminModule)
  },
  {
    path: 'addrootadmin/:id',
    loadChildren: () => import('../../pages/add-root-email-admin/add-root-email-admin.module').then(m => m.AddRootEmailAdminModule)
  },
];


