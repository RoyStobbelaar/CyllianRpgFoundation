import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    styleUrls: ['./main-menu.component.scss'],
    templateUrl: './main-menu.component.html'
})

export class MainMenuComponent implements OnInit {

    public menuItems = [];

    ngOnInit(): void {
        //Fill menuItems
        this.menuItems = [
            'Home',
            'Characters',
            'Stuff',
            'Game'
        ]
    }

}