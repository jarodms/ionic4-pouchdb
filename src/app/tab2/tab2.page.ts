import { Component } from '@angular/core';
import { KangarooService } from '../kangaroo.service';
import { Observable } from 'rxjs';

export interface Entry {
  _id: string;
  test: string;
  weight: number;
  time: number;
  bp: string;
  bodyfatPer: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  allDocs: any;
  
  constructor(private kangarooDB: KangarooService) {
    // this.allDocs = this.kangarooDB.db.allDocs({include_docs: true});
    let _self = this;
    this.kangarooDB.db.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      // handle result
      _self.allDocs = result.rows;
      console.log("Results: " + JSON.stringify(_self.allDocs));
    }).catch(function (err) {
      console.log(err);
    });


  }

  writeUserData(testId) {    

    let item = {} as Entry;
    item._id = testId.value;
    item.test = "test";
    item.weight = 1234;
    item.time = Date.now();
    this.kangarooDB.db.put(item);

    let _self = this;
    this.kangarooDB.db.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      // handle result
      _self.allDocs = result.rows;
      console.log("Results: " + JSON.stringify(_self.allDocs));
    }).catch(function (err) {
      console.log(err);
    });
  }

}
