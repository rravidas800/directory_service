import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

@Injectable({
  providedIn:'root'
})

export class DirectoryComponent {
  title:string=environment.app_title
}
