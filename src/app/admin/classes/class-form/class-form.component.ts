import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  performAction() {
    if(this.updateForm) {
      this.update();
    } else {
      this.add();
    }

    this.router.navigate(['/admin/classes/view']);
  }

  add() {
    this.classService.add(this._class).subscribe(
      data => {
        this._class = this.classService.createObject(data)
      }
    );
  }

  update() {
    this.classService.update(this._class).subscribe();
  }

  delete() {
    this.classService.delete(this._class).subscribe(
      data => {},
      error => {
        alert("Can not delete this class, an event with this class exists");
      }
    );
    this.router.navigate(['/admin/classes/view']);
  }

}
