import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rendezvous', component: RendezvousComponent },
  { path: 'my-pets', component: MyPetsComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'edit-pet', component: EditPetComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },  // Fallback to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
