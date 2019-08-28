import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class KangarooService {
  db: any;

  constructor() { 
    this.db = new PouchDB('kangaroo');
  }

  
}
