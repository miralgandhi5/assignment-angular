import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {routes} from './user.router';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {HomeComponentService} from './home/home.component.service';
import {VideoDisplayComponent} from './video-display/video-display.component';
import {DisplayListComponent} from './displayList/displayList.component';


@NgModule({
  imports: [
    FormsModule, CommonModule, RouterModule.forChild(routes), HttpClientModule
  ],
  declarations: [LoginComponent, HomeComponent, VideoDisplayComponent, DisplayListComponent],
  exports: [LoginComponent, HomeComponent, VideoDisplayComponent, DisplayListComponent],
  providers: [HomeComponentService]
})
export class UserModule {
}
