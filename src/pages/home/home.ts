import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyNotesProvider } from '../../providers/my-notes/my-notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allNotes: any;

  constructor(public navCtrl: NavController,
              public myNotes: MyNotesProvider) {

  }

  ionViewDidLoad(){
 
    this.myNotes.getMyNotes().then((data) => {
      this.allNotes = data;
    });
 
  }

  onEnter(value: string) {    
    this.myNotes.addNote(value);
  }
}
