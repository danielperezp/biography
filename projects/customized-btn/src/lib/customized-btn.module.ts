import { NgModule } from '@angular/core';
import { CustomizedBtnComponent } from './customized-btn.component';
import { CustomBtnDirective } from './directive/custom-btn.directive';



@NgModule({
  declarations: [CustomizedBtnComponent, CustomBtnDirective],
  imports: [
  ],
  exports: [CustomizedBtnComponent, CustomBtnDirective]
})
export class CustomizedBtnModule { }
