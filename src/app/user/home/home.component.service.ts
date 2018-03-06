import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export class HomeComponentService {


  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('https://www.googleapis.com/youtube/v3/' +
      'search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY');
    /*return Observable.of(this.interns);*/
  }

  handleError(err: HttpErrorResponse) {
    return observable.throw(err.error);
  }

}
