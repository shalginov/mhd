import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {AuthService} from '../auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  first_name: String;
  login: String;
  last_name: String;
  password: String;
  

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private authServ: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
   const user = {
     first_name: this.first_name,
     login: this.login,
     last_name: this.last_name,
     password: this.password     
   };
   
   for (const [key, value] of Object.entries(user) ) {
    if(!this.checkForm.checkInput(value)){
      this.flashMess.show(`введите ${key}`, {cssClass: 'alert-danger', timeout: 1500})      
      return false;      
    }
    this.authServ.regUser(user).subscribe(data => {
      if(!data.success){
        this.flashMess.show(data.message, {cssClass: 'alert-danger', timeout: 1500})      
        this.router.navigate(['/reg'])
      } else if(data.success) {
        this.flashMess.show(data.message, {cssClass: 'alert-success', timeout: 1500})      
        this.router.navigate(['/auth'])
      }
    })
     
   }
   

  }

}
