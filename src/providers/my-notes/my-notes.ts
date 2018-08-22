import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

/*
  Generated class for the MyNotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyNotesProvider {

  private database: any;
  myNotes: any;

  constructor() {
    this.database = new PouchDB("my-notes");
  }

  public addNote(theNote: string): Promise<string> {
    // alert('add note: ' + theNote);
    var promise = this.database
      .put({
        _id: ("note:" + (new Date()).getTime()),
        note: theNote
      })
      .then((result): string => {
        return (result.id);
      });

    return (promise);

  }



  getMyNotes() {

    if (this.myNotes) {
      return Promise.resolve(this.myNotes);
    }

    return new Promise(resolve => {

      this.database.allDocs({

        include_docs: true

      }).then((result) => {

        this.myNotes = [];

        result.rows.map((row) => {
          this.myNotes.push(row.doc);
        });

        resolve(this.myNotes);

        this.database.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((error) => {

        console.log(error);

      });

    });

  }

  handleChange(change) {

    let changedDoc = null;
    let changedIndex = null;

    this.myNotes.forEach((doc, index) => {

      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }

    });

    //A document was deleted
    if (change.deleted) {
      this.myNotes.splice(changedIndex, 1);
    }
    else {

      //A document was updated
      if (changedDoc) {
        this.myNotes[changedIndex] = change.doc;
      }

      //A document was added
      else {
        this.myNotes.push(change.doc);
      }

    }

  }

}
