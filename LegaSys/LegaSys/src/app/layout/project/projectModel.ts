export class Issue {
  id: number;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
}
export class ProjectAll {
  ProjectID: number;
  Title: string;
  Description: string;
  Client_ID: number;
  //ClientDetailID: number;
  ProjectDomain_ID: number;
  ProjectDomain: string;
  Status: number;
  Created_By: number;
  Updated_By: number;
  Created_Date: Date;
  Updated_Date: Date;
  ClientName: string;
  ClientStatus: boolean;
  Address: string;
  EmailID: string;
  EmailID2: string;
  CoClient: string;
  EmailID3: string;
  Country: string;
  CoClient2: string;
  CoClient3: string;
  CoClient4: string;
  DomainName: string;
  EmailID4: string;
  ProjectDomainName: string;
  //Resource_ID: number;
  //ResourceName: string;
  ProjectTaskID: number;
  ProjectName: string;
  TaskTitle: string;
  TaskDescription: string;
  TaskAttachmentID: number;
  TaskAttachmentName: string;
  ProjectSubTaskID: number;
  ProjectSubTaskName: string;
  ProjectResourceID: number;
  SubTaskTitle: string;
  SubTaskDescription: string;
  SubTaskAttachmentID: number;
  ResourceFirstname: string;
  ResourceMiddlename: string;
  ResourceLastname: string;
  Remarks: string;
  //TotalExp: number;
  //ResourceEmailId: string;
  //ResourceMobileNumber: string;
  //Resource_IsActive: boolean;
  
  //Master_Shift_ID: number;
  //Shift: string;
  //Master_Location_ID: number;
  //Location: string;
  //ReportingHead_ID: number;
  //ReportingHeadName: string;
  //Master_Role_ID: number;
  //Master_Role: string;
  Start_Date: Date;
  End_Date: Date;
  projectResources:ProjectResources[]=[];


}
export class ProjectResources {
  Resource_ID: number;
  ResourceName: string;
  TotalExp: number;
  ResourceEmailId: string;
  ResourceMobileNumber: number;
  Resource_IsActive: Boolean;
  Master_Shift_ID: number;
  Shift: string;
  Master_Location_ID: number;
  Location: string;
  ReportingHead_ID: number;
  ReportingHeadName: string;
  Master_Role_ID: number;
  Master_Role: string;
  ProjectResourceID: number;
  ResourceStatus: number;
}

export class SResource{
  UserDetail_Id:number;
  ids:number[]=[];
}
