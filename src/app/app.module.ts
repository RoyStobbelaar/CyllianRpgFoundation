import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module'

import { LayoutComponent } from './layout/layout.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header-component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ContentContainerComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
