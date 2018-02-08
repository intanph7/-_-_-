import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipeList: any[];
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    
    this.db.list('data')
      .valueChanges()
      .subscribe(result => {
        this.recipeList = result;
      })

  }
}

