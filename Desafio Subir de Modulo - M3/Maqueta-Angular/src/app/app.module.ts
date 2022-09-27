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
import { SobreMiAdminComponent } from './Componentes/sobre-mi-admin/sobre-mi-admin.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { ExperienciaAdminComponent } from './Componentes/experiencia-admin/experiencia-admin.component';
import { HomeComponent } from './Componentes/home/home.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { AdminComponent } from './Componentes/admin/admin.component';

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
    SobreMiAdminComponent,
    ExperienciaComponent,
    ExperienciaAdminComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
