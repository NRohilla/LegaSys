export class Issue {
  id: number;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
}
export class  Project {
    ProjectID: number;
    Description: string;
    ClientName: string;
    Title: string;
    DomainName: string;
    ClientDetailID: number;
    // updated_at: string;
  }
  export class Client{
    ClientDetailID:number;
    ClientName:string;

  }
  export class Domain{
    TechDomainID:number;
    DoaminName:number;
    IsActive:boolean;
  }
  export class Resource{
    FirstName:string;
    MiddleName:string;
    LastName:string;
    TotalExperience:number;
    EmailID:string;
    MobileNumber:number;
    IsActive:boolean;
    Remarks:string;
    Shift:number;
    Location:number;
    Role:number;
  }
  