import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {VideoDisplayComponent} from './video-display/video-display.component';

export const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'display/:id',
    component: VideoDisplayComponent
  }];
