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
import { KendodialogsComponent } from './kendo/kendodialogs/kendodialogs.component';
import { MaterialdialogsComponent } from './material/materialdialogs/materialdialogs.component';
import { MaterialwizardComponent } from './material/materialwizard/materialwizard.component';
import { KendowizardComponent } from './kendo/kendowizard/kendowizard.component';
import { MaterialradiobuttonComponent } from './material/materialradiobutton/materialradiobutton.component';
import { KendoradiobuttonComponent } from './kendo/kendoradiobutton/kendoradiobutton.component';
import { KendotoggleComponent } from './kendo/kendotoggle/kendotoggle.component';
import { MaterialtoggleComponent } from './material/materialtoggle/materialtoggle.component';
import { MaterialcheckboxComponent } from './material/materialcheckbox/materialcheckbox.component';
import { KendocheckboxComponent } from './kendo/kendocheckbox/kendocheckbox.component';
import { KendotooltipComponent } from './kendo/kendotooltip/kendotooltip.component';
import { MaterialtooltipComponent } from './material/materialtooltip/materialtooltip.component';
import { AggridComponent } from './aggrid/aggrid.component';
import { KendopopupComponent } from './kendo/kendopopup/kendopopup.component';
import { MaterialpopupComponent } from './material/materialpopup/materialpopup.component';
import { MaterialmenuComponent } from './material/materialmenu/materialmenu.component';
import { KendomenuComponent } from './kendo/kendomenu/kendomenu.component';
import { KendotabComponent } from './kendo/kendotab/kendotab.component';
import { MaterialtabComponent } from './material/materialtab/materialtab.component';
import { MaterialaccordionComponent } from './material/materialaccordion/materialaccordion.component';
import { KendoaccordionComponent } from './kendo/kendoaccordion/kendoaccordion.component';
import { MaterialloaderComponent } from './material/materialloader/materialloader.component';
import { KendoloaderComponent } from './kendo/kendoloader/kendoloader.component';
import { KendotoastersComponent } from './kendo/kendotoasters/kendotoasters.component';
import { MaterialtoastersComponent } from './material/materialtoasters/materialtoasters.component';
import { MaterialtreelistComponent } from './material/materialtreelist/materialtreelist.component';
import { KendotreelistComponent } from './kendo/kendotreelist/kendotreelist.component';
import { KendochatComponent } from './kendo/kendochat/kendochat.component';
import { MaterialchatComponent } from './material/materialchat/materialchat.component';
import { KendoattachmentComponent } from './kendo/kendoattachment/kendoattachment.component';
import { MaterialattachmentComponent } from './material/materialattachment/materialattachment.component';
import { MaterialqrcodeComponent } from './material/materialqrcode/materialqrcode.component';
import { KendoqrcodeComponent } from './kendo/kendoqrcode/kendoqrcode.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aggrid', component: AggridComponent },
  {path:'kendo',component:KendoComponent,
  children: [
    {
      path:'', component: ButtonComponent
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
    },
    {
      path:'dialogs',component:KendodialogsComponent
    },
    {
      path:'wizard',component:KendowizardComponent
    },
    {
      path:'radiobutton',component:KendoradiobuttonComponent
    }
    ,
    {
      path:'toggle',component:KendotoggleComponent
    },
    {
      path:'checkbox',component:KendocheckboxComponent
    },
    {
      path:'tooltip',component:KendotooltipComponent
    },
    {
      path:'popup',component:KendopopupComponent
    },
    {
      path:'menu',component:KendomenuComponent
    },
    {
      path:'tab',component:KendotabComponent
    },
    {
      path:'accordion',component:KendoaccordionComponent
    },
    {
      path:'loader',component:KendoloaderComponent
    },
    {
      path:'toasters',component:KendotoastersComponent
    },
    {
      path:'treelist',component:KendotreelistComponent
    },
    {
      path:'chat',component:KendochatComponent
    },
    {
      path:'attachment',component:KendoattachmentComponent
    },
    {
      path:'qrcode',component:KendoqrcodeComponent
    }

    
  ]
  },
  {path:'material',component:MaterialComponent,
  children: [
    {
      path:'', component: MaterialbuttonComponent
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
    },
    {
      path:'dialogs',component:MaterialdialogsComponent
    },
    {
      path:'wizard',component:MaterialwizardComponent
    },
    {
      path:'radiobutton',component:MaterialradiobuttonComponent
    },
    {
      path:'toggle',component:MaterialtoggleComponent
    },
    {
      path:'checkbox',component:MaterialcheckboxComponent
    },
    {
      path:'tooltip',component:MaterialtooltipComponent
    },
    {
      path:'popup',component:MaterialpopupComponent
    },
    {
      path:'menu',component:MaterialmenuComponent
    },
    {
      path:'tab',component:MaterialtabComponent
    },
    {
      path:'accordion',component:MaterialaccordionComponent
    },
    {
      path:'loader',component:MaterialloaderComponent
    },
    {
      path:'toasters',component:MaterialtoastersComponent
    },
    {
      path:'treelist',component:MaterialtreelistComponent
    },
    {
      path:'chat',component:MaterialchatComponent
    },
    {
      path:'attachment',component:MaterialattachmentComponent
    },
    {
      path:'qrcode',component:MaterialqrcodeComponent
    }


    
    
    
  ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
