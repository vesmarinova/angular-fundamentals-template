import { Component, Input } from "@angular/core";
import { faTrashCan,faPencil  } from "@fortawesome/free-solid-svg-icons";

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

  showCourseBtnText:string = "Show course";

  deleteIcon = faTrashCan;
  editIcon  = faPencil;
 
}
