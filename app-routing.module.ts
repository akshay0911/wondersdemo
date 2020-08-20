import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wonder1Component } from './wonder1/wonder1.component';
import { Wonder2Component } from './wonder2/wonder2.component';
import { Wonder3Component } from './wonder3/wonder3.component';
import { Wonder4Component } from './wonder4/wonder4.component';
import { Wonder5Component } from './wonder5/wonder5.component';
import { Wonder6Component } from './wonder6/wonder6.component';
import { Wonder7Component } from './wonder7/wonder7.component';

const routes: Routes = [
  {path:'wonder1', component:Wonder1Component},
  {path:'wonder2', component:Wonder2Component },
  {path:'wonder3', component:Wonder3Component },
  {path:'wonder4', component:Wonder4Component},
  {path:'wonder5', component:Wonder5Component},
  {path:'wonder6', component:Wonder6Component },
  {path:'wonder7',  component:Wonder7Component}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
