import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  findCourse(query: string) {
    console.log(query);
    //add https request for the real search? 
  }
}
