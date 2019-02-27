import { Component, OnInit, Inject } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {FormBuilder, FormGroup, Validators, FormArray, AbstractControl} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TosterService } from '../../../shared/services/toster.service';
import { Client, CoClientModal } from '../model/client.model';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
/******** Created By Shubham Mishra on 4 Feb 2019**********/
export class AddclientComponent implements OnInit {
  isLinear = true;// this variable will be used to for not leting user traverse the stepper without filling current form
  flag:number=0;// this varibale is used for checking that not more than 4 client form is added 
  clientPersonalDetailsForm: FormGroup;
  clientProfestionalDetailsForm: FormGroup;
  coClientForm:FormGroup;
  count:number=0;
  showCoClientForm:boolean=false; // used for toggle Co Client form 
  clientDetails=new Client();
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern
  CountryList: string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  filteredOptionsForClientPersonalDetailsForm: Observable<string[]>;// this variable will hold the returned list of autocomplete.
  filteredOptionsForClientProfestionalDetailsForm: Observable<string[]>;// this variable will hold the returned list of autocomplete
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filterBasedOptionsForCountryCodePersonaTab:Observable<string[]>;
  filterBasedOptionsForCountryCodeProfestionalTab:Observable<string[]>;
  filterBasedOptionsForCountryCodeCoCLientTab:Observable<string[]>[]=[];
  ah=10;
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
      name: 'United States of America'
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
  
  constructor(private formBuilder: FormBuilder,public snackBar: MatSnackBar,private clientservice: ClientServiceService,private router:Router,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }
  ngOnInit() {
    
    if(this.storage.get("userDetailsID")!=null){
      this.clientPersonalDetailsForm = this.formBuilder.group({
      
        ClientName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        Country: ['',Validators.required],
        Address: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]],
        personalEmailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        personalContactNo: ['',[Validators.required,Validators.pattern('^[1-9][0-9]+$')]],
        countryCode: ['',],
        alternateContactNo:['',[Validators.pattern('^[1-9][0-9]+$')]],
        secoundryEmailId:['',[Validators.pattern(this.emailPattern)]]
      },{
          validator: this.CheckPersonalEmail,    
        
          
      }
       
  
    );
      this.clientProfestionalDetailsForm = this.formBuilder.group({
        
        companyName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        Country: ['',Validators.required],
        Address: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]],
        companyEmailId: ['', [Validators.required, Validators.pattern(this.emailPattern),this.CheckCompanyEmail.bind(this)]],
        companyContactNo: ['',[Validators.required,Validators.pattern('^[0-9]+$'),this.CheckContactNumber.bind(this)]],
        companyFax: ['',[Validators.pattern('^[0-9]+$')]],
        zip: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
        countryCode: ['',[Validators.required]],
        extension:['',[Validators.pattern('^[0-9]+$')]] },{
          // validator: this.CheckProfestionalEmail
  
      });
      
      this.coClientForm=this.formBuilder.group({
        coClientDetails:this.formBuilder.array([this.InitCoClientForm()]),
        
  
      },{
        validator:this.checkCoClientEmail.bind(this)
      });
     this.ManageNameControl(0);
    


   
      
      /***** Autocomplete filter for country in personal details tab */
      this.filteredOptionsForClientPersonalDetailsForm = this.clientPersonalDetailsForm.controls['Country'].valueChanges.pipe(
       startWith(''),
       map(value => this._filter(value))
    );
    
  /***** Autocomplete filter for country in professional  details tab */
    this.filteredOptionsForClientProfestionalDetailsForm = this.clientProfestionalDetailsForm.controls['Country'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
   );
   this.filterBasedOptionsForCountryCodePersonaTab=this.clientPersonalDetailsForm.controls['countryCode'].valueChanges.pipe(
    startWith(''),
    map(value => this._filterForCountryCode(value))
  );
  this.filterBasedOptionsForCountryCodeProfestionalTab=this.clientProfestionalDetailsForm.controls['countryCode'].valueChanges.pipe(
    startWith(''),
    map(value => this._filterForCountryCode(value))
  );
  
  
    }
    else{
      this.router.navigateByUrl("/login");
    }
   
   
    /******* Following lines are sed for creating form for stepper  */
    
 
 }
 /***** used for filtering from country list array */
 private _filter(value: string): string[] {
   debugger;
   
  const filterValue = value.toLowerCase();
  return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}
 ManageNameControl(index:number) {
  var arrayControl = this.coClientForm.get('coClientDetails') as FormArray;
     
  
    this.filterBasedOptionsForCountryCodeCoCLientTab[index] = arrayControl.at(index).get('Country').valueChanges
.pipe(
  startWith(''),
  map(value => this._filterForCountryCode(value.toString()))
  );
  

}

/********** following method is used to add client, it is taking the value of form and puting into object of client
 *  which will be sent to the server **/
AddClient() 
{
debugger;
  this.clientDetails.ClientName=this.clientPersonalDetailsForm.controls['ClientName'].value;
  this.clientDetails.Address=this.clientPersonalDetailsForm.controls['Address'].value;
  this.clientDetails.Country=this.clientPersonalDetailsForm.controls['Country'].value;
  this.clientDetails.EmailID2=this.clientPersonalDetailsForm.controls['personalEmailId'].value;
  this.clientDetails.EmailID3=this.clientPersonalDetailsForm.controls['secoundryEmailId'].value;
  this.clientDetails.ClientPhone=this.clientPersonalDetailsForm.controls['personalContactNo'].value;
  this.clientDetails.ClientPhone2=this.clientPersonalDetailsForm.controls['alternateContactNo'].value;
  this.clientDetails.countrytTelephoneCodeClient=this.clientPersonalDetailsForm.controls['countryCode'].value;
  this.clientDetails.CompanyName=this.clientProfestionalDetailsForm.controls['companyName'].value;
  this.clientDetails.CompanyAddress=this.clientProfestionalDetailsForm.controls['Address'].value;
  this.clientDetails.ClientCountry=this.clientProfestionalDetailsForm.controls['Country'].value;
  this.clientDetails.EmailID=this.clientProfestionalDetailsForm.controls['companyEmailId'].value;
  this.clientDetails.ClientCompanyFax=this.clientProfestionalDetailsForm.controls['companyFax'].value;
  this.clientDetails.CompanyPhone=this.clientProfestionalDetailsForm.controls['companyContactNo'].value;
   this.clientDetails.ClientCountryZip=this.clientProfestionalDetailsForm.controls['zip'].value; 
   this.clientDetails.ClientExtension=this.clientProfestionalDetailsForm.controls['extension'].value; 
   this.clientDetails.countrytTelephoneCodeClientOffice=this.clientProfestionalDetailsForm.controls['countryCode'].value;
   let userDetailsID=parseInt(localStorage.getItem('userDetailsID'));
  var arrayControl = this.coClientForm.get('coClientDetails') as FormArray; // Creting reference of formArray object to access the values 
  for(var j=0;j<arrayControl.length;j++){ //    Loping through the formArray to gert values in formArray at diffrent index
    console.log(arrayControl.controls[j].value);
      let formArrayValue=new CoClientModal();
      formArrayValue.Name=arrayControl.controls[j].value.Name;
      formArrayValue.Address=arrayControl.controls[j].value.Address;
      formArrayValue.Email=arrayControl.controls[j].value.email;
      formArrayValue.Phone=arrayControl.controls[j].value.contactNo;
      formArrayValue.countryCode=arrayControl.controls[j].value.countryCode;
      formArrayValue.Country=arrayControl.controls[j].value.Country;
      formArrayValue.Created_By=userDetailsID;
      formArrayValue.Updated_By=userDetailsID;

      debugger;
      if(formArrayValue.Name!="" ){
        this.clientDetails.CoClientDetails.push(formArrayValue);
      }
     
  }
  console.log(this.clientDetails);
  //Calling service to Add the client details
  this.clientservice.AddClientDetails(this.clientDetails).subscribe(
    (suc:any)=>{
      debugger;
        if(suc.success){
          this.openSnackBar();
          this.router.navigate(['/client']);
        }
          }
  )
}
// usedd for open a snakbar to show message that client has been added Successfully
openSnackBar() {
  this.snackBar.open("Client Added Successfully'","Close", {
    duration: 500,
  });
}
// used for pussing form in form array when user demand it 
InitCoClientForm(){
  this.count+=1;
  return this.formBuilder.group({
    Name:['',Validators.pattern('^[a-zA-Z ]+$')],
    email:['',[Validators.email]],
    Country: ['',],
    Address:['',Validators.pattern('^[a-zA-Z0-9 ]+$')],
    contactNo:['',Validators.pattern('^[0-9]+$')],
    countryCode: ['',]
  });
  
  
}
// used for restricating user not to add mor than 4 co client 
AddNewCoCLientForm(){
  debugger;
 // this.ManageNameControl(4);
  if(this.flag>4){}
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
    // add new formgroup
    control.push(this.InitCoClientForm());
    this.flag+=1;
    this.ManageNameControl(this.flag);
    

}
// used to delete a specific co client form 
deleteRow(index: number) {
  debugger;
  // control refers to your formarray
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
  // remove the chosen row
  
  if(this.flag>0){
    control.removeAt(index);
    this.flag-=1;
  }
  else{
    this.coClientForm.reset();
    this.showCoClientForm=false;
  }
   
  }
// used to check that when to show Add another button 
CheckFlag(){
  
  if(this.flag==3){
    return false;
  }else if(this.flag==-1){
    this.showCoClientForm=false;
    this.flag=0;
    return false;
  }
  else{
    return true;
  }
}
// 
// ShowCoClient(){
//   if(this.showCoClientForm){
//     this.showCoClientForm=false;
//   }else{
//     this.showCoClientForm=true;
//   }

// }
// used to validate input field do not cointain whitespace at begenning 
CheckForWhiteSpace(contraolName:any,FormName:string,i:number){
  debugger;
  
  switch(FormName){
    case 'clientPersonalDetailsForm': if(this.clientPersonalDetailsForm.controls[contraolName].value<=0){
                                        return this.clientPersonalDetailsForm.controls[contraolName].setErrors({ pattern: true });
                                       }
                                       else{
                                        this.clientPersonalDetailsForm.controls[contraolName].setValue(this.clientPersonalDetailsForm.controls[contraolName].value.trim());
                                       }
                                       break;

    case 'clientProfestionalDetailsForm': if(this.clientProfestionalDetailsForm.controls[contraolName].value<=0){
                                              return this.clientProfestionalDetailsForm.controls[contraolName].setErrors({ pattern: true });
                                          }
                                          else{
                                                this.clientProfestionalDetailsForm.controls[contraolName].setValue(this.clientProfestionalDetailsForm.controls[contraolName].value.trim());
                                          }
                                          break;      
                                          
    case 'coClientForm':  var arrayControl = this.coClientForm.get('coClientDetails') as any ;
   // this.ManageNameControl(4);
                          switch(contraolName){
                            case 'Name' : 
                                         if(arrayControl.controls[i].value.Name<=0){
                            
                                            return arrayControl.controls[i].controls.Name.setErrors({ pattern: true });
                                          }
                                          else{
                                              arrayControl.controls[i].controls.Name.setValue(arrayControl.controls[i].value.Name.trim());
                                          }
                                          break;  

                            case 'Address' : 
                                            if(arrayControl.controls[i].value.Address<=0){                            
                                                return arrayControl.controls[i].controls.Address.setErrors({ pattern: true });
                                            }
                                           else{
                                                arrayControl.controls[i].controls.Address.setValue(arrayControl.controls[i].value.Address.trim());
                                            }
                                            break;  
                            }
  
                           break;  
       

  }
}
private _filterForCountryCode(value: string): string[] {
  debugger;
  const filterValueForCountryCode = value.toLowerCase();
  return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValueForCountryCode) === 0);
}
SelectCountryCode(contraolName:any,FormName:string,index:number){
  debugger;
  switch(FormName){
    case 'clientPersonalDetailsForm': for(var i=0;i<this.countries.length;i++){
                                         if(this.countries[i].name==this.clientPersonalDetailsForm.controls[contraolName].value){
                                         this.clientPersonalDetailsForm.controls['countryCode'].setValue(this.countries[i].code);
       
                                            }
                                        }
                                       break;

    case 'clientProfestionalDetailsForm':for(var i=0;i<this.countries.length;i++){
                                         if(this.countries[i].name==this.clientProfestionalDetailsForm.controls[contraolName].value){
                                              this.clientProfestionalDetailsForm.controls['countryCode'].setValue(this.countries[i].code);

                                            }
                                           }
                                        break;    
     case 'coClientForm':  debugger;
                          var arrayControl = this.coClientForm.get('coClientDetails') as any ;
                            for(var i=0;i<this.countries.length;i++){
                              if(this.countries[i].name==arrayControl.controls[index].value.Country){
                                arrayControl.controls[index].controls.countryCode.setValue(this.countries[i].code);

                              }
                            }
                            break;
                                                                 
}


}
CheckPersonalEmail(group:FormGroup){
  debugger;
  if(group.controls['personalContactNo'].value!='' && group.controls['alternateContactNo'].value!='' && group.controls['personalContactNo'].value==group.controls['alternateContactNo'].value){
    return group.controls['alternateContactNo'].setErrors({ Checkno: true });
  }
  else if(group.controls['personalEmailId'].value!='' && group.controls['secoundryEmailId'].value!='' )
  {
    if(group.controls['personalEmailId'].value==group.controls['secoundryEmailId'].value){
     // return this.clientPersonalDetailsForm.controls['secoundryEmailId'].setErrors({ CheckEmail: true });
      return group.controls['secoundryEmailId'].setErrors({ CheckPersonalEmail: true });
                                      
    }
    else{
      return null;
    }
  }
  else{
    return null;
  }
}
Checkno(group:FormGroup){
  debugger;
if(group.controls['personalContactNo'].value!=null && group.controls['personalContactNo'].value!=null && group.controls['personalContactNo'].value==group.controls['alternateContactNo'].value){
  return group.controls['secoundryEmailId'].setErrors({ Checkno: true });
}
}
checkCoClientEmail(group:FormGroup){
  debugger;
  if(this.coClientForm!=undefined){
    var arrayControl = group.get('coClientDetails') as any ;
  for(var i=0;i<arrayControl.length;i++){
    if(i!=arrayControl.length-1){
      if(arrayControl.at(i).get('email').value!='' && arrayControl.at(i+1).get('email').value!='' && arrayControl.at(i).get('email').value==arrayControl.at(i+1).get('email').value ){
        return arrayControl.controls[i+1].controls.email.setErrors({ checkCoClientEmail: true });
      }     
      }
    else{
      return null;
    }
    }
  }
}
// checkCoClientEmail(control:AbstractControl){
//   debugger;
 
//   if(this.coClientForm!=undefined){
//     var arrayControl = this.coClientForm.get('coClientDetails') as any ;
//     for(var i=0;i<arrayControl.length;i++){
//       if(i!=arrayControl.length){
//         if(arrayControl.at(i).get('email').value!='' && arrayControl.at(i+1).get('email').value!='' && arrayControl.at(i).get('email').value==arrayControl.at(i+1).get('email').value ){
//           return arrayControl.controls[i+1].controls.email.setErrors({ checkCoClientEmail: true });
//         }
//         else{
//           return null;
//         }
//       }
//       else{
//         return null;
//       }
//       }
//   }
  
  
// }
CheckCompanyEmail(control:AbstractControl){
  debugger;
  if(control.value==this.clientPersonalDetailsForm.controls['personalEmailId'].value.trim() || control.value==this.clientPersonalDetailsForm.controls['secoundryEmailId'].value.trim() ){
    return { companyEmail : true };
  }
  else{
    return null;
  }
}
CheckContactNumber(control:AbstractControl){
  if(control.value==this.clientPersonalDetailsForm.controls['personalContactNo'].value || control.value==this.clientPersonalDetailsForm.controls['alternateContactNo'].value ){
    return { contactNumber : true};
  }
  else{
    return null;
  }
}
}
