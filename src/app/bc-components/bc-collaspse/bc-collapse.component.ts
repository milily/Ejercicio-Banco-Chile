import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'bc-collapse',
    templateUrl: './bc-collapse.component.html',
    styleUrls: ['bc-collapse.component.scss'],
})
export class BcCollapseComponent implements OnInit {

  isTogglerOpen = true;

  ngOnInit() {
  }

  showToggler() {
    this.isTogglerOpen = !this.isTogglerOpen;
  }
}
