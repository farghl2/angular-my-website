import { Component ,Inject} from '@angular/core';


import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  wFull = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public project:Project
  ){}

  onFullWidth(){
    this.wFull = !this.wFull;
    console.log(this.wFull)
  }
}
