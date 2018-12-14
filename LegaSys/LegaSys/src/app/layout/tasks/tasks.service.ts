
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

    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) 
    {
    }
    headers: any;

    GetProjectTaskbyId(ID) 
    {
        
                
        return this.http.get('http://localhost:58164/task/'+ ID)
    }

    GetAllProjectsTask()
    {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');

        return this.http.get('http://localhost:58164/task/getall',this.headers)
    }

    CreateProjectTaskDetail(taskmodel : TaskModel)
    {
     
            
        return this.http.post<TaskModel[]>('http://localhost:58164/task/create',taskmodel)
    }

    UpdateProjectTaskDetail(taskmodel : TaskModel)
    {
        
        
            
        return this.http.post<TaskModel[]>('http://localhost:58164/task/update',taskmodel)
    }

    DeleteProjectTask(ID)
    {
        
            
        return this.http.get<TaskModel[]>('http://localhost:58164/task/{id}/delete'+ID)
    }
    
    GetAllProjects()
    {
        debugger;
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
     
        return this.http.get('http://localhost:58164/project/getall', this.headers)
    }    

    public GetAllClients() 
    {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/client/GetAllClient', this.headers);
    }

    errorHandler(error:Response)
    {
        console.log(error);
        return throwError(error);
    }
   
    public GetUserName()
    {

        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/client/AuthenticateLogin', this.headers);
    }


    public GetAllProjectsSubTask()
    {

        return this.http.get('http://localhost:58164/subtask/getall')

    }

    GetProjectSubTaskbyId(ID)
    {
       debugger; 
                
        return this.http.get('http://localhost:58164/task/'+ ID)
    }


    public CreateProjectSubTask(id:number,subtaskDetail:TaskModel[])
    {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');

            return this.http.post<TaskModel[]>('http://localhost:58164/subtask/create/'+id, subtaskDetail);
    }
   
}
