import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransformComponent } from './modules/transform/transform.component';

const routes: Routes = [
  {path: 'transform', component: TransformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
