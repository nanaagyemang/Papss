import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from "../components/component.module";
import { RepRegisterComponent } from './rep-register/rep-register.component';
import { SearchbycategoryComponent } from './searchbycategory/searchbycategory.component';
import { SearchbycountryComponent } from './searchbycountry/searchbycountry.component';
import { SearchbydirectoryComponent } from './searchbydirectory/searchbydirectory.component';
import { DemosearchresultsComponent } from './demosearchresults/demosearchresults.component';


const pages: any = [HomeComponent,RegisterComponent];

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent 
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'rep',
        component:RepRegisterComponent
      },
      {
        path:'category',
        component:  SearchbycategoryComponent
      },
      {
        path:'directory',
        component: SearchbydirectoryComponent
      },
      {
        path:'country',
        component: SearchbycountryComponent
      },
      {
        path:'demo',
        component: DemosearchresultsComponent
      }
    ],
  },
];

@NgModule({
    declarations: [...pages,HomeLayoutComponent, RepRegisterComponent, SearchbycategoryComponent, SearchbycountryComponent, SearchbydirectoryComponent, DemosearchresultsComponent],
    exports: [...pages],
    
    imports: [
        RouterModule.forChild(routes),
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class HomeLayoutModule {}
