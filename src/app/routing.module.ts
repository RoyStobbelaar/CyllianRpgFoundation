import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { CharacterViewComponent } from "./character-view/character-view.component";

const appRoutes: Routes = [
    {path: '', component: LayoutComponent},
  {path: 'characters', component: CharacterViewComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}
