import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { UsersListComponent } from './users-list/users-list.component';
 
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild([
        { path: 'list', component: UsersListComponent }
      ])
  ],
  declarations: [UsersListComponent]
})
export class UsersModule { }