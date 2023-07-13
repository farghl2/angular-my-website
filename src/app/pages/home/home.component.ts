import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  headers: any[] =[{title: 'Edu and Skills',id:'#EduAndSkills'},
                    {title:'Projects',id:'#Projects'},
                    {title:'Social Media',id:'#SocialMedia'},
                    {title:'Contact Me',id: '#ContactMe'}];
  constructor(private http:HttpClient){}

  downloadFile() {
    const fileName = 'IslamFarghlResume.pdf'; // Replace with the name of the file in the assets folder
    // const fileName = 'smartsuq.png'; // Replace with the name of the file in the assets folder

    this.http.get(`assets/${fileName}`, { responseType:'blob' }).subscribe((response: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(response);
      downloadLink.download = fileName; // Set the download link's name to the actual file name
      downloadLink.click();
    });
  }



}
