import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form.service'
import {TicketService} from '../ticket.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  name: String;
  fam: String;
  tel: String;
  mes: String;
  perf:String;

  constructor(
    private checkForm :CheckFormService,
    private flashMess: FlashMessagesService,
    private ticketServ: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addTicket(){
    const ticket = {
      first_name: this.name,
      last_name: this.fam,
      tel: this.tel,
      text: this.mes,
      perf: this.perf
    }

    for (const [key, value] of Object.entries(ticket) ) {
      if(!this.checkForm.checkInput(value)){
        this.flashMess.show(`поле ${key} не введено`, {cssClass: 'alert-danger', timeout: 1500})      
        return false;      
      }

      this.ticketServ.addTicket(ticket).subscribe(data => {
        if(data.success){
          this.flashMess.show(data.message, {cssClass: 'alert-danger', timeout: 1500})      
          this.router.navigate(['/ticket'])
        } else if(!data.success) {
          this.flashMess.show(data.message, {cssClass: 'alert-success', timeout: 1500})      
          this.router.navigate(['/cab'])
        }
      })
       
     }


  }

}
