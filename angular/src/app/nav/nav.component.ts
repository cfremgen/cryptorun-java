import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from '../shared/animations';

@Component({
  selector: 'cr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [fadeIn()],
})
export class NavComponent {
  sectionCharts: boolean = false;
  sectionHelp: boolean = false;

  constructor(public router: Router) {
    //Handle router end event
    router.events.subscribe((e) => { });
  }

  ngOnDestroy() {
  }

  logIn() {
  }
}