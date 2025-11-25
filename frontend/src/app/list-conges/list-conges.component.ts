import { Component } from '@angular/core';
import { CongeService } from '../services/conge.service';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.css',]
})
export class ListCongesComponent {

  conges: any;
  selectedConge: any = null;
  deleteModal: any;

  constructor(private congeService: CongeService, private router: Router) {}

  ngOnInit() {
    this.CongeList();
  }

  CongeList() {
    this.congeService.listConge().subscribe(conge => {
      this.conges = conge;
      console.log(this.conges);
    });
  }

  // Open modal
  openDeleteModal(conge: any) {
    this.selectedConge = conge;

    const modalElement = document.getElementById('deletePermissionModal');
    this.deleteModal = new bootstrap.Modal(modalElement);
    this.deleteModal.show();
  }

  // Cancel deletion
  cancelDelete() {
    this.selectedConge = null;
    if (this.deleteModal) this.deleteModal.hide();
  }

  // Confirm deletion
  confirmDelete() {
    if (!this.selectedConge) return;

    this.congeService.deleteConge(this.selectedConge.id).subscribe(() => {
      console.log("Permission deleted successfully");
      this.CongeList(); // refresh table
      this.cancelDelete();
    });
  }

  // Accept / Reject
  acceptConge(id: any) {
    this.congeService.acceptConge(id).subscribe(() => this.CongeList());
  }

  rejectConge(id: any) {
    this.congeService.rejectConge(id).subscribe(() => this.CongeList());
  }

}
