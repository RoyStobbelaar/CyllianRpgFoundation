import {Component, OnInit} from '@angular/core';
import {Character} from "../Logic/Models/character";

@Component({
  selector: 'character-container',
  template: `    
    <div class="container">
      <div class="grid-x" >
        <div style="padding: 5px;" class="cell medium-4" *ngFor="let character of characters">
          <character-view [character]="character"></character-view>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./character-container.component.scss']
})

export class CharacterContainerComponent implements OnInit {

  public characters: Character[];

  constructor() { }

  ngOnInit() {
    this.characters = [];
    this.characters.push({
      name: 'Razhanal',
      race: 'Demon',
      gender: 'Female',
      subclass: 'Ancient Warrior',
      portrait: '../assets/images/portraits/portrait_1.png',
      description: 'Razhanal the Ancient Demon is one of the survivors of the Gods Apocalypse. Her powers.... '
    });

    this.characters.push({
      name: 'Yzanoth',
      race: 'Human',
      gender: 'Male',
      subclass: 'Ancient Death Knight',
      portrait: '../assets/images/portraits/portrait_2.png',
      description: 'Nicknamed the Ice God. Yzanoth is a immortal death knight, roaming the Forsaken Wastes. ...'
    });

    this.characters.push({
      name: 'Isidrae',
      race: 'Elf',
      gender: 'Female',
      subclass: 'Ranger',
      portrait: '../assets/images/portraits/portrait_3.png',
      description: 'Isidrae is a young elven commander leading the 11th ranger unit from the elven army. '
    });
  }
}
