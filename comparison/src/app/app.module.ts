import { NgModule } from '@angular/core';
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
import { KendoheaderComponent } from './kendo/kendoheader/kendoheader.component';
import { MaterialbuttonComponent } from './material/materialbutton/materialbutton.component';
import { MaterialhomeComponent } from './material/materialhome/materialhome.component';
import { MaterialheaderComponent } from './material/materialheader/materialheader.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    KendoComponent,
    MaterialComponent,
    KendohomeComponent,
    ButtonComponent,
    KendoheaderComponent,
    MaterialbuttonComponent,
    MaterialhomeComponent,
    MaterialheaderComponent,
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


    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    PagerModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
