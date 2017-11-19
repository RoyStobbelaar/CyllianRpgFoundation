import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module'

import { LayoutComponent } from './layout/layout.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header-component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuItemComponent } from "./main-menu/menu-item/main-menu-item.component";
import { CharacterViewComponent } from "./character-view/character-view.component";
import { CharacterContainerComponent } from "./character-container/character-container.component";
import {IndexComponent} from "./index/index.component";
import {CharacterService} from "./services/character.service";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    LayoutComponent,
    ContentContainerComponent,
    HeaderComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    CharacterViewComponent,
    CharacterContainerComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    //AngularFireModule.initializeApp(environment.firebase, 'cyllianrpg'),
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
