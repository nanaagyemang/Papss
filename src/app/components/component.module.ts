import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from "@angular/router";
import { LoaderComponent } from './loader/loader.component';




const components: any =[
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoaderComponent
];

@NgModule({
    declarations: [...components, FooterComponent, BodyComponent, LoaderComponent],
    imports: [
      RouterModule,
      CommonModule
    ],
    exports: [...components],
    providers: [],
  })
  export class ComponentsModule {}