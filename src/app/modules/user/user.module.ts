import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [UserComponent, ListUsersComponent, AddUsersComponent, ViewUsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
