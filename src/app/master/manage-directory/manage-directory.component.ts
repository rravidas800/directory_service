import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-manage-directory',
  templateUrl: './manage-directory.component.html',
  styleUrls: ['./manage-directory.component.scss']
})
export class ManageDirectoryComponent {
  appTitle:string=environment.app_title
}
