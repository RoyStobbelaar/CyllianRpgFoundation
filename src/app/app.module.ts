import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module'

import { LayoutComponent } from './layout/layout.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header-component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuItemComponent } from "./main-menu/menu-item/main-menu-item.component";
import { CharacterViewComponent } from "./character-view/character-view.component";

@NgModule({
  declarations: [
    LayoutComponent,
    ContentContainerComponent,
    HeaderComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    CharacterViewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
