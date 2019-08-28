import { Component } from '@angular/core';

import { MyNotesProvider } from '../../providers/my-notes/my-notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allNotes: any;

  constructor(public myNotes: MyNotesProvider) {

  }

  ionViewWillLoad(){
 
    this.myNotes.getMyNotes().then((data) => {
      this.allNotes = data;
    });
 
  }

  onEnter(value: string) {    
    this.myNotes.addNote(value);
  }
}
