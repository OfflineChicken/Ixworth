import { Component, OnInit } from '@angular/core';
import { plans } from '../plans';


@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.less']
})
export class PlannerComponent implements OnInit {
  plans = plans;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The plan has been shared! ... with no one. This isn\'t implemented.');
  }
}
