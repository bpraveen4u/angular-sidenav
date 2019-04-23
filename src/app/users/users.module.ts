import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'list', component: UsersListComponent }
      ])
  ],
  declarations: [UsersListComponent]
})
export class UsersModule { }