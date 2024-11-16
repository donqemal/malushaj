import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NgStyle} from "@angular/common";
import {NavigationComponent} from "./navigation/navigation.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, NgStyle, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    const browserLang = translate.getBrowserLang();
    translate.setDefaultLang(browserLang ? browserLang : 'en');
  }
}
