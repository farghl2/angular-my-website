import { Component } from '@angular/core';

@Component({
  selector: 'app-edu-and-skills',
  templateUrl: './edu-and-skills.component.html',
  styleUrls: ['./edu-and-skills.component.css']
})
export class EduAndSkillsComponent {
  coreCourses:string[]=['C/C++','Data Structures', 'Algorithms','Etreprenurship'];
  advancedCourses: string[] = ['Angular','Java Script', 'Type Script',
  'RxJs',
  'BootStrap',
  'Tailwind',
  'HTML',
  'CSS',
  'SASS'


];



}
