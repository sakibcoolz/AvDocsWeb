import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const CONTENT_ROUTES: Routes = [
  {
    path: 'login', 
    loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule)
  }
];


