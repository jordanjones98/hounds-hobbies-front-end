import { Component, OnInit } from '@angular/core';

import { Data } from '../../../providers/Data';
import { Class } from '../../../entity/Class';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  _class: Class

  constructor(
    private data: Data
  ) {
    this._class = this.data.storage;
  }

  ngOnInit() {
  }

}
