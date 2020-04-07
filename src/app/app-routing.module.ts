import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordiannewComponent } from './accordiannew/accordiannew.component';


const routes: Routes = [
  {
    path: '',
    component: AccordiannewComponent,
    data: { title: 'Items', subtitle: 'Item List' }
  }
  // ,
  // {
  //   path: 'new',
  //   component: AccordiannewComponent,
  //   data: { title: 'Items', subtitle: 'Item List' }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
