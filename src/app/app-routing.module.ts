import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainsComponent } from './complains/complains.component';

const routes: Routes = [
  { path: ``, redirectTo: `complains`, pathMatch: `full` },
  { path: `complains`, component: ComplainsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
