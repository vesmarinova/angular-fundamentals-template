import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';




@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[CoursesListComponent, 
    CoursesComponent
  ]
})
export class CoursesModule { }
