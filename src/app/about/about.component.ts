import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  showGoalsButtonText = 'Show your goals';
  goalsShown = false;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  toggleShowGoals() {
    if (this.goalsShown) {
      this.goalsShown = false;
      this.showGoalsButtonText = 'Show your goals';
    } else {
      this.goalsShown = true;
      this.showGoalsButtonText = 'Hide your goals';
    }

  }

}
