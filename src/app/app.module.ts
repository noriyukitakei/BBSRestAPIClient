import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { JsonpModule }  from "@angular/http";
import { HttpModule } from '@angular/http'
import { MY_ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/list/list.component';
import { AddComponent } from './component/add/add.component';
import { UpdateComponent } from './component/update/update.component';
import { MessageService }  from './service/message.service';
import { ErrorComponent } from './component/error/error.component';
import { AuthService } from './service/auth.service';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    MY_ROUTES
  ],
  providers:    [ MessageService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
