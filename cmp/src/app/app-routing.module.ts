import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KendoComponent } from './kendo/kendo.component';
import { MaterialComponent } from './material/material.component';
import { KendohomeComponent } from './kendo/kendohome/kendohome.component';
import { ButtonComponent } from './kendo/button/button.component';
import { MaterialhomeComponent } from './material/materialhome/materialhome.component';
import { MaterialbuttonComponent } from './material/materialbutton/materialbutton.component';
import { MaterialdropdownComponent } from './material/materialdropdown/materialdropdown.component';
import { KendodropdownComponent } from './kendo/kendodropdown/kendodropdown.component';
import { KendodateinputsComponent } from './kendo/kendodateinputs/kendodateinputs.component';
import { MaterialdateinputsComponent } from './material/materialdateinputs/materialdateinputs.component';
import { KendotextboxComponent } from './kendo/kendotextbox/kendotextbox.component';
import { MaterialtextboxComponent } from './material/materialtextbox/materialtextbox.component';
import { KendobuttonComponent } from './kendo/kendobutton/kendobutton.component';
import { KendoiconComponent } from './kendo/kendoicon/kendoicon.component';
import { MaterialiconComponent } from './material/materialicon/materialicon.component';
import { MaterialprogressbarComponent } from './material/materialprogressbar/materialprogressbar.component';
import { KendoprogressbarComponent } from './kendo/kendoprogressbar/kendoprogressbar.component';
import { MaterialpaginatorComponent } from './material/materialpaginator/materialpaginator.component';
import { PagerComponent } from '@progress/kendo-angular-pager';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path:'kendo',component:KendoComponent,
  children: [
    {
      path:'', component: KendohomeComponent
    },
    {
      path:'button', component: ButtonComponent
    },
    {
      path:'dropdown', component: KendodropdownComponent
    },
    {
      path:'dateinputs',component:KendodateinputsComponent
    },
    {
      path:'textbox',component:KendotextboxComponent
    },
    {
      path:'button',component:KendobuttonComponent
    },
    {
      path:'icon',component:KendoiconComponent
    },
    {
      path:'progressbar',component:KendoprogressbarComponent
    },
    {
      path:'pager',component:PagerComponent
    }
  ]
  },
  {path:'material',component:MaterialComponent,
  children: [
    {
      path:'', component: MaterialhomeComponent
    },
    {
      path:'button', component: MaterialbuttonComponent
    },
    {
      path:'dropdown', component: MaterialdropdownComponent
    },
    {
      path:'dateinputs',component:MaterialdateinputsComponent
    },
    {
      path:'textbox',component:MaterialtextboxComponent
    },
    {
      path:'icon',component:MaterialiconComponent
    },
    {
      path:'progressbar',component:MaterialprogressbarComponent
    },
    {
      path:'paginator',component:MaterialpaginatorComponent
    }

    
  ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
