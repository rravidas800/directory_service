import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageDirectoryComponent } from './manage-directory/manage-directory.component';
import { AddDirectoryComponent } from './add-directory/add-directory.component';

const routes: Routes = [
  {path:"master/manage-directory",component:ManageDirectoryComponent},
  {path:"master/directory/add",component:AddDirectoryComponent},
  {path:"master/directory/edit/:id",component:AddDirectoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
