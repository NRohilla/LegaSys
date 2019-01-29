export class Client {
     //ClientDetailID: number;
     ClientName: string;
     Country: string;
     Address:string;
     CoClient: string;
     CoClient2: string;
     CoClient3: string;
     CoClient4: string;
     EmailID: string;
     EmailID2: string;
     EmailID3: string;
     EmailID4: string;
     Created_By: number;
     Created_date: Date;
     Updated_By: number;
     IsActive: number;
     CompanyName:string;
     CompanyAddress:string;
     ClientCountry:string;
     ClientCountryZip:string;
     CompanyPhone:string;
     ClientCompanyFax:string;
     CoClientDetails:CoClientModal[]=[];
   
}
export class ClientProject{
     ProjectID:number;
      Title:string;
      Description:string;
      Client_ID:number;
      ProjectDomain_ID:number;
      Status:number;
      Created_By:number;
      Updated_By:number;
      Created_Date:Date;
       Updated_Date:Date;
       Start_Date:Date;
       End_Date:Date;
     
 }
 export class CoClientModal{
     Name:string;
     Email:string;
     ContactNo:string;
     Address:string;
     Country:string;
     CoClientID:number;
     ClientDetailID:number;
     Created_By:number;
     Created_Date:Date;
     Updated_By:number;
     Updated_Date:Date;
     
}
