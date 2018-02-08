import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  list : any[]

  constructor(private db : AngularFireDatabase) { }

  ngOnInit() { 
    this.db.list('review')
    .snapshotChanges()
    .subscribe(result => {
      this.list = result.map(data => {
        var obj = {
          key : data.key,
          value : data.payload.val()
        }
        return obj;
      });
    })
  }
  add(f: NgForm){
    this.db.list('review').push({
      name : f.value.name,
      comment : f.value.comment
    })
  }

}
