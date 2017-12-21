import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthInfo } from '../dto/auth.info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(id: string,password: string): Observable<AuthInfo> {
    
    const header = new Headers({'Content-Type': 'application/json'});

    let user = {
      id: id,
      password: password
    }

    return this.http.post('http://localhost:8080/auth',user,{headers:header})
      .map(
        response => {
          let authInfo: AuthInfo = new AuthInfo;
          let json = response.json();
          authInfo.access_token = json['access_token'];
          authInfo.expires_in = json['expires_in'];
          return authInfo;
        }
      );
  }

}
