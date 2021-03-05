import {Routes} from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

export const CoursePagesRoutes: Routes=[
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent
  },
]
