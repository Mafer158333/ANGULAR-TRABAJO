import { Routes } from '@angular/router';
import { AdoptComponent } from './src/components/adopt/adopt.component';
import { SupportUsComponent } from './src/components/support-us/support-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/adopta', pathMatch: 'full' },
  { path: 'adopta', component: AdoptComponent },
  { path: 'apoyanos', component: SupportUsComponent },
  { path: '*', redirectTo: 'adopta' },
];
