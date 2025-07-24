import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'information',
    loadComponent: () =>
      import('./pages/information/information.component').then(
        (m) => m.InformationComponent
      ),
  },
    {
    path: 'manual',
    loadComponent: () =>
      import('./pages/manual/manual.component').then(
        (m) => m.ManualComponent
      ),
  },
  {
    path: 'themes',
    loadComponent: () =>
      import('./pages/themes/themes.component').then((m) => m.ThemesComponent),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
