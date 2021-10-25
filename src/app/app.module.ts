import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { GridComponent } from './grid/grid.component';
import { FilterService, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { TableComponent } from './table/table.component';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    GridComponent,
    TableComponent,
    FileuploaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckBoxModule,
    DropDownListModule,
    GridModule,
    RadioButtonModule,
    TimePickerModule,
    ToastModule,
    UploaderModule,
    MenuModule,
    FileManagerModule

  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
