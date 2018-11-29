import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class TosterService {

  constructor(public toastr: ToastrManager) { }
  showSuccess(message:string) {
    this.toastr.successToastr(message, 'Success!',{showCloseButton:true});
}

showError(message:string) {
    this.toastr.errorToastr(message, 'Oops!',{showCloseButton:true});
}

showWarning(message:string) {
    this.toastr.warningToastr(message, 'Alert!',{showCloseButton:true});
}

showInfo(message:string) {
    this.toastr.infoToastr(message, 'Info',{showCloseButton:true});
}

}
