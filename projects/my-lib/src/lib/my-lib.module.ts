import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';



@NgModule({
  declarations: [MyLibComponent, Page1Component, Page2Component],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
