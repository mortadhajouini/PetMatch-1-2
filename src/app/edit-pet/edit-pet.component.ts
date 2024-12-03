import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petId: number | null = null;
  petName: string = '';
  petSpecies: string = '';
  petAge: number | null = null;
  petSpecificNeeds: string = ''; // Nouveau champ pour les besoins spécifiques
  petGuardType: string = 'temporary'; // Par défaut, type de garde temporaire

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'animal depuis l'URL
    this.petId = +this.route.snapshot.paramMap.get('id')!;

    // Charger les données de l'animal (dans une vraie application, on les récupérerait depuis un service)
    this.loadPetData();
  }

  loadPetData() {
    // Exemple statique pour charger les données de l'animal en fonction de l'ID
    if (this.petId === 1) {
      this.petName = 'Max';
      this.petSpecies = 'Dog';
      this.petAge = 4;
      this.petSpecificNeeds = 'Aucune';
      this.petGuardType = 'temporary';
    } else if (this.petId === 2) {
      this.petName = 'Bella';
      this.petSpecies = 'Cat';
      this.petAge = 2;
      this.petSpecificNeeds = 'Allergies alimentaires';
      this.petGuardType = 'definitive';
    } else {
      this.petName = 'Charlie';
      this.petSpecies = 'Rabbit';
      this.petAge = 3;
      this.petSpecificNeeds = 'Exposition au soleil';
      this.petGuardType = 'temporary';
    }
  }

  savePet() {
    // Logique pour sauvegarder les données (dans une vraie app, on enverrait ces données à un service)
    alert(`Les informations de ${this.petName} ont été mises à jour !`);
    this.router.navigate(['/my-pets']);
  }
}
