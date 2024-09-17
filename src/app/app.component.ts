import { Component } from "@angular/core";
import { faTrashCan,faPencil  } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "courses-app";

  //header props
  isLogged: boolean = true;
  logged: string = "logout";
  notLogged: string = "login";

  //info props
  infoTitle = "Your List Is Empty";
  infoText = "Please use ’Add New Course’ button to add your first course";
  addNewCourseBtnText = "Add new course";

  //course-card
  deleteIcon = faTrashCan;
  editIcon  = faPencil;
}
