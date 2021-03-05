import { Error404Routes } from './components/404/error404.routing';
import { RouterModule } from '@angular/router';

import { NgModule } from "@angular/core";
import { NavBarComponent } from './components/navBar/nav-bar.component';
import { Error404Component } from './components/404/error404.component';

@NgModule({
  declarations:[
    NavBarComponent,

  ],
  imports:[
    RouterModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class CoreModule{

}
