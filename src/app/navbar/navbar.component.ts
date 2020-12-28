import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;

  constructor( private router:Router) { }
    home(){
    this.router.navigate(['/home'])
    }
    about(){
      this.router.navigate(['/about'])
      }

  ngOnInit(): void {
  }

}
