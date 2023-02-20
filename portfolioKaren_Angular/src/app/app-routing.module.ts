import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: HomeComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }