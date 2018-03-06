import {Component, OnInit} from '@angular/core';
import {HomeComponentService} from './home.component.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];


  constructor(private homeService: HomeComponentService, private router: Router) {
  }

  ngOnInit() {
    this.getObservable();
  }

  getObservable() {
    this.homeService.getData().subscribe((data: any) => {
      this.data = data.items;
      console.log(JSON.stringify(data));
    }, (err) => {
      console.error(err);
    }, () => {
      console.log('completed');
    });
  }

}
