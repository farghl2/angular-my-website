import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AnMaterialModule } from './an-material.module';
import { LineComponent } from './shared/line/line.component';
import { HeadButtonComponent } from './shared/head-button/head-button.component';
import { EduAndSkillsComponent } from './edu-and-skills/edu-and-skills.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineComponent,
    HeadButtonComponent,
    EduAndSkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AnMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
