import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() project:Project |undefined
  // image: string ;
  constructor(private dialog:MatDialog){
    // this.image  = this.project?.images[0]
  }

  moreInfo(project:Project){
    const dialogRef = this.dialog.open(DialogContentComponent, {data:project});

  }

}
