import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MasterRoutingModule } from './master-routing.module';
import { ManageDirectoryComponent } from './manage-directory/manage-directory.component';
import { AddDirectoryComponent } from './add-directory/add-directory.component';


@NgModule({
  declarations: [
    ManageDirectoryComponent,
    AddDirectoryComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
