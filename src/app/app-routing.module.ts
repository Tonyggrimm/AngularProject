import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarousselComponent} from "./caroussel/caroussel.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import { GraphComponent } from './graph/graph.component';
import {ListeDestinationComponent} from "./liste-destination/liste-destination.component";
import {DestinationDetailComponent} from "./destination-detail/destination-detail.component";
import {SearchDestinationComponent } from './search-destination/search-destination.component';
import { ContinentDestinationsComponent } from './continent-destinations/continent-destinations.component';


const routes: Routes = [




  { path:'', redirectTo: 'alldestinations', pathMatch: 'full'},
  { path: 'contact', component: ContactListComponent},
  { path: 'rechercheDestination', component: SearchDestinationComponent},
  { path: 'caroussel', component: CarousselComponent},
  { path: "graph", component:GraphComponent},
  { path: 'alldestinations', component: ListeDestinationComponent},
  { path: 'membres/:id', component: DestinationDetailComponent},
  { path: 'continent-destinations/:continent',component:ContinentDestinationsComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
