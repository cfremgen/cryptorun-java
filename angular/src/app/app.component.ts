import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertDialog } from 'app/shared/dialogs/alert.component';
import { HttpService } from 'app/shared/services/http.service';


import { fadeInOut } from './shared/animations';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'cr-root',
  template: `<cr-nav></cr-nav>`,
  animations: [fadeInOut()]
})
export class AppComponent {
  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private http: HttpService) { }

  ngOnInit() {
  }
}