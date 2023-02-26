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
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { HomeComponent } from './Componentes/home/home.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AdminModalComponent } from './Componentes/admin-modal/admin-modal.component';
import { AdminFilesComponent } from './Componentes/admin-files/admin-files.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './Componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './Componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './Componentes/educacion/edit-educacion.component';
import { EditPersonaComponent } from './Componentes/sobre-mi/edit-persona.component';
import { EditSkillsComponent } from './Componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './Componentes/skills/new-skills.component';
import { NewIdiomasComponent } from './Componentes/skills/new-idiomas.component';
import { EditIdiomasComponent } from './Componentes/skills/edit-idiomas.component';
import { NewProyectosComponent } from './Componentes/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './Componentes/proyectos/edit-proyectos.component';

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
    ExperienciaComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AdminModalComponent,
    AdminFilesComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditPersonaComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    NewIdiomasComponent,
    EditIdiomasComponent,
    NewProyectosComponent,
    EditProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
