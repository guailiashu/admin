import { Component } from '@angular/core';
import { ConfigService, OrderState } from './lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public config: ConfigService) {
    console.log(this.config.user);
    console.log(OrderState);
  }
}
