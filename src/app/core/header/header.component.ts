import {Component, OnInit} from '@angular/core';
import {Auth} from '@angular/fire/auth';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {AuthService} from 'src/app/share/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    public auth: Auth,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event: { url: string; }) => {
      this.currentRoute = event.url;
      setTimeout(() =>
          this.router.navigateByUrl(this.currentRoute)
        , 500)
    });
  }

  fireLogin(): void {
    this.authService.loginUser()
  }

  fireSignOut(): void {
    this.authService.signOutUser()
  }
}

