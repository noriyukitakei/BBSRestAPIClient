import { Injectable } from '@angular/core';
import { Message } from '../dto/message';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  getMessage(id: string):Observable<Message> {
    let accessToken = localStorage.getItem('access_token');
    const header = new Headers({'Authorization': 'Bearer ' + accessToken});

    return this.http.get('http://localhost:8080/messages/' + id,{headers:header}).map (
      response => {
        let message: Message = new Message;
        let json = response.json();
        message.id = json['id'];
        message.author = json['author'];
        message.title = json['title'];
        message.comment = json['comment'];
        return message;
      }
    ).catch(e => {
      if (e.status === 401) {
          return Observable.throw('Unauthorized');
      }
    })
  }

  getMessages(): Observable<Message[]> {
    let accessToken = localStorage.getItem('access_token');
    const headers = new Headers({'Authorization': 'Bearer ' + accessToken});

    return this.http.get('http://localhost:8080/messages',{
      headers: headers
    }).map (
      response => {
        let messages: Message[] = [];
        let json = response.json();
        for (let i = 0; i < Object.keys(json).length; i++) {
          let message = new Message;
          message.id = json[i].id;
          message.author = json[i].author;
          message.title = json[i].title;
          message.comment = json[i].comment;
          messages.push(message);
        }
        return messages;

      }
    ).catch(e => {
      if (e.status === 401) {
          return Observable.throw('Unauthorized');
      }
    })
  }

  addMessage(message: Message): Observable<void>{
    let accessToken = localStorage.getItem('access_token');
    const headers = new Headers({'Authorization': 'Bearer ' + accessToken});
    headers.append('Content-Type', 'application/json');

    let json = {
      title: message.title,
      author: message.author,
      comment: message.comment
    }

    return this.http.post('http://localhost:8080/messages/new',json,{
      headers: headers
    }).map (
      response => {}
    ).catch(e => {
      if (e.status === 401) {
          return Observable.throw('Unauthorized');
      }
    })

  }

  updateMessage(message: Message): Observable<void> {
    let accessToken = localStorage.getItem('access_token');
    const headers = new Headers({'Authorization': 'Bearer ' + accessToken});
    headers.append('Content-Type', 'application/json');

    let json = {
      id: message.id,
      title: message.title,
      author: message.author,
      comment: message.comment
    }

    return this.http.post('http://localhost:8080/messages/new',json,{
      headers: headers
    }).map (
      response => {}
    ).catch(e => {
      if (e.status === 401) {
          return Observable.throw('Unauthorized');
      }
    })
  }

  deleteMessage(id: String): Observable<void>  {
    let accessToken = localStorage.getItem('access_token');
    const headers = new Headers({'Authorization': 'Bearer ' + accessToken});
    headers.append('Content-Type', 'application/json');

    return this.http.delete('http://localhost:8080/messages/' + id,{
      headers: headers
    }).map (
      response => {}
    ).catch(e => {
      if (e.status === 401) {
          return Observable.throw('Unauthorized');
      }
    })

  }
}
