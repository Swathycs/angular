import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path : 'project', component: ProjectComponent},
  {path : 'grid', component: GridComponent},
  {path : 'table', component: TableComponent},
  {path : 'fileuploader', component: FileuploaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
