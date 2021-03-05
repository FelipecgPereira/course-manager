import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { FormsModule } from '@angular/forms';
import { CoursePagesRoutes } from './course.routing';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { StarModule } from '../shared/components/star/star.module';


@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent,


  ],
  imports:[
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild(CoursePagesRoutes)
  ],
  exports:[

  ]
})
export class CourseModule{}
