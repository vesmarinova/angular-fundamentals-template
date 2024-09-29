import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const  routes: Routes = [
    { path: '', loadChildren: () => import('./features/course-info/course-info.module').then(m => m.CourseInfoModule) },
    { path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    { path: '', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
   ];
 

@NgModule({  
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})


export class AppRoutingModule { }



