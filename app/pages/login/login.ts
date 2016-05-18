import {Page, NavController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

declare var horizon;

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  constructor(private _nav: NavController) {

    //this.horizon = horizon('users');
  }

  logInWithTwitter() {
    console.log('Logging in with Twitter');

    this._nav.push(TabsPage);
    /*

    Horizon.clearAuthTokens();

    if(!horizon.hasAuthToken()) {
      console.log('No auth token');
      horizon.authEndpoint('twitter').toPromise().then((endpoint) => {
        console.log('Got auth endpoint', endpoint);
        window.location.pathname = endpoint;
      })
    }
    */
  }
}
