import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  gridCols:number | undefined;

  constructor(private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Tablet, Breakpoints.Small, Breakpoints.Large, Breakpoints.Medium])
    .subscribe((result) => {
      if(result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.Medium]){
        this.gridCols = 3;
      }
      else if (result.breakpoints[Breakpoints.Tablet]) {
        this.gridCols = 2; // For mobile, display 1 column
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.gridCols = 2; // For tablet, display 2 columns
      } else {
        this.gridCols = 1; // For larger screens, display 3 columns
      }
    });
  }

}
