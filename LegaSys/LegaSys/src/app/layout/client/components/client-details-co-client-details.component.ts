import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from "@angular/forms";
import { Client, CoClientModal } from '../model/client.model';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { DialogComponent } from '../../masters/dialog/dialog.component';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-client-details-co-client-details',
  templateUrl: './client-details-co-client-details.component.html',
  styleUrls: ['./client-details-co-client-details.component.scss']
})
export class ClientDetailsCoClientDetailsComponent implements OnInit {
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Output('onCancel') onCancel = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: Client; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: Client;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one
  @ViewChild(MatSort) sort: MatSort;

  /********************** Created By Shubham Mishra on 8-feb-2019 **************/
  disable: boolean = true; //this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  coClientForm: FormGroup;// this is form group for co client 
  client: Client; // This is model of client
  readOnly: boolean = true;
  showCoClientForm:boolean=false;
  flag:boolean=true;
  displayedColumns: string[] = ['Name', 'Email', 'Address','Contact_no','Action']; // to display values in data table 
  dataSource:any; 
  selectedRowIndex:number=-1;
  dataSourceBackup:any;
  ids:number=-2;
  showUpdateForm:boolean=true;
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filterBasedOptionsForCountryCode:Observable<string[]>;
  CountryList: string[] = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  countries=[
    {
      code: '+7 840',
      name: 'Abkhazia'
    },
    {
      code: '+93',
      name: 'Afghanistan'
    },
    {
      code: '+355',
      name: 'Albania'
    },
    {
      code: '+213',
      name: 'Algeria'
    },
    {
      code: '+1 684',
      name: 'American Samoa'
    },
    {
      code: '+376',
      name: 'Andorra'
    },
    {
      code: '+244',
      name: 'Angola'
    },
    {
      code: '+1 264',
      name: 'Anguilla'
    },
    {
      code: '+1 268',
      name: 'Antigua and Barbuda'
    },
    {
      code: '+54',
      name: 'Argentina'
    },
    {
      code: '+374',
      name: 'Armenia'
    },
    {
      code: '+297',
      name: 'Aruba'
    },
    {
      code: '+247',
      name: 'Ascension'
    },
    {
      code: '+61',
      name: 'Australia'
    },
    {
      code: '+672',
      name: 'Australian External Territories'
    },
    {
      code: '+43',
      name: 'Austria'
    },
    {
      code: '+994',
      name: 'Azerbaijan'
    },
    {
      code: '+1 242',
      name: 'Bahamas'
    },
    {
      code: '+973',
      name: 'Bahrain'
    },
    {
      code: '+880',
      name: 'Bangladesh'
    },
    {
      code: '+1 246',
      name: 'Barbados'
    },
    {
      code: '+1 268',
      name: 'Barbuda'
    },
    {
      code: '+375',
      name: 'Belarus'
    },
    {
      code: '+32',
      name: 'Belgium'
    },
    {
      code: '+501',
      name: 'Belize'
    },
    {
      code: '+229',
      name: 'Benin'
    },
    {
      code: '+1 441',
      name: 'Bermuda'
    },
    {
      code: '+975',
      name: 'Bhutan'
    },
    {
      code: '+591',
      name: 'Bolivia'
    },
    {
      code: '+387',
      name: 'Bosnia and Herzegovina'
    },
    {
      code: '+267',
      name: 'Botswana'
    },
    {
      code: '+55',
      name: 'Brazil'
    },
    {
      code: '+246',
      name: 'British Indian Ocean Territory'
    },
    {
      code: '+1 284',
      name: 'British Virgin Islands'
    },
    {
      code: '+673',
      name: 'Brunei'
    },
    {
      code: '+359',
      name: 'Bulgaria'
    },
    {
      code: '+226',
      name: 'Burkina Faso'
    },
    {
      code: '+257',
      name: 'Burundi'
    },
    {
      code: '+855',
      name: 'Cambodia'
    },
    {
      code: '+237',
      name: 'Cameroon'
    },
    {
      code: '+1',
      name: 'Canada'
    },
    {
      code: '+238',
      name: 'Cape Verde'
    },
    {
      code: '+ 345',
      name: 'Cayman Islands'
    },
    {
      code: '+236',
      name: 'Central African Republic'
    },
    {
      code: '+235',
      name: 'Chad'
    },
    {
      code: '+56',
      name: 'Chile'
    },
    {
      code: '+86',
      name: 'China'
    },
    {
      code: '+61',
      name: 'Christmas Island'
    },
    {
      code: '+61',
      name: 'Cocos-Keeling Islands'
    },
    {
      code: '+57',
      name: 'Colombia'
    },
    {
      code: '+269',
      name: 'Comoros'
    },
    {
      code: '+242',
      name: 'Congo'
    },
    {
      code: '+243',
      name: 'Congo, Dem. Rep. of (Zaire)'
    },
    {
      code: '+682',
      name: 'Cook Islands'
    },
    {
      code: '+506',
      name: 'Costa Rica'
    },
    {
      code: '+385',
      name: 'Croatia'
    },
    {
      code: '+53',
      name: 'Cuba'
    },
    {
      code: '+599',
      name: 'Curacao'
    },
    {
      code: '+537',
      name: 'Cyprus'
    },
    {
      code: '+420',
      name: 'Czech Republic'
    },
    {
      code: '+45',
      name: 'Denmark'
    },
    {
      code: '+246',
      name: 'Diego Garcia'
    },
    {
      code: '+253',
      name: 'Djibouti'
    },
    {
      code: '+1 767',
      name: 'Dominica'
    },
    {
      code: '+1 809',
      name: 'Dominican Republic'
    },
    {
      code: '+670',
      name: 'East Timor'
    },
    {
      code: '+56',
      name: 'Easter Island'
    },
    {
      code: '+593',
      name: 'Ecuador'
    },
    {
      code: '+20',
      name: 'Egypt'
    },
    {
      code: '+503',
      name: 'El Salvador'
    },
    {
      code: '+240',
      name: 'Equatorial Guinea'
    },
    {
      code: '+291',
      name: 'Eritrea'
    },
    {
      code: '+372',
      name: 'Estonia'
    },
    {
      code: '+251',
      name: 'Ethiopia'
    },
    {
      code: '+500',
      name: 'Falkland Islands'
    },
    {
      code: '+298',
      name: 'Faroe Islands'
    },
    {
      code: '+679',
      name: 'Fiji'
    },
    {
      code: '+358',
      name: 'Finland'
    },
    {
      code: '+33',
      name: 'France'
    },
    {
      code: '+596',
      name: 'French Antilles'
    },
    {
      code: '+594',
      name: 'French Guiana'
    },
    {
      code: '+689',
      name: 'French Polynesia'
    },
    {
      code: '+241',
      name: 'Gabon'
    },
    {
      code: '+220',
      name: 'Gambia'
    },
    {
      code: '+995',
      name: 'Georgia'
    },
    {
      code: '+49',
      name: 'Germany'
    },
    {
      code: '+233',
      name: 'Ghana'
    },
    {
      code: '+350',
      name: 'Gibraltar'
    },
    {
      code: '+30',
      name: 'Greece'
    },
    {
      code: '+299',
      name: 'Greenland'
    },
    {
      code: '+1 473',
      name: 'Grenada'
    },
    {
      code: '+590',
      name: 'Guadeloupe'
    },
    {
      code: '+1 671',
      name: 'Guam'
    },
    {
      code: '+502',
      name: 'Guatemala'
    },
    {
      code: '+224',
      name: 'Guinea'
    },
    {
      code: '+245',
      name: 'Guinea-Bissau'
    },
    {
      code: '+595',
      name: 'Guyana'
    },
    {
      code: '+509',
      name: 'Haiti'
    },
    {
      code: '+504',
      name: 'Honduras'
    },
    {
      code: '+852',
      name: 'Hong Kong SAR China'
    },
    {
      code: '+36',
      name: 'Hungary'
    },
    {
      code: '+354',
      name: 'Iceland'
    },
    {
      code: '+91',
      name: 'India'
    },
    {
      code: '+62',
      name: 'Indonesia'
    },
    {
      code: '+98',
      name: 'Iran'
    },
    {
      code: '+964',
      name: 'Iraq'
    },
    {
      code: '+353',
      name: 'Ireland'
    },
    {
      code: '+972',
      name: 'Israel'
    },
    {
      code: '+39',
      name: 'Italy'
    },
    {
      code: '+225',
      name: 'Ivory Coast'
    },
    {
      code: '+1 876',
      name: 'Jamaica'
    },
    {
      code: '+81',
      name: 'Japan'
    },
    {
      code: '+962',
      name: 'Jordan'
    },
    {
      code: '+7 7',
      name: 'Kazakhstan'
    },
    {
      code: '+254',
      name: 'Kenya'
    },
    {
      code: '+686',
      name: 'Kiribati'
    },
    {
      code: '+965',
      name: 'Kuwait'
    },
    {
      code: '+996',
      name: 'Kyrgyzstan'
    },
    {
      code: '+856',
      name: 'Laos'
    },
    {
      code: '+371',
      name: 'Latvia'
    },
    {
      code: '+961',
      name: 'Lebanon'
    },
    {
      code: '+266',
      name: 'Lesotho'
    },
    {
      code: '+231',
      name: 'Liberia'
    },
    {
      code: '+218',
      name: 'Libya'
    },
    {
      code: '+423',
      name: 'Liechtenstein'
    },
    {
      code: '+370',
      name: 'Lithuania'
    },
    {
      code: '+352',
      name: 'Luxembourg'
    },
    {
      code: '+853',
      name: 'Macau SAR China'
    },
    {
      code: '+389',
      name: 'Macedonia'
    },
    {
      code: '+261',
      name: 'Madagascar'
    },
    {
      code: '+265',
      name: 'Malawi'
    },
    {
      code: '+60',
      name: 'Malaysia'
    },
    {
      code: '+960',
      name: 'Maldives'
    },
    {
      code: '+223',
      name: 'Mali'
    },
    {
      code: '+356',
      name: 'Malta'
    },
    {
      code: '+692',
      name: 'Marshall Islands'
    },
    {
      code: '+596',
      name: 'Martinique'
    },
    {
      code: '+222',
      name: 'Mauritania'
    },
    {
      code: '+230',
      name: 'Mauritius'
    },
    {
      code: '+262',
      name: 'Mayotte'
    },
    {
      code: '+52',
      name: 'Mexico'
    },
    {
      code: '+691',
      name: 'Micronesia'
    },
    {
      code: '+1 808',
      name: 'Midway Island'
    },
    {
      code: '+373',
      name: 'Moldova'
    },
    {
      code: '+377',
      name: 'Monaco'
    },
    {
      code: '+976',
      name: 'Mongolia'
    },
    {
      code: '+382',
      name: 'Montenegro'
    },
    {
      code: '+1664',
      name: 'Montserrat'
    },
    {
      code: '+212',
      name: 'Morocco'
    },
    {
      code: '+95',
      name: 'Myanmar'
    },
    {
      code: '+264',
      name: 'Namibia'
    },
    {
      code: '+674',
      name: 'Nauru'
    },
    {
      code: '+977',
      name: 'Nepal'
    },
    {
      code: '+31',
      name: 'Netherlands'
    },
    {
      code: '+599',
      name: 'Netherlands Antilles'
    },
    {
      code: '+1 869',
      name: 'Nevis'
    },
    {
      code: '+687',
      name: 'New Caledonia'
    },
    {
      code: '+64',
      name: 'New Zealand'
    },
    {
      code: '+505',
      name: 'Nicaragua'
    },
    {
      code: '+227',
      name: 'Niger'
    },
    {
      code: '+234',
      name: 'Nigeria'
    },
    {
      code: '+683',
      name: 'Niue'
    },
    {
      code: '+672',
      name: 'Norfolk Island'
    },
    {
      code: '+850',
      name: 'North Korea'
    },
    {
      code: '+1 670',
      name: 'Northern Mariana Islands'
    },
    {
      code: '+47',
      name: 'Norway'
    },
    {
      code: '+968',
      name: 'Oman'
    },
    {
      code: '+92',
      name: 'Pakistan'
    },
    {
      code: '+680',
      name: 'Palau'
    },
    {
      code: '+970',
      name: 'Palestinian Territory'
    },
    {
      code: '+507',
      name: 'Panama'
    },
    {
      code: '+675',
      name: 'Papua New Guinea'
    },
    {
      code: '+595',
      name: 'Paraguay'
    },
    {
      code: '+51',
      name: 'Peru'
    },
    {
      code: '+63',
      name: 'Philippines'
    },
    {
      code: '+48',
      name: 'Poland'
    },
    {
      code: '+351',
      name: 'Portugal'
    },
    {
      code: '+1 787',
      name: 'Puerto Rico'
    },
    {
      code: '+974',
      name: 'Qatar'
    },
    {
      code: '+262',
      name: 'Reunion'
    },
    {
      code: '+40',
      name: 'Romania'
    },
    {
      code: '+7',
      name: 'Russia'
    },
    {
      code: '+250',
      name: 'Rwanda'
    },
    {
      code: '+685',
      name: 'Samoa'
    },
    {
      code: '+378',
      name: 'San Marino'
    },
    {
      code: '+966',
      name: 'Saudi Arabia'
    },
    {
      code: '+221',
      name: 'Senegal'
    },
    {
      code: '+381',
      name: 'Serbia'
    },
    {
      code: '+248',
      name: 'Seychelles'
    },
    {
      code: '+232',
      name: 'Sierra Leone'
    },
    {
      code: '+65',
      name: 'Singapore'
    },
    {
      code: '+421',
      name: 'Slovakia'
    },
    {
      code: '+386',
      name: 'Slovenia'
    },
    {
      code: '+677',
      name: 'Solomon Islands'
    },
    {
      code: '+27',
      name: 'South Africa'
    },
    {
      code: '+500',
      name: 'South Georgia and the South Sandwich Islands'
    },
    {
      code: '+82',
      name: 'South Korea'
    },
    {
      code: '+34',
      name: 'Spain'
    },
    {
      code: '+94',
      name: 'Sri Lanka'
    },
    {
      code: '+249',
      name: 'Sudan'
    },
    {
      code: '+597',
      name: 'Suriname'
    },
    {
      code: '+268',
      name: 'Swaziland'
    },
    {
      code: '+46',
      name: 'Sweden'
    },
    {
      code: '+41',
      name: 'Switzerland'
    },
    {
      code: '+963',
      name: 'Syria'
    },
    {
      code: '+886',
      name: 'Taiwan'
    },
    {
      code: '+992',
      name: 'Tajikistan'
    },
    {
      code: '+255',
      name: 'Tanzania'
    },
    {
      code: '+66',
      name: 'Thailand'
    },
    {
      code: '+670',
      name: 'Timor Leste'
    },
    {
      code: '+228',
      name: 'Togo'
    },
    {
      code: '+690',
      name: 'Tokelau'
    },
    {
      code: '+676',
      name: 'Tonga'
    },
    {
      code: '+1 868',
      name: 'Trinidad and Tobago'
    },
    {
      code: '+216',
      name: 'Tunisia'
    },
    {
      code: '+90',
      name: 'Turkey'
    },
    {
      code: '+993',
      name: 'Turkmenistan'
    },
    {
      code: '+1 649',
      name: 'Turks and Caicos Islands'
    },
    {
      code: '+688',
      name: 'Tuvalu'
    },
    {
      code: '+1 340',
      name: 'U.S. Virgin Islands'
    },
    {
      code: '+256',
      name: 'Uganda'
    },
    {
      code: '+380',
      name: 'Ukraine'
    },
    {
      code: '+971',
      name: 'United Arab Emirates'
    },
    {
      code: '+44',
      name: 'United Kingdom'
    },
    {
      code: '+1',
      name: 'United States'
    },
    {
      code: '+598',
      name: 'Uruguay'
    },
    {
      code: '+998',
      name: 'Uzbekistan'
    },
    {
      code: '+678',
      name: 'Vanuatu'
    },
    {
      code: '+58',
      name: 'Venezuela'
    },
    {
      code: '+84',
      name: 'Vietnam'
    },
    {
      code: '+1 808',
      name: 'Wake Island'
    },
    {
      code: '+681',
      name: 'Wallis and Futuna'
    },
    {
      code: '+967',
      name: 'Yemen'
    },
    {
      code: '+260',
      name: 'Zambia'
    },
    {
      code: '+255',
      name: 'Zanzibar'
    },
    {
      code: '+263',
      name: 'Zimbabwe'
    }
  ]
  filteredOptions: Observable<string[]>;
  
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService,
     private formBuilder: FormBuilder,public dialog: MatDialog) {

  }
  
  ngOnInit() {
   this.RenderDataTable();
       }
   
    
 // used  to render data in table 
 private _filter(value: string): string[] {
   debugger;
  const filterValue = value.toLowerCase();
  return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}
RenderDataTable(){
  debugger;
  this.dataSource=new MatTableDataSource<CoClientModal>(this.currentClientDetails.CoClientDetails);
  this.dataSourceBackup=JSON.parse(JSON.stringify(this.currentClientDetails.CoClientDetails));
  this.dataSource.sort = this.sort;
  
  
   
  
}
// used for Creating form 
CreateCoClientForm(){
  this.coClientForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
    email:['',[Validators.required,Validators.email,this.CheckEmail.bind(this)]],
    address:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9-_/() ]+$')]],
    countryCode:['',Validators.required],
    contactNo:['',[Validators.required,Validators.pattern('^[0-9]+$'),this.CheckContactNumber.bind(this)]],
    country:['',Validators.required]
    
  });
  this.filteredOptions = this.coClientForm.controls['country'].valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );
}

ShowCoClientAddForm(){
  this.showCoClientForm=true;
  this.CreateCoClientForm();
 
}
// used for undo the changes in co client form 
ClearSelection(){
  this.coClientForm.reset();
  this.showCoClientForm=false;
  this.selectedRowIndex=-1;
  this.showUpdateForm=false;
}
// used for highlight the selected row
highlight(row:CoClientModal) {
 debugger;
  if(this.showUpdateForm){
    this.selectedRowIndex = row.CoClientID;
  this.CreateCoClientForm();
  this.showCoClientForm=true;
  this.coClientForm.controls['name'].setValue(row.Name);
  this.coClientForm.controls['address'].setValue(row.Address);
  this.coClientForm.controls['email'].setValue(row.Email.trim());
  this.coClientForm.controls['contactNo'].setValue(row.Phone);
  this.coClientForm.controls['countryCode'].setValue(row.countryCode);
  this.coClientForm.controls['country'].setValue(row.Country);
  
  }
  else{
    this.showUpdateForm=true;
    
  }
  }
  // used to update co client information
  UpdateCoclient(){
    debugger;
    for(var i=0;i<this.dataSource.data.length;i++){
      if(this.dataSource.data[i].CoClientID==this.selectedRowIndex){
        this.dataSource.data[i].Name=this.coClientForm.controls["name"].value;
        this.dataSource.data[i].Email=this.coClientForm.controls["email"].value;
        this.dataSource.data[i].Address=this.coClientForm.controls["address"].value;
        this.dataSource.data[i].Phone=this.coClientForm.controls["contactNo"].value;
        this.dataSource.data[i].countryCode=this.coClientForm.controls["countryCode"].value;
        this.dataSource.data[i].country=this.coClientForm.controls["country"].value;
      }
    }
    for(var i=0;i<this.dataSourceBackup.length;i++){
      if(this.dataSourceBackup[i].CoClientID==this.selectedRowIndex){
        this.dataSourceBackup[i].Name=this.coClientForm.controls["name"].value;
        this.dataSourceBackup[i].Email=this.coClientForm.controls["email"].value;
        this.dataSourceBackup[i].Address=this.coClientForm.controls["address"].value;
        this.dataSourceBackup[i].countryCode=this.coClientForm.controls["countryCode"].value;
        this.dataSource.data[i].country=this.coClientForm.controls["country"].value;
      }
    }
    this.flag=false;
    
   this.ClearSelection();

  }
  // used to add another co client 
  AddCoClientRow(){
    debugger;
   const data=this.dataSource.data;
   data.push({
     CoClientID:this.ids,
     Name:this.coClientForm.controls["name"].value,
     Email:this.coClientForm.controls["email"].value,
     Address:this.coClientForm.controls["address"].value,
     Phone:this.coClientForm.controls["contactNo"].value,
     countryCode:this.coClientForm.controls["countryCode"].value,
     country:this.coClientForm.controls["country"].value,

   });
   this.ids-=1;
   this.dataSource.data=data;
   this.flag=false;
   this.ClearSelection();   
     
  }
  // used to delete a specific coclient 
  DeleteCoClient(row:CoClientModal){
    debugger;
    this.showUpdateForm=false;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
      data: { status: "Remove", confirm: true }
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
         debugger;
         this.flag=false;
          const data = this.dataSource.data.filter(item => item.CoClientID !==row.CoClientID);
          this.dataSource.data = data;          
          for(var i=0;i<this.dataSourceBackup.length;i++){
            if(this.dataSourceBackup[i].CoClientID==row.CoClientID){
              this.dataSourceBackup[i].IsActive=false;
            ;
            }
          }
      }
  });
  }
  // used to final save newly add co client and update co client at once 
  SaveCoClientDetails(){
    debugger;
    for(var i=0;i<this.dataSource.data.length;i++){
      if(this.dataSource.data[i].CoClientID<0){
        this.dataSourceBackup.push(this.dataSource.data[i]);
      }
    }
    this.currentClientDetails.CoClientDetails=this.dataSourceBackup;
   
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.flag=true;
  }
  // used for restricating input boxes to except whitspace at beginning 
  CheckForWhiteSpace(contraolName:string){
    debugger;
    
    if(this.coClientForm.controls[contraolName].value<=0){
      return this.coClientForm.controls[contraolName].setErrors({ pattern: true });
    }
    else{
      this.coClientForm.controls[contraolName].setValue(this.coClientForm.controls[contraolName].value.trim());
    }
  }
  SelectCountryCode(){
    debugger;
    for(var i=0;i<this.countries.length;i++){
      if(this.countries[i].name==this.coClientForm.controls['country'].value){
        this.coClientForm.controls['countryCode'].setValue(this.countries[i].code);
       
      }
    }
  }
  CheckEmail(control:AbstractControl){
    debugger;
    if(control.value!='' && !this.showUpdateForm){
      for(let i=0;i<this.dataSource.data.length;i++){
        if(this.dataSource.data[i].Email.trim()==control.value){
          return { CheckEmail : true };
        }
        else{
          return null;
        }
      }

    }
    else{
      return null;
    }
  }
  CheckContactNumber(control:AbstractControl){
    if(!this.showUpdateForm){
      for(let i=0;i<this.dataSource.data.length;i++){
        if(this.dataSource.data[i].Phone==control.value){
          return { contactNumber : true };
        }       
      }
      
    }
    }
  


}
