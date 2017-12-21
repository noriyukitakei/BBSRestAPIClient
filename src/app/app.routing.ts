import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { LoginComponent }  from './component/login/login.component';
import { ListComponent }  from './component/list/list.component';
import { AddComponent }  from './component/add/add.component';
import { UpdateComponent }  from './component/update/update.component';
import { ErrorComponent }  from './component/error/error.component';

const myRoutes = [
  { path: '', component: ListComponent },
  { path: 'messages/:id', component: UpdateComponent },
  { path: 'messages/delete/:id', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'login', component: LoginComponent },
//  { path: 'exam', component: ExampleComponent },
//  { path: '', component: MainComponent },
  { path: 'error', component: ErrorComponent }
  //{ path: '**', redirectTo: '/' }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
