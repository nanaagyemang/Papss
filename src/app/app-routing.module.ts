import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path : 'home',
    loadChildren: ()=> import('../app/home-layout/home-layout.module').then((m)=>m.HomeLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
