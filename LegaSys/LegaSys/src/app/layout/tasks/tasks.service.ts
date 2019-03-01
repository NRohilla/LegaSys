
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { TaskModel } from './tasks.component';
import { environment } from '../../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class TasksService {
    baseUrl = environment.BaseAPIURL; 


    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
    }

    getToken() {
        var token = this.storage.get('UserToken');
        if (token != null) {
            var bearerToken = 'Bearer ' + token.access_token;
            let newHeaders = new HttpHeaders();
            newHeaders = newHeaders.append('Authorization', bearerToken);
            return newHeaders;
        }
    }

    headers: any;

    GetProjectTaskbyId(ID) {
       
        return this.http.get(this.baseUrl+'/task/' + ID, { headers: this.getToken() })
    }

    GetAllProjectsTask() {

        return this.http.get(this.baseUrl +'/task/getall', { headers: this.getToken() })
    }

    CreateProjectTaskDetail(taskmodel: TaskModel) {
        debugger
       


        return this.http.post<TaskModel[]>(this.baseUrl +'/task/create', taskmodel, { headers: this.getToken() })
    }

    UpdateProjectTaskDetail(taskmodel: TaskModel) {



        return this.http.post<TaskModel[]>(this.baseUrl +'/task/update', taskmodel, { headers: this.getToken() })
    }

    DeleteProjectTask(ID) {


        return this.http.delete(this.baseUrl +'/task/delete/' + ID, { headers: this.getToken() })
    }

    GetAllProjects() {
        debugger;

        return this.http.get(this.baseUrl +'/project/onresource')
    }

    public GetAllClients() {

        return this.http.get(this.baseUrl +'/client/GetAllClient', { headers: this.getToken() });
    }

   
    public GetUserName() {

        return this.http.get(this.baseUrl +'/client/AuthenticateLogin', { headers: this.getToken() });
    }



    GetAllProjectSubTaskbyTaskId(ID) {
   

        return this.http.get(this.baseUrl +'/subtask/' + ID, { headers: this.getToken() }) 
    }


    public CreateProjectSubTask(ID,subtaskmodel: TaskModel) {
        
      
        return this.http.post<TaskModel[]>(this.baseUrl +'/subtask/create/' +ID , subtaskmodel, { headers: this.getToken() });
    }


    UpdateProjectSubTaskDetail(subtaskmodel: TaskModel) {
      

        return this.http.post<TaskModel[]>(this.baseUrl +'/subtask/update/', subtaskmodel, { headers: this.getToken() });
    }


     public addAttechmentatServer(formData:FormData) {
        
         return this.http.post(this.baseUrl +'/attachment/create/', formData, { headers: this.getToken() });
     }

       public GetTaskStatus()
       {
          
           return this.http.get(this.baseUrl +'/task/getstatus/' ,{ headers: this.getToken() })
       }

       
       public GetTaskPriority()
       {
         
           return this.http.get(this.baseUrl +'/task/getpriority/' ,{ headers: this.getToken() })
       }

       
       public GetTaskRisk()
       {
        
           return this.http.get(this.baseUrl +'/task/getrisk/' ,{ headers: this.getToken() })
       }
    
       public GetTaskAssignee(ID)
       {
           debugger;
        
           return this.http.get(this.baseUrl +'/project/getallresourceonproject/' +ID,{ headers: this.getToken() })
       }


       public GetTaskActivity()
       {
        
           return this.http.get(this.baseUrl +'/task/getactivity/' ,{ headers: this.getToken() })
       }

       public CheckIsTaskExsists(taskValue)     
       {
         
           return this.http.get(this.baseUrl +'/task/isexsists/?taskname=' + taskValue,{ headers:this.getToken()} )

       }


       public CheckIsSubTaskExsists(subtaskValue)     
       {
         
           return this.http.get(this.baseUrl +'/subtask/isexsists/?subtaskname=' + subtaskValue,{ headers:this.getToken()} )

       }

  

  
}
