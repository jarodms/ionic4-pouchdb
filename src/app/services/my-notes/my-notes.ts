import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';


@Injectable()
export class MyNotesProvider {

  private database: any;
  private myNotes: any;

  constructor() {
    this.database = new PouchDB('my-notes');
  }

  public addNote(theNote: string): Promise<string> {    
    const promise = this.database
      .put({
        _id: ('note:' + (new Date()).getTime()),
        note: theNote
      })
      .then((result): string => {
        return (result.id);
      });

    return (promise);
  }

  getMyNotes() {
    return new Promise(resolve => {
      let _self = this;
      this.database.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        // handle result
        _self.myNotes = result.rows;
        console.log("Results: " + JSON.stringify(_self.myNotes));
        resolve(_self.myNotes);        

      }).catch(function (err) {
        console.log(err);
      });
    });
  }  

}
