import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  toggleProfile = false;

  constructor(){

  }

  ngOnInit() {

  }

  openProfile() {
    this.toggleProfile = !this.toggleProfile;
  }

}
