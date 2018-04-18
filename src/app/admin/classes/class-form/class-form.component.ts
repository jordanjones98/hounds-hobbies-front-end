import { Component, OnInit, Input } from '@angular/core';

import { Class } from '../../../entity/Class';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  @Input() _class: Class;
  @Input() updateForm;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit() {
  }

  performAction() {
    if(this.updateForm) {
      this.update():
    } else {
      this.add();
    }
  }

  add() {
    this.classService.add(this.event).subscribe(
      data => {
        this._class = this.classService.createObject(data)
      }
    );
  }

  update() {
    this.classService.update(this._class).subscribe();
  }

}
