// import {  } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/share/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute!: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event: { url: string; }) => {
      this.currentRoute = event.url;
    });
  }

  fireLogin() {
    this.authService.loginUser()
  }
}

