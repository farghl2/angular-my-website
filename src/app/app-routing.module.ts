import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduAndSkillsComponent } from './edu-and-skills/edu-and-skills.component';

const routes: Routes = [
  {path:'EduAndSkills',component:EduAndSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
