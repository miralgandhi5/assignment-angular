import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './displayList.component.html',
  styleUrls: ['./displayList.component.css']
})
export class DisplayListComponent implements OnInit {
  @Input() title = '';
  @Input() thumbnail = [];
  @Input() id = '';


  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.title);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

}
