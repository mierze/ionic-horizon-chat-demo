import {Page} from 'ionic-angular';
import {FriendsPage} from '../friends/friends';
import {GlobalPage} from '../global/global';
import {ProfilePage} from '../profile/profile';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FriendsPage;
  tab2Root: any = GlobalPage;
  tab3Root: any = ProfilePage;
}
