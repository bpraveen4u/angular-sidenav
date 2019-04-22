import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { InboxComponent } from 'src/app/inbox/inbox.component';
import { SendComponent } from 'src/app/send/send.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { StarComponent } from 'src/app/star/star.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'star', component: StarComponent },
  { path: 'send', component: SendComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
