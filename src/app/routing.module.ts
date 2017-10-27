import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterContainerComponent} from "./character-container/character-container.component";

const appRoutes: Routes = [
  { path: '', component: CharacterContainerComponent },
  { path: 'characters', component: CharacterContainerComponent },
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}
