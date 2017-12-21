import { Component, Injector } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Message } from '../../dto/message';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: "my-app",
  templateUrl: './update.component.html',
})

export class UpdateComponent {
  constructor(private injector: Injector,private activatedRoute:ActivatedRoute,private router:Router) {}

  id = this.activatedRoute.snapshot.paramMap.get('id');

  message = {
    id: this.id,
    title: '',
    author: '',
    comment: '',
  };

  ngOnInit() {
    
    let messageService = this.injector.get(MessageService);
    messageService.getMessage(this.id).subscribe(
      response => {
        console.log(response);
        this.message = response;
      },
      error => {}
    );
  }

  update() {
    let messageService = this.injector.get(MessageService);

    messageService.updateMessage(this.message).subscribe(
      response => {
        this.router.navigate(["/"]);
      },
      error => {}
    )
  }
}