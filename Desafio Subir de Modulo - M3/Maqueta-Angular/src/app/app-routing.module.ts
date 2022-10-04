import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { AuthGuard } from './servicios/auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  //Ruta protegida
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
