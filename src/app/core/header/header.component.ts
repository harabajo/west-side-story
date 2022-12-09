import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute!: string;

  constructor(private router: Router,) { }

  ngOnInit() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event: { url: string; }) => {
      this.currentRoute = event.url;
    });
  }
}

