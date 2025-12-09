import { Component } from '@angular/core';
import {Header} from "../core/header/header";
import {Footer} from "../core/footer/footer";

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
