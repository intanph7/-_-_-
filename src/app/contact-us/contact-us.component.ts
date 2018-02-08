import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  list: any[]

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }
  add(f: NgForm) {
    this.db.list('contact').push({
      name: f.value.name,
      email: f.value.email,
      message:f.value.message
    })

    f.reset()
  }
}
