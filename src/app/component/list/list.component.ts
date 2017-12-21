import { Component, Injector } from '@angular/core';
import { Message } from '../../dto/message';
import { MessageService } from '../../service/message.service';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html'
})
export class ListComponent {
  messages :Message[];

  constructor(private injector: Injector,private router:Router) {}

  ngOnInit() {
    let messageService = this.injector.get(MessageService);
    messageService.getMessages().subscribe(
      response => {
        this.messages = response;
      },
      error => {
        if (error === 'Unauthorized') {
          this.router.navigate(["/login"]);
        }
      }
    );
  }

  delete(id: string) {
    let messageService = this.injector.get(MessageService);
    messageService.deleteMessage(id).subscribe(
      response => {
        location.reload();
      },
      error => {
        if (error === 'Unauthorized') {
          this.router.navigate(["/login"]);
        }
      }
    );
    
  }

}
