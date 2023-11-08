import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import {  DirectoryService } from 'src/app/services/directory.service'; 

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-manage-directory',
  templateUrl: './manage-directory.component.html',
  styleUrls: ['./manage-directory.component.scss']
})
export class ManageDirectoryComponent {

  constructor(private directoryService:DirectoryService){}

  appTitle:string=environment.app_title
  searchParam:any;
  arrAllData:any=[];
  ngOnInit(){
    this.directoryService.getDirectoryList(this.searchParam).subscribe(result=>{
      if(result.status=="success") 
      {
        this.arrAllData=result.result
        console.log(this.arrAllData)
      }else{
        this.arrAllData=[];
      } 
    })
  }
}
