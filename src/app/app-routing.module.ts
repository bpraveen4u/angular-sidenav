import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { InboxComponent } from 'src/app/inbox/inbox.component';
import { SendComponent } from 'src/app/send/send.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { StarComponent } from 'src/app/star/star.component';
import { NotFoundComponent } from 'src/app/error-pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component : NotFoundComponent},
  { path: 'users', loadChildren: "./users/users.module#UsersModule" },
  { path: 'profile', component: ProfileComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'star', component: StarComponent },
  { path: 'send', component: SendComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
