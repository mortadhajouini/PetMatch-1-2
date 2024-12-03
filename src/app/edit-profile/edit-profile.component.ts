import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userName = 'John Doe';
  userEmail = 'johndoe@example.com';
  userRole = 'Owner'; // Initial role value

  isOwner = true;
  isManager = false;

  constructor() { }

  ngOnInit(): void {
    // Update role-based logic if necessary
    if (this.userRole === 'Owner') {
      this.isOwner = true;
      this.isManager = false;
    } else if (this.userRole === 'Manager') {
      this.isOwner = false;
      this.isManager = true;
    }
  }

  // Save the updated profile details
  saveProfile() {
    alert('Profile updated successfully!');
    // Add logic to save updated profile (e.g., send to backend)
  }

  // Cancel the editing and go back
  cancelEditing() {
    alert('Editing canceled!');
    // Add logic to navigate back to profile page or previous page
  }
}
