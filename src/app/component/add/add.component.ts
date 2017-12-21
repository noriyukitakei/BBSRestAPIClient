import { Component, Injector } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Message } from '../../dto/message';
import { Router } from '@angular/router';

@Component({
  selector: "my-app",
  templateUrl: './add.component.html',
})
export class AddComponent {
  constructor(private injector: Injector,private router:Router) {}
  
  message = {
    title: '',
    author: '',
    comment: '',
  };

  add() {
    let message = new Message;
    message.author = this.message.author;
    message.title = this.message.title;
    message.comment = this.message.comment;

    let messageService = this.injector.get(MessageService);

    messageService.addMessage(message).subscribe(
      response => {
        this.router.navigate(["/"]);
      },
      error => {}
    );
  }
}