import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {
  isOwner = true; // Pour simuler que l'utilisateur est un propriétaire
  isManager = false; // Pour simuler que l'utilisateur n'est pas un manager

  // Liste d'animaux simulée
  pets = [
    { id: 1, name: 'Max', species: 'Dog', age: 4, specificNeeds: 'Aucune', guardType: 'temporary' },
    { id: 2, name: 'Bella', species: 'Cat', age: 2, specificNeeds: 'Allergies alimentaires', guardType: 'definitive' },
    { id: 3, name: 'Charlie', species: 'Rabbit', age: 3, specificNeeds: 'Exposition au soleil', guardType: 'temporary' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Fonction pour rediriger vers la page d'édition de l'animal
  editPet(petId: number) {
    this.router.navigate(['/edit-pet', petId]);
  }

  // Fonction pour supprimer un animal
  removePet(petId: number) {
    this.pets = this.pets.filter(pet => pet.id !== petId);
  }
}
