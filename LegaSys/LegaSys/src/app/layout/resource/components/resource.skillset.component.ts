import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource.model';
import { TosterService } from '../../../shared/services/toster.service';
import { TechnologiesService } from '../../masters/technologies/technologies.service';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatSelectionList } from '@angular/material';
import { Observable } from 'rxjs';

// export interface Pskill {
//   name: string;
  
// }
// export interface Sskill {
//   name: string;
  
// }
@Component({
  selector: 'app-resource-skillset',
  templateUrl: './resource.skillset.component.html',
  styleUrls: ['./resource.skillset.component.scss']
})
export class ResourceSkillsetComponent implements OnInit {
  disableFooter: boolean = true;
 // uSkillForm:FormGroup;
  globalresponse:Resource;
  inputSkill:Resource;
  primaryskillSet:any;
  secondaryskillSet:any;
  tResponses:any=[];  
  disabled=true;  
  selectable = true;
  removable = false;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  //pSkills: Pskill[] = [];
  pSkills:string[]=[];
  sSkills:string[]=[];
  fCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  //fruits:Array<Fruit>=new Array<Fruit>();
  //public ListX: Array<ClassX> = new Array<ClassX>();
  @ViewChild('chipList') chipList;
  @ViewChild('fInput') fInput: ElementRef<HTMLInputElement>;
  tResponses2: any=[];

  constructor(private formBuilder: FormBuilder,public dataservice:ResourceService,public toster:TosterService,public techservice:TechnologiesService) { }
 
  add1(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value ||'').trim()) {
      this.sSkills.push(value.trim());
     
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    // if(this.fruits.length >0){
    //   this.chipList.errorState=false;
    //   this.uSkillForm.valid;
    // }
  }
  remove1(skill: string): void {
    const index = this.sSkills.indexOf(skill);

    if (index >= 0) {
      this.sSkills.splice(index, 1);
    }
    // if(this.fruits.length<=0){
    //   this.chipList.errorState=true;
    //    this.uSkillForm.controls['PrimarySkillSet'].invalid;
    // }
  }
  selected1(event: MatAutocompleteSelectedEvent): void {
    this.sSkills.push(event.option.viewValue);
    this.fInput.nativeElement.value = '';
    this.fCtrl.setValue(null);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our pskill
    if ((value ||'').trim()) {
      this.pSkills.push(value.trim());
     
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    if(this.pSkills.length >0){
      this.chipList.errorState=false;
     // this.uSkillForm.valid;
    }
    this.fCtrl.setValue(null);
  }
  remove(skill: string): void {
    const index = this.pSkills.indexOf(skill);

    if (index >= 0) {
      this.pSkills.splice(index, 1);
    }
    if(this.pSkills.length<=0){
      this.chipList.errorState=true;
       //this.uSkillForm.controls['PrimarySkillSet'].invalid;
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.pSkills.push(event.option.viewValue);
    this.fInput.nativeElement.value = '';
    this.fCtrl.setValue(null);
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.tResponses.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  // }
  ngOnInit() {
    debugger;
    // this.uSkillForm = this.formBuilder.group({      
    //     PrimarySkillSet: [''],
    //     SecondarySkillSet: [''],
    //     // HQualification: [''],
    //   });
    // this.uSkillForm.disable();
    //  if (localStorage.getItem("PrimarySkillSet") != "null") {
    //   this.primaryskillSet = localStorage.getItem("PrimarySkillSet");
    // }
    // if (localStorage.getItem("SecondarySkillSet") != "null") {
    //   this.secondaryskillSet = localStorage.getItem("SecondarySkillSet");
    // }
  
    this.getSkills();
    
    this.getTechnology();
    
    // this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((skill: string | null) => skill ? this._filter(skill) : this.tResponses.slice()));

     

// this.primaryskillSet=this.globalresponse.PrimarySkillSet;
// this.secondaryskillSet=this.globalresponse.SecondarySkillSet;
  }
  

  edit(){
    // this.uSkillForm.enable();
    this.disabled=false;
    this.disableFooter=false;
    this.removable=true;
  } 
  discard(){
    // this.uSkillForm.disable();
    this.disabled=true;
    this.disableFooter=true;
    this.removable=false;
   
   
  }
  getTechnology(){
    debugger;
    this.techservice.getAllTechnologies()
    .subscribe((res:any)=>{
      debugger;
     // this.tResponses=res;
      for(var i=0;i<res.length;i++){
        if(res[i].Master_DomainID==1){
          this.tResponses.push(res[i].Name);
          //console.log(this.tResponses);
        }
        else{
          this.tResponses2.push(res[i].Name);
        }
      }
      console.log(this.tResponses);
      
    });
  }  
  getSkills(){  
    debugger;
    this.dataservice.getResourceById(+localStorage.getItem('UserDetailID'))
    .subscribe((res)=>{

    this.globalresponse=res;
    debugger;
   // this.primaryskillSet=this.globalresponse.PrimarySkillSet;
    //this.primaryskillSet=this.primaryskillSet.split(/;|,|\n/).forEach(value => {
      this.primaryskillSet=this.globalresponse.PrimarySkillSet.split(/;|,|\n/).forEach(value => {
        if(value.trim()){
        this.pSkills.push(value.trim());
       
        }
        })
      //this.secondaryskillSet=this.globalresponse.SecondarySkillSet;
      //this.secondaryskillSet=this.secondaryskillSet.split(/;|,|\n/).forEach(value => {
        this.globalresponse.SecondarySkillSet.split(/;|,|\n/).forEach(value => {
        if(value.trim()){
        this.sSkills.push(value.trim());
        
        }
        })
    });

  }

  Save(uSkillForm ){
    debugger;

    var pSkills=this.pSkills.map(function(val){
      return val;
    }).join(',');
    //console.log(pSkills);

    var sSkills=this.sSkills.map(function(val){
        return val;
    }).join(',')

    this.inputSkill=uSkillForm.value;
    this.inputSkill.PrimarySkillSet=pSkills;
    this.inputSkill.SecondarySkillSet=sSkills;
    this.inputSkill.UserDetailID=+localStorage.getItem('UserDetailID');
    this.dataservice.AddSkillset(this.inputSkill)
    .subscribe((res:any)=>{

      if(res.success){
        this.toster.showSuccess("Success");
        this.discard();
      }

    }
    )  ,
    error => {
      console.log(error);
      //this.isFailedMessage = true;
      // this.snackBar.open("Error in posting data", "Ok", {
      //   duration: 2000,
      // });
      this.toster.showError("Error in posting data");
      return;
    }
      
  }
}
export class skillset{
  PrimarySkillSet:string;
  SecondarySkillSet:string;
  
}

