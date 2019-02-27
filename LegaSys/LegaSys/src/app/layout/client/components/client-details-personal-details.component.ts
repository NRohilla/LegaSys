import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Client } from '../model/client.model';
import { isError } from 'util';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-client-details-personal-details',
  templateUrl: './client-details-personal-details.component.html',
  styleUrls: ['./client-details-personal-details.component.scss']
})

export class ClientDetailsPersonalDetailsComponent implements OnInit {

  /****** Created By Shubham Mishra on 19-Nov-2018 ************/
  @Output('onCancel') onCancel = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: Client; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: Client;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one

  disable: boolean = true; // this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  personalDetailsForm: FormGroup; // This formgroup is for Client Personal Details form
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern

  /**** Writen on 23 Nov 2018 ***********/
  readOnly: boolean = true;// this variable will be used to make the form field non editable
  // following array will hold the list of country and willbe used to shown as dropdown in country field 
  CountryList: string[] = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filteredOptions: Observable<string[]>;// this variable will hold the returned list of autocomplete
  filterBasedOptionsForCountryCode:Observable<string[]>;
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
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private router: Router, private formBuilder: FormBuilder) {
  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {

    if (this.disable) {
      this.disable = false;
      this.readOnly = false;
      //this.personalDetailsForm.enable();
    }
    else {
      this.disable = true;
      this.readOnly = true;
      //this.personalDetailsForm.disable();
    }
  }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.LoadValuesInPersonalDetailsForm();
    this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */
  UpdateClient() {
    this.currentClientDetails.ClientName = this.personalDetailsForm.controls['clientName'].value;
    this.currentClientDetails.Address = this.personalDetailsForm.controls['clientAddress'].value;
    this.currentClientDetails.EmailID2 = this.personalDetailsForm.controls['clientEmail'].value;
    this.currentClientDetails.EmailID3 = this.personalDetailsForm.controls['clientEmail2'].value;
   this.currentClientDetails.Country = this.personalDetailsForm.controls['country'].value;
   this.currentClientDetails.ClientPhone = this.personalDetailsForm.controls['clientPhone'].value;
   this.currentClientDetails.ClientPhone2 = this.personalDetailsForm.controls['clientPhone'].value;
   this.currentClientDetails.countrytTelephoneCodeClient=this.personalDetailsForm.controls['countryCode'].value;
   console.log(this.currentClientDetails);
     this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/
  CreatePersonalDetailsForm() {
    this.personalDetailsForm = this.formBuilder.group({
      clientName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      clientAddress: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9-/.()#& ]+$')]],
      clientEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      clientPhone: ['',[Validators.required,Validators.pattern('^[1-9][0-9]+$')]],
      countryCode: ['',[Validators.required]],
      country: ['', Validators.required],
      clientEmail2:['',Validators.pattern(this.emailPattern)],
      clientPhone2:['',Validators.pattern('^[1-9][0-9]+$')]
    },{
      validator: this.CheckPersonalEmail,    
    });
  }
  ngOnInit() {
    debugger;
   
    debugger;
    if (this.currentClientDetails) {
      this.CreatePersonalDetailsForm();
      this.LoadValuesInPersonalDetailsForm();
      this.filteredOptions = this.personalDetailsForm.controls['country'].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.filterBasedOptionsForCountryCode=this.personalDetailsForm.controls['countryCode'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterForCountryCode(value))
      );
    }
  }
  /**** This function is used to filter the name of country from country List  */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterForCountryCode(value: string): string[] {
    debugger;
    const filterValueForCountryCode = value.toLowerCase();
    return this.countriesCode.filter(option => option.toLowerCase().split("-").indexOf(filterValueForCountryCode) === 0);
  }
  
  /******** Created by SHubham Kumar Mishra on 22 nov 2018 **********
   ********* following method are used for geting validation error message dynamically **********/
  GetErrorMessage(controlName: string) {
    switch (controlName) {
      case 'clientName': if (this.personalDetailsForm.controls['clientName'].errors.required) {
        return "Client name can not be empty";
      }
        if (this.personalDetailsForm.controls['clientName'].errors.pattern) {
          return "Client name can only contails text";
        }

      case 'clientEmail': if (this.personalDetailsForm.controls['clientEmail'].errors.required) {
        return "Primary Email can not be empty";
      }
        if (this.personalDetailsForm.controls['clientEmail'].errors.pattern) {
          return "Please enter valid Email";
        }
      default: return " ";
    }
  }
  /******* Created by Shubham Kumar Mishra on 22 Nov 2018 ***********
   * ******* Following method is to load the values into the form ********/
  LoadValuesInPersonalDetailsForm() {
    this.personalDetailsForm.controls['clientName'].setValue(this.currentClientDetails.ClientName);
    this.personalDetailsForm.controls['clientAddress'].setValue(this.currentClientDetails.Address);

    if (this.currentClientDetails.EmailID2 != null && this.currentClientDetails.EmailID2 != '' && this.currentClientDetails.EmailID2 != undefined) {
      this.personalDetailsForm.controls['clientEmail'].setValue(this.currentClientDetails.EmailID2.trim());
    }
    if (this.currentClientDetails.EmailID3 != null && this.currentClientDetails.EmailID3 != '' && this.currentClientDetails.EmailID3 != undefined) {
      this.personalDetailsForm.controls['clientEmail2'].setValue(this.currentClientDetails.EmailID3.trim());
    }
  
      this.personalDetailsForm.controls['clientPhone'].setValue(this.currentClientDetails.ClientPhone);
      this.personalDetailsForm.controls['clientPhone2'].setValue(this.currentClientDetails.ClientPhone2);
    this.personalDetailsForm.controls['country'].setValue(this.currentClientDetails.Country);
    this.personalDetailsForm.controls['countryCode'].setValue(this.currentClientDetails.countrytTelephoneCodeClient);
  }

  /****** Created on 27 Nov 2017 ************/
  /****** Following method will be used to det the placeholder for mat input  ************/

  GetPlaceHolder(str: string) {
    if (!this.readOnly) {
      switch (str) {
        case 'clientName': return "Name * ";
        case 'clientAddress': return "Address * ";
        case 'country': return "Country * ";
        case 'clientEmail': return "Primary Email * ";
        case 'clientEmail2': return "Secondary Email ";
        case 'countryCode': return "Country Code *  ";
     
        case 'clientPhone': return "Primary Contact Number *";
        case 'clientPhone2': return "Alternate Contact Number ";
        default: return " ";
      }
    }
    else {
      return " ";
    }
  }
  CheckForWhiteSpace(contraolName:string){
    debugger;
    
    if(this.personalDetailsForm.controls[contraolName].value<=0){
      return this.personalDetailsForm.controls[contraolName].setErrors({ pattern: true });
    }
    else{
      this.personalDetailsForm.controls[contraolName].setValue(this.personalDetailsForm.controls[contraolName].value.trim());
    }
  }
  /****** Created on 14 feb 2019 ************* */

  SelectCountryCode(){
    debugger;
    for(var i=0;i<this.countries.length;i++){
      if(this.countries[i].name==this.personalDetailsForm.controls['country'].value){
        this.personalDetailsForm.controls['countryCode'].setValue(this.countries[i].code);
        console.log(this.countries[i].code)
      }
    }
  }
  CheckPersonalEmail(group:FormGroup){
    debugger;

    if((group.controls['clientPhone'].value!='' && group.controls['clientPhone2'].value!='') || (group.controls['clientEmail'].value!=''  && group.controls['clientEmail2'].value!='')){
      if(group.controls['clientPhone'].value==group.controls['clientPhone2'].value){
        return group.controls['clientPhone2'].setErrors({ Checkno: true });
      }
      else if(group.controls['clientEmail'].value==group.controls['clientEmail2'].value){
        return group.controls['clientEmail2'].setErrors({ CheckPersonalEmail: true });
      }
      else{
         return null;
      }
    }
    else{
      return null;
    }
    // // if(group.controls['clientPhone'].value!='' && group.controls['clientPhone2'].value!='' && group.controls['clientPhone'].value==group.controls['clientPhone2'].value){
    // //   return group.controls['clientPhone2'].setErrors({ Checkno: true });
    // // }
    // // else
    //  if(group.controls['clientEmail'].value!='' && group.controls['clientEmail2'].value!='' )
    // {
    //   if(group.controls['clientEmail'].value==group.controls['clientEmail2'].value){
    //    // return this.clientPersonalDetailsForm.controls['secoundryEmailId'].setErrors({ CheckEmail: true });
    //     return group.controls['clientEmail2'].setErrors({ CheckPersonalEmail: true });
                                        
    //   }
    //   else{
    //     return null;
    //   }
    // }
    // else{
    //   return null;
    // }
  }
  


}
