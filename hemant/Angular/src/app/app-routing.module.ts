import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {AddEditFormComponent} from './add-edit-form/add-edit-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [];

@NgModule({
  declarations: [AddEditFormComponent, DetailsComponent],
  imports: [
    RouterModule.forRoot(routes),
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule, AddEditFormComponent, DetailsComponent]
})
export class AppRoutingModule {
}
