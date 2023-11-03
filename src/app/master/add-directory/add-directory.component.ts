import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-add-directory',
  templateUrl: './add-directory.component.html',
  styleUrls: ['./add-directory.component.scss']
})
export class AddDirectoryComponent {
  appTitle:string=environment.app_title
  formData:any={}
  selectedFile:File|null=null

  directoryForm:any;

  constructor(private fb:FormBuilder,private directoryService:DirectoryService){}

  ngOnInit(){
   
    this.directoryForm=this.fb.group({
      name:['',Validators.required],
      profession:['',Validators.required],
      contact_no:['',[Validators.minLength(10)]],
      email_id:['',Validators.email],
      address:[''],
      image:[''],
      description:['']
    });
  }

  onSubmit(form:FormGroup)
  {
    if(form.valid)
    {
      console.log(form.value);
      const formFieldData=new FormData()
     
        Object.entries(form.value).forEach((entry:any)=>{
          const [key,value]=entry
          if(key!='image')
            formFieldData.append(key,value)
        })
        if(this.selectedFile)
        {
          formFieldData.append('image',this.selectedFile,this.selectedFile.name)
        }

        this.directoryService.submitDirectoryData(formFieldData).subscribe(result=>{
          console.log(result);
        })

        /* console.log(formFieldData.getAll);
        console.log(formFieldData.getAll('image'));   */
      
    }else{
      console.log("some field is manditory");
    }
  }


  chooseImage(e:any){
    const fileLists:FileList=e.target.files
    this.selectedFile=fileLists[0];
  }


  /*-------------code for ngmodel to process a form-----------*/
  /* chooseImage(e:any){
    const fileLists:FileList=e.target.files
    this.selectedFile=fileLists[0];
  }

  onSubmit(){
    console.log(this.formData);
    const formData=new FormData();

    Object.entries(formData).forEach(entry=>{
      const [key,value]=entry
      formData.append(key,value);
    })

    if(this.selectedFile)
    {
      formData.append('image',this.selectedFile,this.selectedFile.name)
    }
    console.log(formData.getAll);
    console.log(formData.getAll('image'));    
  } */
  /*----------------End------------------*/

  
}
