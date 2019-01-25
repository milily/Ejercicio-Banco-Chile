import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'bc-collapse',
    templateUrl: './bc-collapse.component.html',
    styleUrls: ['bc-collapse.component.scss'],
})
export class BcCollapseComponent implements OnInit {

  // hides the content when init
  isTogglerOpen = false;

  ngOnInit() {
  }

  /** method that shows/hides the content in the template */
  showToggler() {
    this.isTogglerOpen = !this.isTogglerOpen;
  }
}
