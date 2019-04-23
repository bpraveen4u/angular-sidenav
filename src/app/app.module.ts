import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './nav/header/header.component';
import { LeftMenuComponent } from './nav/left-menu/left-menu.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendComponent } from './send/send.component';
import { ProfileComponent } from './profile/profile.component';
import { StarComponent } from './star/star.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    HomeComponent,
    InboxComponent,
    SendComponent,
    ProfileComponent,
    StarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [EnvironmentUrlService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
