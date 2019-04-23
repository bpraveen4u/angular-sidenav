import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../animations/animations';
import { Router } from '@angular/router';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'users', link:'users/list', icon: 'inbox'},
    {name: 'Inbox', link:'inbox', icon: 'inbox'},
    {name: 'Starred', link:'star', icon: 'star'},
    {name: 'Send email', link:'send', icon: 'send'}
  ]

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    //this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
