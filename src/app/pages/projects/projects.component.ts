import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  gridCols:number | undefined;
  projects: Project[] =[{title:'SmartSuq',
                        images:['assets/smartsuq/1.png','assets/smartsuq/2.png', 'assets/smartsuq/3.png',
                        'assets/smartsuq/4.png', 'assets/smartsuq/5.png', 'assets/smartsuq/6.png'],
                      description:`SmartSuq is an online store that was developed in this way to be good with the customers who use it,
                       and it consists of the Home page , the Cart page, and the Categories page`,
                    technologies:['Angular','TypeScript', 'HTML', 'CSS', 'Firebase', 'BootStrap', 'Angular Material'],
                  gitHub:'https://github.com/farghl2/SmartSuqApp',
                demo:'https://app.smartsuq.com',
              responsive:true},

                {title:'My Portofolio',
                        images:['assets/cv/1.png','assets/cv/2.png','assets/cv/3.png','assets/cv/4.png',],
                      description:`My portfolio is a landing page site and it consists of the Home section , Education and Skills section
                      ,Projects section ,Mocial media section, Contact Me section ,and simple footer`,
                      technologies:['Angular','TypeScript', 'HTML', 'CSS','Tawilwind', 'Angular Material'],
                  gitHub:'https://github.com/farghl2/my-website',
                demo:'https://islam.smartsuq.com',
                responsive: true,

              },

                {title:'Dashboard',
                        images:['assets/dashboard/1.png','assets/dashboard/2.png','assets/dashboard/3.png','assets/dashboard/4.png','assets/dashboard/5.png',],
                      description:`Dashboard consists of Dahboard page, settings page, Profile page, Projects p
                      age, Courses page, Friends page, Files page, and Plans page `,
                    technologies:['HTML','CSS'],
                  gitHub:'https://github.com/farghl2/dashboard',
                demo:'https://dashboard.smartsuq.com',
              responsive:true},

                {title:'Web store',
                        images:['assets/shop/1.png','assets/shop/2.png','assets/shop/3.png','assets/shop/4.png',],
                      description:'Web store is an E-commerce consists of Home ,cart and menu of cart ',
                      technologies:['Angular','TypeScript', 'HTML', 'scss','Tawilwind', 'Angular Material', 'RxJs'],
                  gitHub:'https://github.com/farghl2/webShope-angular',
                demo:'https://shop.smartsuq.com'
              , responsive:false},

                // {title:'SmartSuq',
                //         images:['',''],
                //       description:'ssss',
                //     technologies:['',''],
                //   github:'ddd',
                // demo:'sss'}


              ]

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
