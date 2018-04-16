import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClassService } from '../../../services/class.service';
import { Class } from '../../../entity/Class';
import { Data } from '../../../providers/Data';

@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css'],
  providers: [ClassService]
})
export class ViewClassesComponent implements OnInit {

  classes: Class;

  constructor(
    private classService: ClassService,
    private data: Data,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.classService.getAllClasses()
      .subscribe(
        data => { this.classes = this.classService.createObject(data) },
        error => console.log(error)
      );
  }

  viewClass(_class: Class) {
    this.data.storage = _class;
    this.router.navigate(['admin/classes/edit', _class.slug]);
  }

}
