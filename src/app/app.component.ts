import { Component } from '@angular/core';
import { onMainContentChange } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [onMainContentChange]
})
export class AppComponent {
  title = 'Side Nav Proj';

  name = 'Angular';
  public onSideNavChange: boolean;

  constructor() {
    //this._sidenavService.sideNavState$.subscribe( res => {
    //  console.log(res)
      this.onSideNavChange = true; //res;
    //})
  }
}
