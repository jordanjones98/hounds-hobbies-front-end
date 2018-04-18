import { Component, OnInit } from '@angular/core';

import { Class } from '../../../entity/Class';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  _class: Class = new Class();

  constructor() { }

  ngOnInit() {
  }

}
