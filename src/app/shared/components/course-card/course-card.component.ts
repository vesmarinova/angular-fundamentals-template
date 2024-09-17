import { Component, Input, Output } from "@angular/core";


interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent {
  
  @Input() course!: Course;
  @Input() isEditable: boolean = true;
  @Output () clickOnShow = () => {
    console.log('Show course button clicked');

  };
  
  showCourseBtnText:string = "Show course";

 
}
