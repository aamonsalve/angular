import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autService: AuthService,
    private router: Router, private location : Location,
    private activatedRouter: ActivatedRoute
    ) { }

  ngOnInit() {
  }
  isAuth() {
    return this.autService.isAuthenticated();
    }
    logout(){
      this.autService.doLogout()
      .then((res) => {
        this.location.back();
      }, (error) => {
        console.log("Logout error", error);
      });
    }
  
}
