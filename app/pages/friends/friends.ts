import {Page} from 'ionic-angular';

import {NgZone} from 'angular2/core';

declare var horizon;

@Page({
  templateUrl: 'build/pages/friends/friends.html',
})
export class FriendsPage {
  chatText: string
  friends: any[]

  constructor(private _ngZone: NgZone) {

    this.loadData();

    /*
    const friends = horizon("friends");

    friends.store([{
      avatar: 'https://pbs.twimg.com/profile_images/639806328240742400/1aM_kHKo.jpg',
      name: 'Matt Kremer'
    }, {
      avatar: 'https://pbs.twimg.com/profile_images/707722192776273920/i4EVQan8.jpg',
      name: 'Ben Sperry'
    }, {
      avatar: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl.jpg',
      name: 'Max Lynch'
    }])
    */
  }

  loadData() {
    // Create a "messages" collection
    const friends = horizon("friends");

    // Query chats with `.order`, which by default is in ascending order
    friends.order("name", 'descending').limit(100).watch().subscribe(
      // Returns the entire array
      (friends) => {

        // Here we replace the old value of `chats` with the new
        //  array. Frameworks such as React will re-render based
        //  on the new values inserted into the array.

        this._ngZone.run(() => {
          this.friends = friends;
        });

        console.log('Loaded friends', friends);
      },

      (err) => {
        console.log(err);
      })
  }
}
