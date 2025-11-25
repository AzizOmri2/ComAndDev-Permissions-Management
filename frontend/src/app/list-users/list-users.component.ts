import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

declare var bootstrap: any; // Needed for Bootstrap JS modal

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = null;
  deleteModal: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Fetch all users
  loadUsers(): void {
    this.userService.listUser().subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.error("Failed to load users", error);
      }
    );
  }

  // Open delete confirmation modal
  openDeleteModal(user: any): void {
    this.selectedUser = user;

    // Initialize and show Bootstrap modal
    const modalElement = document.getElementById('deleteUserModal');
    this.deleteModal = new bootstrap.Modal(modalElement);
    this.deleteModal.show();
  }

  // Confirm delete
  confirmDelete(): void {
    if (!this.selectedUser) return;

    this.userService.deleteUser(this.selectedUser.id).subscribe(
      () => {
        console.log("User deleted successfully");
        this.loadUsers(); // Refresh list
        this.deleteModal.hide(); // Hide modal
        this.selectedUser = null; // Reset selection
      },
      (error) => {
        console.error("Failed to delete user", error);
      }
    );
  }
}
