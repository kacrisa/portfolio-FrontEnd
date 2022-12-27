import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LogInComponent } from './Componentes/log-in/log-in.component';
import { HttpClientModule} from '@angular/common/http';
import { LogOutComponent } from './Componentes/log-out/log-out.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { HomeComponent } from './Componentes/home/home.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModalComponent } from './Componentes/admin-modal/admin-modal.component';
import { AdminFilesComponent } from './Componentes/admin-files/admin-files.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SobreMiComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LogInComponent,
    LogOutComponent,
    ExperienciaComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AdminModalComponent,
    AdminFilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
