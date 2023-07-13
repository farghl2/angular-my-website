import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AnMaterialModule } from './an-material.module';
import { LineComponent } from './shared/line/line.component';
import { HeadButtonComponent } from './shared/head-button/head-button.component';
import { EduAndSkillsComponent } from './pages/edu-and-skills/edu-and-skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CardComponent } from './pages/projects/card/card.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollUpButtonComponent } from './shared/scroll-up-button/scroll-up-button.component';
import { HeaderComponent } from './shared/header/header.component';
import { DialogContentComponent } from './pages/projects/card/dialog-content/dialog-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineComponent,
    HeadButtonComponent,
    EduAndSkillsComponent,
    ProjectsComponent,
    CardComponent,
    SocialMediaComponent,
    ContactMeComponent,
    ScrollUpButtonComponent,
    HeaderComponent,
    DialogContentComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AnMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
