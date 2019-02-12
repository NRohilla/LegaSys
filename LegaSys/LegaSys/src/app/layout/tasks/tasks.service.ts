
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { URLSearchParams } from '@angular/http';
import { TaskModel } from './tasks.component';



@Injectable({
    providedIn: 'root'
})
export class TasksService {



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


        return this.http.get('http://localhost:58164/task/' + ID, { headers: this.getToken() })
    }

    GetAllProjectsTask() {

        return this.http.get('http://localhost:58164/task/getall', { headers: this.getToken() })
    }

    CreateProjectTaskDetail(taskmodel: TaskModel) {
       


        return this.http.post<TaskModel[]>('http://localhost:58164/task/create', taskmodel, { headers: this.getToken() })
    }

    UpdateProjectTaskDetail(taskmodel: TaskModel) {



        return this.http.post<TaskModel[]>('http://localhost:58164/task/update', taskmodel, { headers: this.getToken() })
    }

    DeleteProjectTask(ID) {


        return this.http.delete('http://localhost:58164/task/delete/' + ID, { headers: this.getToken() })
    }

    GetAllProjects() {

        return this.http.get('http://localhost:58164/project/getactive', { headers: this.getToken() })
    }

    public GetAllClients() {

        return this.http.get('http://localhost:58164/client/GetAllClient', { headers: this.getToken() });
    }

   
    public GetUserName() {

        return this.http.get('http://localhost:58164/client/AuthenticateLogin', { headers: this.getToken() });
    }



    GetAllProjectSubTaskbyTaskId(ID) {
   

        return this.http.get('http://localhost:58164/subtask/' + ID, { headers: this.getToken() }) 
    }


    public CreateProjectSubTask(ID,subtaskmodel: TaskModel) {
        
      
        return this.http.post<TaskModel[]>('http://localhost:58164/subtask/create/' +ID , subtaskmodel, { headers: this.getToken() });
    }


    UpdateProjectSubTaskDetail(subtaskmodel: TaskModel) {
      

        return this.http.post<TaskModel[]>('http://localhost:58164/subtask/update/', subtaskmodel, { headers: this.getToken() });
    }


     public addAttechmentatServer(formData:FormData) {
        
        return this.http.post('http://localhost:58164/attachment/create/', formData, { headers: this.getToken() });
     }

       public GetTaskStatus()
       {
          
         return this.http.get('http://localhost:58164/task/getstatus/' ,{ headers: this.getToken() })
       }

       
       public GetTaskPriority()
       {
         
         return this.http.get('http://localhost:58164/task/getpriority/' ,{ headers: this.getToken() })
       }

       
       public GetTaskRisk()
       {
        
         return this.http.get('http://localhost:58164/task/getrisk/' ,{ headers: this.getToken() })
       }
    
       public GetTaskAssignee()
       {
        
         return this.http.get('http://localhost:58164/resource/getall/' ,{ headers: this.getToken() })
       }


       public GetTaskActivity()
       {
        
         return this.http.get('http://localhost:58164/task/getactivity/' ,{ headers: this.getToken() })
       }

       public CheckIsTaskExsists(taskValue)     
       {
         
        return this.http.get('http://localhost:58164/task/isexsists/?taskname=' + taskValue,{ headers:this.getToken()} )

       }


       public CheckIsSubTaskExsists(subtaskValue)     
       {
         
        return this.http.get('http://localhost:58164/subtask/isexsists/?subtaskname=' + subtaskValue,{ headers:this.getToken()} )

       }

  

  
}
