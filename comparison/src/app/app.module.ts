import 'ag-grid-enterprise';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { KendoComponent } from './kendo/kendo.component';
import { MaterialComponent } from './material/material.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { KendohomeComponent } from './kendo/kendohome/kendohome.component';
import { ButtonComponent } from './kendo/button/button.component';
import { MaterialbuttonComponent } from './material/materialbutton/materialbutton.component';
import { MaterialhomeComponent } from './material/materialhome/materialhome.component';
import { MaterialdropdownComponent } from './material/materialdropdown/materialdropdown.component';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field'; 
// import { MatInputModule } from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { KendodropdownComponent } from './kendo/kendodropdown/kendodropdown.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe, JsonPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { KendodateinputsComponent } from './kendo/kendodateinputs/kendodateinputs.component';
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FormFieldModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipsModule } from "@progress/kendo-angular-tooltip";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { KendotextboxComponent } from './kendo/kendotextbox/kendotextbox.component';
import { MaterialtextboxComponent } from './material/materialtextbox/materialtextbox.component';
import { KendobuttonComponent } from './kendo/kendobutton/kendobutton.component';
import { KendoiconComponent } from './kendo/kendoicon/kendoicon.component';
import { MaterialiconComponent } from './material/materialicon/materialicon.component';
import { MaterialprogressbarComponent } from './material/materialprogressbar/materialprogressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { KendoprogressbarComponent } from './kendo/kendoprogressbar/kendoprogressbar.component';
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";
import { MaterialpaginatorComponent } from './material/materialpaginator/materialpaginator.component';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { PagerComponent } from './kendo/pager/pager.component';
import { PagerModule } from "@progress/kendo-angular-pager";
import { PagerComponent } from './kendo/pager/pager.component';
import { DestinationComponent } from './kendo/pager/destination.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { KendodialogsComponent } from './kendo/kendodialogs/kendodialogs.component';
import { MaterialdialogsComponent } from './material/materialdialogs/materialdialogs.component';
import { DialogsModule } from "@progress/kendo-angular-dialog";
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MaterialwizardComponent } from './material/materialwizard/materialwizard.component';
import { KendowizardComponent } from './kendo/kendowizard/kendowizard.component';
import {MatStepperModule} from '@angular/material/stepper';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { MaterialradiobuttonComponent } from './material/materialradiobutton/materialradiobutton.component';
import { KendoradiobuttonComponent } from './kendo/kendoradiobutton/kendoradiobutton.component';
import {MatRadioModule} from '@angular/material/radio';
import { MaterialtoggleComponent } from './material/materialtoggle/materialtoggle.component';
import { KendotoggleComponent } from './kendo/kendotoggle/kendotoggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MaterialcheckboxComponent } from './material/materialcheckbox/materialcheckbox.component';
import { KendocheckboxComponent } from './kendo/kendocheckbox/kendocheckbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { KendotooltipComponent } from './kendo/kendotooltip/kendotooltip.component';
import { MaterialtooltipComponent } from './material/materialtooltip/materialtooltip.component';
import {MatCardModule} from '@angular/material/card';
import { AggridComponent } from './aggrid/aggrid.component';
import { KendopopupComponent } from './kendo/kendopopup/kendopopup.component';
import { MaterialpopupComponent } from './material/materialpopup/materialpopup.component';
import { PopupModule } from "@progress/kendo-angular-popup";
import {MatListModule} from '@angular/material/list'; 
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KendomenuComponent } from './kendo/kendomenu/kendomenu.component';
import { MaterialmenuComponent } from './material/materialmenu/materialmenu.component';
import { MenusModule } from "@progress/kendo-angular-menu";
import {MatMenuModule} from '@angular/material/menu';
import { KendotabComponent } from './kendo/kendotab/kendotab.component';
import { MaterialtabComponent } from './material/materialtab/materialtab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { KendoaccordionComponent } from './kendo/kendoaccordion/kendoaccordion.component';
import { MaterialaccordionComponent } from './material/materialaccordion/materialaccordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { KendoloaderComponent } from './kendo/kendoloader/kendoloader.component';
import { MaterialloaderComponent } from './material/materialloader/materialloader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { KendotoastersComponent } from './kendo/kendotoasters/kendotoasters.component';
import { MaterialtoastersComponent } from './material/materialtoasters/materialtoasters.component';
import { NotificationService } from '@progress/kendo-angular-notification';
import { MaterialtreelistComponent } from './material/materialtreelist/materialtreelist.component';
import { TreeListModule } from "@progress/kendo-angular-treelist";
import { KendotreelistComponent } from './kendo/kendotreelist/kendotreelist.component';
import { ExcelModule } from "@progress/kendo-angular-treelist";
import { PDFModule } from "@progress/kendo-angular-treelist";
import { MatTreeModule } from '@angular/material/tree';
import { KendochatComponent } from './kendo/kendochat/kendochat.component';
import { MaterialchatComponent } from './material/materialchat/materialchat.component';
import { ConversationalUIModule } from "@progress/kendo-angular-conversational-ui";
import { KendoattachmentComponent } from './kendo/kendoattachment/kendoattachment.component';
import { MaterialattachmentComponent } from './material/materialattachment/materialattachment.component';
import { KendoqrcodeComponent } from './kendo/kendoqrcode/kendoqrcode.component';
import { MaterialqrcodeComponent } from './material/materialqrcode/materialqrcode.component';
import { BarcodesModule } from "@progress/kendo-angular-barcodes";
import { AggridbasicComponent } from './aggrid/aggridbasic/aggridbasic.component';
import { AgGridAngular } from 'ag-grid-angular';
import { AggridcolumnfilterComponent } from './aggrid/aggridcolumnfilter/aggridcolumnfilter.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AggridthemeComponent } from './aggrid/aggridtheme/aggridtheme.component';
import { BaseComponent } from './base/base.component';
// import { HighchartsChartModule } from 'highcharts-angular';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { AggridselectionComponent } from './aggrid/aggridselection/aggridselection.component';
import { AggrideditingComponent } from './aggrid/aggridediting/aggridediting.component';
import { AggridgroupingComponent } from './aggrid/aggridgrouping/aggridgrouping.component';
import { AggridmasterdetailComponent } from './aggrid/aggridmasterdetail/aggridmasterdetail.component';
import { AggridtoolpanelComponent } from './aggrid/aggridtoolpanel/aggridtoolpanel.component';
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { AggridimportexportComponent } from './aggrid/aggridimportexport/aggridimportexport.component';
import { AggridcolumnComponent } from './aggrid/aggridcolumn/aggridcolumn.component';
import { AggridrowComponent } from './aggrid/aggridrow/aggridrow.component';
import { AggridcellComponent } from './aggrid/aggridcell/aggridcell.component';

import { CompanyLogoRenderer } from "./aggrid/aggridcell/companyLogoRenderer.component";
import { CompanyRenderer } from "./aggrid/aggridcell/companyRenderer.component";
import { CustomButtonComponent } from "./aggrid/aggridcell/customButtonComponent.component";
import { MissionResultRenderer } from "./aggrid/aggridcell/missionResultRenderer.component";
import { PriceRenderer } from "./aggrid/aggridcell/priceRenderer.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    KendoComponent,
    MaterialComponent,
    KendohomeComponent,
    ButtonComponent,
    MaterialbuttonComponent,
    MaterialhomeComponent,
    MaterialdropdownComponent,
    KendodropdownComponent,
    KendodateinputsComponent,
    
    KendotextboxComponent,
    MaterialtextboxComponent,
    KendobuttonComponent,
    KendoiconComponent,
    MaterialiconComponent,
    MaterialprogressbarComponent,
    KendoprogressbarComponent,
    MaterialpaginatorComponent,
    PagerComponent,
    DestinationComponent,
    KendodialogsComponent,
    MaterialdialogsComponent,
    MaterialwizardComponent,
    KendowizardComponent,
    MaterialradiobuttonComponent,
    KendoradiobuttonComponent,
    MaterialtoggleComponent,
    KendotoggleComponent,
    MaterialcheckboxComponent,
    KendocheckboxComponent,
    KendotooltipComponent,
    MaterialtooltipComponent,
    AggridComponent,
    KendopopupComponent,
    MaterialpopupComponent,
    KendomenuComponent,
    MaterialmenuComponent,
    KendotabComponent,
    MaterialtabComponent,
    KendoaccordionComponent,
    MaterialaccordionComponent,
    KendoloaderComponent,
    MaterialloaderComponent,
    KendotoastersComponent,
    MaterialtoastersComponent,
    MaterialtreelistComponent,
    KendotreelistComponent,
    KendochatComponent,
    MaterialchatComponent,
    KendoattachmentComponent,
    MaterialattachmentComponent,
    KendoqrcodeComponent,
    MaterialqrcodeComponent,
    AggridbasicComponent,
    AggridcolumnfilterComponent,
    DashboardComponent,
    AggridthemeComponent,
    AggridselectionComponent,
    AggrideditingComponent,
    AggridgroupingComponent,
    AggridmasterdetailComponent,

    AggridtoolpanelComponent,
    AggridimportexportComponent,
    AggridcolumnComponent,
    AggridrowComponent,
    AggridcellComponent,

    BaseComponent,

    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    InputsModule,
    LabelModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatFormFieldModule,
    // MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
     MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,

    IntlModule,
    ButtonsModule,
    DateInputsModule,
    FormFieldModule,
    IconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    ProgressBarModule,
    MatCardModule,
    PopupModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    PagerModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    DialogsModule,
    MatDialogModule,
    MatStepperModule,
    LayoutModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTooltipModule,
    TooltipsModule,
    MatListModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MenusModule,
    MatMenuModule,
    MatTabsModule,
    CdkAccordionModule,
    MatProgressSpinnerModule,
    IndicatorsModule,
    TreeListModule,
    PDFModule,
    ExcelModule,
    MatTreeModule,
    ConversationalUIModule,
    BarcodesModule,
    MatNativeDateModule,
    AgGridAngular,
    HttpClientModule,
    NgbModule,MatExpansionModule,
CompanyLogoRenderer,
CompanyRenderer,
CustomButtonComponent,
MissionResultRenderer,
PriceRenderer,
    // HighchartsChartModule
    // NotificationService
    
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
