import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userName = 'John Doe';
  userEmail = 'johndoe@example.com';
  userRole = 'Owner'; // Change to 'Manager' for a manager profile
  isOwner = true;
  isManager = false;

  ngOnInit() {
    // Example logic to set role-based options
    if (this.userRole === 'Owner') {
      this.isOwner = true;
      this.isManager = false;
    } else if (this.userRole === 'Manager') {
      this.isOwner = false;
      this.isManager = true;
    }
  }

  editProfile() {
    alert('Edit profile functionality to be implemented.');
  }
}
