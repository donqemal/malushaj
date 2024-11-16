import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  selectedTab: string = 'home'; // Default tab

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      if (currentRoute.includes('projects')) {
        this.selectedTab = 'projects';
      } else if (currentRoute.includes('contact')) {
        this.selectedTab = 'contact';
      } else {
        this.selectedTab = 'home';
      }
    });
  }
}
