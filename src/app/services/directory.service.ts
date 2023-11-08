import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private APP_URL=environment.apiUrl
  constructor(private http:HttpClient) { }
   
  submitDirectoryData(formData:FormData):Observable<any>{
     return this.http.post(this.APP_URL+"/directory/save",formData)
  }
  getDirectoryList(param:JSON):Observable<any>{
    return this.http.post(this.APP_URL+"/directory/view",param);
  }

}
